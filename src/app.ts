import { PageComponent } from "./components/page.js";
import { ImageComponentImpl, ImageComponent } from "./components/image.js";
import { NoteComponentEl, NoteComponent } from "./components/note.js";
import { VideoComponentImpl, VideoComponent } from "./components/video.js";
import { TodoComponentImpl, TodoComponent } from "./components/todo.js";
import { PopUpComponentImpl, PopUpComponent } from "./components/popUp.js";

//
type ComponentType =
  | ImageComponent
  | VideoComponent
  | NoteComponent
  | TodoComponent
  | PopUpComponent;

export class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }

  makeAndDeleteComp(component: ComponentType): void {
    //make
    const parent: HTMLElement = document.querySelector(".page") as HTMLElement;
    parent.insertAdjacentElement("afterbegin", component.element);

    //delete
    const deleteBtn = component.deleteButton;
    deleteBtn?.addEventListener("click", function () {
      parent.removeChild(component.element);
    });
  }

  dragAndDrop(component: ComponentType):void{
    const parent: HTMLElement = document.querySelector(".page") as HTMLUListElement;
    const element = component.element;
    let pickEl: HTMLElement;
    let overEl: HTMLElement;
    element.addEventListener('dragstart',function(event){
      const eventTarget = event.target as HTMLElement;
      pickEl = eventTarget;
    })

    element.addEventListener('dragend',function(event){
      const eventTarget = event.target! as HTMLLIElement;

      if(eventTarget.className === "element"){
        // eventTarget.style.border = "1px solid black";
      }

      if(overEl !== pickEl){
        parent.insertBefore(pickEl, overEl);
        overEl.style.margin = "2vh 0";
      }
    })
    
    parent.addEventListener('dragover',function(event){
      const eventTarget = event.target! as HTMLLIElement;

      if(eventTarget.className === "element"){
        eventTarget.style.border = "1px solid white";
        eventTarget.style.margin = "8vh 0";
        overEl = eventTarget;
      }
      setTimeout(function() {
        if(eventTarget.className === "element"){
          eventTarget.style.border = "1px solid black";
          eventTarget.style.margin = "2vh 0";
        }
        
      }, 500);

    })
  }
}

export const newApp = new App(
  document.querySelector(".cardWrapper")! as HTMLElement
);

const imageComponent = new ImageComponentImpl(
  "Image Title",
  "https://picsum.photos/250/250"
);

const noteComponent = new NoteComponentEl("Note Title", "Note Contets");
const videoComponent = new VideoComponentImpl(
  "https://www.youtube.com/watch?v=DV3ZCTFNmWs",
  "This is Video Card"
);
const todoComponent = new TodoComponentImpl("Todo Title", [
  "HTML5",
  "CSS3",
  "TypeScript",
  "OOP",
]);

newApp.makeAndDeleteComp(imageComponent);
newApp.makeAndDeleteComp(noteComponent);
newApp.makeAndDeleteComp(videoComponent);
newApp.makeAndDeleteComp(todoComponent);
newApp.dragAndDrop(imageComponent);
newApp.dragAndDrop(noteComponent);
newApp.dragAndDrop(videoComponent);
newApp.dragAndDrop(todoComponent);