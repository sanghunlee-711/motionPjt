export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "This is Page Component";
  }

  //필요한곳에다 페이지를 추가할 수 있는 함수
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}

export class PopUpComponent {
  private element: HTMLElement;
  constructor() {
    this.element = document.createElement("div");
    this.element.setAttribute("class", "popUp");
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    let input = document.createElement("input");
    input.setAttribute("class", "input1");

    parent.insertAdjacentElement(position, input);
  }
}

const click = new PopUpComponent();
window.addEventListener("click", click.attachTo());
