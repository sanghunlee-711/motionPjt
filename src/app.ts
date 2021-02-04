import { PageComponent } from "./components/page.js";
import {ImageComponent} from './components/image.js';
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }

}

//element | null return으로 ! as 로 강제해주자
new App(document.querySelector(".cardWrapper")! as HTMLElement)

const imageComponent = new ImageComponent("Hello", "https://picsum.photos/200/300")
imageComponent.makeComp(document.querySelector('.page')! as HTMLElement, "afterbegin" )




