export class TodoComponentImpl {
    constructor(title, toDos) {
        this.element = document.createElement("li");
        this.element.setAttribute("class", "element");
        this.element.setAttribute("draggable", "true");
        this.todoContainer = document.createElement("div");
        this.todoContainer.setAttribute("class", "todoContainer");
        this.todoWrapper = document.createElement("ul");
        this.todoWrapper.setAttribute("class", "todoWrapper");
        this.todoList = toDos;
        this.todoList.forEach((el) => {
            //make todo List
            const alpha = document.createElement("li");
            const checkbox = document.createElement("input");
            const span = document.createElement("span");
            checkbox.setAttribute("type", "checkbox");
            const wrapper = document.createElement("div");
            alpha.setAttribute("class", "todoList");
            span.innerText = el;
            span.setAttribute("class", "todoItem");
            alpha.appendChild(wrapper);
            wrapper.appendChild(checkbox);
            wrapper.appendChild(span);
            this.todoWrapper.appendChild(wrapper);
        });
        this.titleSpan = document.createElement("span");
        this.titleSpan.setAttribute("class", "toDoTitle");
        this.titleSpan.textContent = title;
        this.deleteButton = document.createElement("button");
        this.deleteButton.textContent = "X";
        this.deleteButton.setAttribute("class", "deleteButton");
        this.todoContainer.appendChild(this.titleSpan);
        this.todoContainer.appendChild(this.todoWrapper);
        this.element.appendChild(this.todoContainer);
        this.element.appendChild(this.deleteButton);
        // this.todoWrapper.appendChild("Li친구들..")
        //input창에 추가 누를 때마다 추가시킬건데 ..
        // 그때마다 들어오는 input 값을 배열에 넣고
        // 다시 그걸 받아서 map돌려서 내부에 작은 ul li로 만들어 내면 되겠군 ㅋ
    }
}
//# sourceMappingURL=todo.js.map