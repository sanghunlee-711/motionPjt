export class PopUpComponent {
    constructor(titleForInput, contentsForInput) {
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
    quitpopUp() {
        const parent = document.querySelector(".page");
        const child = document.querySelector(".popUpContainer");
        console.log(child);
        parent === null || parent === void 0 ? void 0 : parent.removeChild(child);
        // document.querySelector('.popUpContainer')?.setAttribute('style','display:none')
    }
    showPopUp(title, contents) {
        var _a;
        const newPopUp = new PopUpComponent(title, contents);
        (_a = document
            .querySelector(".page")) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement("afterbegin", newPopUp.element);
    }
}
//# sourceMappingURL=popUp.js.map