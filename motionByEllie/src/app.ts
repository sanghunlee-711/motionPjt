import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { InputDialog, TextData, MediaData } from './components/dialog/dialog.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { Component } from './components/component.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  //MediaSecionInput타입 또는 TextSectionInput 타입 두가지중 하나를 받아 와서 그것의 새로운 인스턴스를 만드는 타입
  new (): T;
}

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attatchTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>("#new-image", MediaSectionInput, (input: MediaSectionInput) => new ImageComponent(input.title, input.url));
    this.bindElementToDialog<MediaSectionInput>("#new-video", MediaSectionInput, (input:MediaSectionInput) => new VideoComponent(input.title, input.url));
    this.bindElementToDialog<TextSectionInput>("#new-note", TextSectionInput, (input: TextSectionInput) => new NoteComponent(input.title, input.body));
    this.bindElementToDialog<TextSectionInput>("#new-todo", TextSectionInput, (input: TextSectionInput) => new TodoComponent(input.title, input.body));
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(selector:string, InputComponent: InputComponentConstructor<T>, makeSection: (input: T) => Component){
    const todoBtn = document.querySelector(selector)! as HTMLButtonElement;
    todoBtn.addEventListener("click", () => {
      //addEventListener의 경우 이벤트가 등록된 순서로 실행이 되지만 onclick을 사용하는 경우 기존 이벤트가 무시되고 덮어씌어지게 되므로
      // 여러방향에서 하나의 node el을 사용하여 이벤트를 등록한다면 addEventListener를 사용하자.
      const dialog = new InputDialog();
      const inputSection = new InputComponent();

      dialog.addChild(inputSection);
      dialog.attatchTo(this.dialogRoot);

      dialog.setOnCloseListener(()=>{
        dialog.removeFrom(this.dialogRoot);
      })

      dialog.setOnSubmitListener(()=>{
        //섹션을 만들어서 페이지에 추가해 준다.
        const todo = makeSection(inputSection);
        this.page.addChild(todo);
        dialog.removeFrom(this.dialogRoot);
      })
    })
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);