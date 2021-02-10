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
    console.log(deleteBtn);
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
      console.log("dragstart element");
    })

    element.addEventListener('dragend',function(event){
      const eventTarget = event.target! as HTMLLIElement;

      if(eventTarget.className === "element"){
        console.log("dragend", eventTarget.childNodes.values);
        // eventTarget.style.border = "1px solid black";
      }

      if(overEl !== pickEl){
        pickEl.style.transition ="all 0.5s ease-in-out";
        overEl.style.transition ="all 0.5s ease-in-out";

        parent.insertBefore(pickEl, overEl);

      }
      console.log("overEl",overEl, "pickEl",pickEl);
    })
    
    parent.addEventListener('dragover',function(event){
      const eventTarget = event.target! as HTMLLIElement;

      if(eventTarget.className === "element"){
        eventTarget.style.border = "1px solid white";
        overEl = eventTarget;
        console.log("dragover", eventTarget.innerText);
      }
      setTimeout(function() {
        eventTarget.style.border = "none";
        
      }, 500);

    })

    element.addEventListener('drop',function(event){
      console.log("drop@@@")

    })
    //click되면 해당 컴포넌트가 픽되고..
    //parent에서 ..
  }
}

export const newApp = new App(
  document.querySelector(".cardWrapper")! as HTMLElement
);

const imageComponent = new ImageComponentImpl(
  "Hello",
  "https://picsum.photos/250/250"
);

const noteComponent = new NoteComponentEl("Note Title", "Note Contets");
const videoComponent = new VideoComponentImpl(
  "https://www.youtube.com/watch?v=KvIfjyyl_E4",
  "Youtube!"
);
const todoComponent = new TodoComponentImpl("Todo Title!", [
  "할1",
  "할2",
  "집가고싶다",
  "TS짱짱맨",
]);

newApp.makeAndDeleteComp(imageComponent);
newApp.makeAndDeleteComp(noteComponent);
newApp.makeAndDeleteComp(videoComponent);
newApp.makeAndDeleteComp(todoComponent);
newApp.dragAndDrop(imageComponent);
newApp.dragAndDrop(noteComponent);
newApp.dragAndDrop(videoComponent);
newApp.dragAndDrop(todoComponent);