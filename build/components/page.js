export class PageComponent {
    constructor() {
        this.element = document.createElement("ul");
        this.element.setAttribute("class", "page");
        this.element.textContent = "This is Page Component";
    }
    //필요한곳에다 페이지를 추가할 수 있는 함수
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
//# sourceMappingURL=page.js.map