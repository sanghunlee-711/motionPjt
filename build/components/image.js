export class ImageComponent {
    constructor(text, imageURL) {
        this.element = document.createElement("li");
        this.element.setAttribute("class", "imageComp");
        this.textSpan = document.createElement("span");
        this.textSpan.textContent = text;
        this.deleteButton = document.createElement("button");
        this.deleteButton.textContent = "X";
        this.deleteButton.setAttribute('class', 'deleteButton');
        this.imageElement = document.createElement('img');
        this.imageElement.setAttribute('src', imageURL);
        this.imageAndTextWrapper = document.createElement("div");
        this.imageAndTextWrapper.setAttribute('class', "imageAndTextWrapper");
        this.element.appendChild(this.imageAndTextWrapper);
        this.imageAndTextWrapper.appendChild(this.imageElement);
        this.imageAndTextWrapper.appendChild(this.textSpan);
        this.element.appendChild(this.deleteButton);
    }
    makeComp(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
//이미지 링크 일단 복사해오자
//# sourceMappingURL=image.js.map