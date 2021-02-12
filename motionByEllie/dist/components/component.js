export class BaseComponent {
    constructor(htmlString) {
        const template = document.createElement("template");
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild;
    }
    attatchTo(parent, position = "afterbegin") {
        console.log(parent);
        parent.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent) {
        if (parent !== this.element.parentElement) {
            throw new Error("Parent Mismatch!");
        }
        parent.removeChild(this.element);
    }
    attach(component, position) {
        component.attatchTo(this.element, position);
    }
    registerEventListener(type, listener) {
        this.element.addEventListener(type, listener);
    }
}
//# sourceMappingURL=component.js.map