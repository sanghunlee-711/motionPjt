export interface NoteComponent {
  element: HTMLLIElement;
  wrapper: HTMLDivElement;
  titleEl: HTMLSpanElement;
  contentEl: HTMLSpanElement;
  deleteButton: HTMLButtonElement;
}

export class NoteComponentEl implements NoteComponent {
  element: HTMLLIElement;
  wrapper: HTMLDivElement;
  titleEl: HTMLSpanElement;
  contentEl: HTMLSpanElement;
  deleteButton: HTMLButtonElement;

  constructor(title: string, content: string) {
    this.element = document.createElement("li");
    this.element.setAttribute("class", "element");
    this.element.setAttribute("draggable", "true");

    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", "noteTitleWrapper");
    this.titleEl = document.createElement("span");
    this.titleEl.textContent = title;
    this.titleEl.setAttribute("class", "noteTitle");

    this.deleteButton = document.createElement("button");
    this.deleteButton.textContent = "X";
    this.deleteButton.setAttribute("class", "deleteButton");

    this.contentEl = document.createElement("span");
    this.contentEl.textContent = `Ò ${content}`;
    this.contentEl.setAttribute("class", "noteContent");

    this.wrapper.appendChild(this.titleEl);
    this.wrapper.appendChild(this.contentEl);

    this.element.appendChild(this.wrapper);
    this.element.appendChild(this.deleteButton);
  }

  // makeComp(parent: HTMLElement, position: InsertPosition = "afterbegin"){
  //     parent.insertAdjacentElement(position, this.element);
  // }
}
