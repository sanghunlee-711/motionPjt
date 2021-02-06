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

  deleteComponent(component: ComponentType): void {
    // parent.removeChild(component.element);
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
