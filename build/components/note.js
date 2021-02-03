export class NoteComponentEl {
    constructor(title, content) {
        this.element = document.createElement("li");
        this.element.setAttribute("class", "element");
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
}
//# sourceMappingURL=note.js.map