import { BaseComponent, Component } from "./../component.js";
import { Hoverable, Draggable, Droppable } from "../common/type.js";
import {
  EnableDrop,
  EnableDragging,
  EnableHover,
} from "../../decorators/draggable.js";
export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;
type DragState = "start" | "stop" | "enter" | "leave";
type OnDragStateListener<T extends Component> = (
  target: T,
  state: DragState
) => void;
interface SectionContainer extends Component, Composable, Draggable, Hoverable {
  setOnCloseListener(listener: OnCloseListener): void;
  setOnDragStateListener(listener: OnDragStateListener<SectionContainer>): void;
  muteChildren(state: "mute" | "unmute"): void;
  getBoundingRect(): DOMRect;
  onDropped(): void;
}

type SectionContainerConstructor = {
  //생성자의 타입을 만드는 법

  new (): SectionContainer;
  //SectionContainer에서 허용되는 어떤것이는 new를 할 수 있게 해주는 Type지정
};

@EnableDragging
@EnableHover
export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer {
  private closeListener?: OnCloseListener;
  private dragStateListener?: OnDragStateListener<PageItemComponent>;

  constructor() {
    super(`<li draggable="true" class="page-item">
                <section class="page-item__body">
            
                </section>
                <div class="page-item__controls">
                    <button class="close">&times;</button>
                </div>
            </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
      //클릭이벤트 알림만 뜨게 만드는 것.
    };
    this.element.addEventListener("dragstart", (_: DragEvent) => {
      this.notifyDragObservers("start");
      this.element.classList.add("lifted");
    });
    this.element.addEventListener("dragend", (_: DragEvent) => {
      this.notifyDragObservers("stop");
      this.element.classList.remove("lifted");
    });
    this.element.addEventListener("dragenter", (_: DragEvent) => {
      this.notifyDragObservers("enter");
      this.element.classList.add("drop-area");
    });
    this.element.addEventListener("dragleave", (_: DragEvent) => {
      this.notifyDragObservers("leave");
      this.element.classList.remove("drop-area");
    });
  }
  notifyDragObservers(state: DragState): void {
    this.dragStateListener && this.dragStateListener(this, state);
  }

  onDragStart(event: DragEvent): void {
    console.log("dragStart", event);
  }
  onDragEnd(event: DragEvent): void {
    console.log("dragend", event);
  }
  onDragEnter(event: DragEvent): void {
    console.log("dragEnter", event);
  }
  onDragLeave(event: DragEvent): void {
    console.log("dragLeave", event);
  }

  onDropped(): void {
    this.element.classList.remove("drop-area");
  }

  addChild(child: Component): void {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    //container
    console.log(container);
    child.attatchTo(container);
  }

  setOnCloseListener(listener: OnCloseListener): void {
    this.closeListener = listener;
  }

  setOnDragStateListener(
    listener: OnDragStateListener<PageItemComponent>
  ): void {
    this.dragStateListener = listener;
  }

  muteChildren(state: "mute" | "unmute"): void {
    if (state === "mute") {
      this.element.classList.add("mute-children");
    } else {
      this.element.classList.remove("mute-children");
    }
  }
  getBoundingRect(): DOMRect {
    return this.element.getBoundingClientRect();
  }
}

@EnableDrop
export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable, Droppable {
  private children = new Set<SectionContainer>();
  private dropTarget?: SectionContainer;
  private dragTarget?: SectionContainer;

  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class="page"></ul>`);
    //상속받으니까 부모클래스의 생성자 호출해야함.
    // this.element.addEventListener("dragover", (event: DragEvent) => {
    //   this.onDragOver(event);
    // });
    // this.element.addEventListener("drop", (event: DragEvent) => {
    //   this.onDrop(event);
    // });
  }

  onDragOver(_: DragEvent): void {
    // event.preventDefault();
    // console.log("dragOver", event);
  }

  onDrop(event: DragEvent): void {
    // event.preventDefault();
    // console.log("drop", event);
    if (!this.dropTarget) {
      return;
    }
    if (this.dragTarget && this.dragTarget !== this.dropTarget) {
      const dropY = event.clientY;
      const srcElement = this.dragTarget.getBoundingRect();

      this.dragTarget.removeFrom(this.element);
      //드래그 하고 있는 것 페이지로부터 삭제
      this.dropTarget.attach(
        this.dragTarget,
        dropY < srcElement.y ? "beforebegin" : "afterend"
      );
    }
    //이때 위치를 바꾸자

    this.dropTarget.onDropped();
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attatchTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
      this.children.delete(item);
      //삭제 버튼 클릭 시 children state에서 제거하기.
    });

    this.children.add(item);
    //페이지가 가지고 있는 모든 자식요소를 알고 있기위한 childern state에 저장하기 위함

    item.setOnDragStateListener(
      (target: SectionContainer, state: DragState) => {
        switch (state) {
          case "start":
            this.dragTarget = target;
            this.updateSections("mute");
            break;
          case "stop":
            this.dragTarget = undefined;
            this.updateSections("unmute");

            break;
          case "enter":
            console.log("enter", target);
            this.dropTarget = target;
            break;
          case "leave":
            this.dropTarget = undefined;
            break;
          default:
            throw new Error(`unsupported state: ${state}`);
        }
      }
    );
  }

  private updateSections(state: "mute" | "unmute") {
    this.children.forEach((section: SectionContainer) => {
      section.muteChildren(state);
    });
  }
}
