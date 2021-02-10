export class PopUpComponentImpl {
    constructor(titleForInput, contentsForInput) {
        this.newButton = document.createElement("button");
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
        this.popupWrapper = document.createElement("div");
        this.popupWrapper.setAttribute("class", "popUpWrapper");
        // if (titleForInput === "TASK TITLE") {
        //   this.addTodo.setAttribute("type", "submit");
        //   this.addTodo.textContent = "Add";
        //   this.addTodo.setAttribute("class", "addTodoButton");
        // }
        this.contentWrapper = document.createElement("div");
        this.contentWrapper.setAttribute('class', 'contentWrapper');
        this.inputContents = document.createElement("input");
        this.inputContents.setAttribute("class", "contentsInput");
        this.inputContents.setAttribute("type", "text");
        this.todoWrapper = document.createElement("div");
        this.todoWrapper.setAttribute("class", "todoWrapper");
        this.contentsTitle = document.createElement("span");
        this.contentsTitle.setAttribute("class", "titleSpan");
        this.contentsTitle.textContent = contentsForInput;
        this.todoWrapper.appendChild(this.contentsTitle);
        this.todoWrapper.appendChild(this.inputContents);
        this.submitButton = document.createElement("button");
        this.submitButton.setAttribute("class", "submitButton");
        this.submitButton.setAttribute("type", "submit");
        this.submitButton.textContent = "submit";
        this.quitButton = document.createElement("button");
        this.quitButton.textContent = "X";
        this.quitButton.setAttribute("class", "quitButton");
        this.newButton = document.createElement("button");
        this.popupWrapper.appendChild(this.titleWrapper);
        if (titleForInput === "TODO TITLE") {
            console.log("Task?");
            this.newButton.setAttribute("type", "submit");
            this.newButton.textContent = "Add";
            this.newButton.setAttribute("class", "addTodoButton");
            this.popupWrapper.appendChild(this.newButton);
            this.newButton.addEventListener("click", function () {
                var _a;
                console.log("Add Btn");
                const newInput = document.createElement("input");
                newInput.setAttribute("type", "text");
                newInput.setAttribute("class", "contentsInput");
                (_a = document.querySelector(".todoWrapper")) === null || _a === void 0 ? void 0 : _a.appendChild(newInput);
            });
        }
        this.element.appendChild(this.popupWrapper);
        this.popupWrapper.appendChild(this.todoWrapper);
        this.popupWrapper.appendChild(this.quitButton);
        this.popupWrapper.appendChild(this.submitButton);
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
        console.log("show Pop UP!");
        const newPopUp = new PopUpComponentImpl(title, contents);
        (_a = document
            .querySelector(".page")) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement("afterbegin", newPopUp.element);
    }
    makeTodo() {
        let parent = document.querySelector("todoWrapper");
        let newOne = document.createElement('input');
        console.log(parent === null || parent === void 0 ? void 0 : parent.childNodes.length);
        newOne.setAttribute('type', 'text');
        newOne.setAttribute('class', 'newTodo');
        parent === null || parent === void 0 ? void 0 : parent.insertAdjacentElement("afterbegin", newOne);
    }
    // only for Todo List
    addButton(title) {
        if (title === "TODO") {
        }
        else {
            return;
        }
    }
}
//# sourceMappingURL=popUp.js.map