import { PageComponent } from "./components/page.js";
import { ImageComponent } from "./components/image.js";
import { NoteComponent } from "./components/note.js";
import { VideoComponent } from "./components/video.js";
import { TodoComponent } from "./components/todo.js";
import { PopUpComponent } from "./components/popUp.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }

  //   protected makeComp(parent: HTMLElement, position: InsertPosition = "afterbegin", insertComp: HTMLElement){
  //     parent.insertAdjacentElement(position, insertComp);
  // }
}

//element | null return으로 ! as 로 강제해주자
const newApp = new App(document.querySelector(".cardWrapper")! as HTMLElement);

const imageComponent = new ImageComponent(
  "Hello",
  "https://picsum.photos/250/250"
);
//app class 에서 새로운 컴포넌트를 넣는 함수를 만들고 싶은데 흠..
// newApp.makeComp(document.querySelector('.page')! as HTMLElement, 'afterbegin', imageComponent)
imageComponent.makeComp(
  document.querySelector(".page")! as HTMLElement,
  "afterbegin"
);

const noteComponent = new NoteComponent("Note Title", "Note Contets");
noteComponent.makeComp(
  document.querySelector(".page")! as HTMLElement,
  "afterbegin"
);

const videoComponent = new VideoComponent(
  "https://www.youtube.com/watch?v=KvIfjyyl_E4",
  "Youtube!"
);
window.onload = function () {
  videoComponent.makeComp(
    document.querySelector(".page")! as HTMLElement,
    "afterbegin"
  );
};

const todoComponent = new TodoComponent("Todo Title!", [
  "할1",
  "할2",
  "집가고싶다",
  "TS짱짱맨",
]);
todoComponent.makeComp(
  document.querySelector(".page")! as HTMLElement,
  "afterbegin"
);
