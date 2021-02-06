import { App } from "../app.js";

export interface PopUpComponent {
  element: HTMLElement;
  name: string;
  titleWrapper: HTMLDivElement;
  titleSpan: HTMLSpanElement;
  contentWrapper: HTMLDivElement;
  inputTitle: HTMLInputElement;
  inputContents: HTMLInputElement;
  quitButton: HTMLButtonElement;
  submitButton: HTMLButtonElement;
  deleteButton?: HTMLButtonElement;

  quitpopUp(): void;
  showPopUp(title: string, contents: string): void;
}

export class PopUpComponentImpl implements PopUpComponent {
  element: HTMLElement;
  name: string;
  titleWrapper: HTMLDivElement;
  titleSpan: HTMLSpanElement;
  contentWrapper: HTMLDivElement;
  inputTitle: HTMLInputElement;
  inputContents: HTMLInputElement;
  quitButton: HTMLButtonElement;
  submitButton: HTMLButtonElement;
  constructor(titleForInput: string, contentsForInput: string) {
    this.name = titleForInput;
    this.element = document.createElement("section");
    this.element.setAttribute("class", "popUpContainer");
    this.titleWrapper = document.createElement("div");
    this.inputTitle = document.createElement("input");
    this.inputTitle.setAttribute("class", "inputTitle");
    this.titleSpan = document.createElement("span");
    this.titleSpan.setAttribute("class", "titleSpan");
    this.titleSpan.textContent = titleForInput;
    this.titleWrapper.appendChild(this.titleSpan);
    this.titleWrapper.appendChild(this.inputTitle);

    this.contentWrapper = document.createElement("div");
    this.inputContents = document.createElement("input");
    this.inputContents.setAttribute("class", "contentsInput");
    this.contentWrapper.textContent = contentsForInput;
    this.contentWrapper.appendChild(this.inputContents);

    this.submitButton = document.createElement("button");
    this.submitButton.setAttribute("class", "submitButton");
    this.submitButton.setAttribute("type", "submit");
    this.submitButton.textContent = "submit";

    this.quitButton = document.createElement("button");
    this.quitButton.textContent = "X";
    this.quitButton.setAttribute("class", "quitButton");

    this.element.appendChild(this.titleWrapper);
    this.element.appendChild(this.contentWrapper);
    this.element.appendChild(this.submitButton);
    this.element.appendChild(this.quitButton);
  }

  quitpopUp(): void {
    const parent = document.querySelector(".page");
    const child = document.querySelector(".popUpContainer");
    console.log(child);
    parent?.removeChild(child! as Node);
    // document.querySelector('.popUpContainer')?.setAttribute('style','display:none')
  }
  showPopUp(title: string, contents: string): void {
    console.log("wrok?");
    const newPopUp = new PopUpComponentImpl(title, contents);
    // const newApp = new App(
    //   document.querySelector(".cardWrapper")! as HTMLElement
    // );

    // newApp.makeComponent(newPopUp);
    document
      .querySelector(".page")
      ?.insertAdjacentElement("afterbegin", newPopUp.element);
  }
}
