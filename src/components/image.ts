export interface ImageComponent {
  element: HTMLLIElement;
  imageElement: HTMLImageElement;
  imageAndTextWrapper: HTMLDivElement;
  textSpan: HTMLSpanElement;
  deleteButton: HTMLButtonElement;
}

export class ImageComponentImpl {
  element: HTMLLIElement;
  imageElement: HTMLImageElement;
  imageAndTextWrapper: HTMLDivElement;
  textSpan: HTMLSpanElement;
  deleteButton: HTMLButtonElement;

  constructor(text: string, imageURL: string) {
    this.element = document.createElement("li");
    this.element.setAttribute("class", "element");
    this.element.setAttribute("draggable", "true");


    this.textSpan = document.createElement("span");
    this.textSpan.textContent = text;

    this.deleteButton = document.createElement("button");
    this.deleteButton.textContent = "X";
    this.deleteButton.setAttribute("class", "deleteButton");

    this.imageElement = document.createElement("img");
    this.imageElement.setAttribute("src", imageURL);

    this.imageAndTextWrapper = document.createElement("div");
    this.imageAndTextWrapper.setAttribute("class", "imageAndTextWrapper");

    this.element.appendChild(this.imageAndTextWrapper);
    this.imageAndTextWrapper.appendChild(this.imageElement);
    this.imageAndTextWrapper.appendChild(this.textSpan);

    this.element.appendChild(this.deleteButton);
  }

  //   makeComp(parent: HTMLElement, position: InsertPosition = "afterbegin") {
  //     parent.insertAdjacentElement(position, this.element);
  //   }
}

//이미지 링크 일단 복사해오자
