export class VideoComponentImpl {
    constructor(url, content) {
        this.element = document.createElement("li");
        this.element.setAttribute("class", "element");
        this.spanEl = document.createElement("span");
        this.divWrapper = document.createElement("div");
        this.divWrapper.setAttribute("class", "videoWrapper");
        this.spanEl.textContent = content;
        // https://www.youtube.com/watch?v=1InSKaTIHs8
        // https://www.youtube.com/embed/1InSKaTIHs8
        this.itag = `<iframe width="500" height="250" src="${this.changeUrl(url)}" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>`;
        this.deleteButton = document.createElement("button");
        this.deleteButton.textContent = "X";
        this.deleteButton.setAttribute("class", "deleteButton");
        // this.deleteButton.addEventListener("click", this.remove);
        this.divWrapper.appendChild(this.element);
        this.divWrapper.innerHTML = this.itag;
        this.divWrapper.appendChild(this.spanEl);
        this.element.appendChild(this.divWrapper);
        this.element.appendChild(this.deleteButton);
    }
    // makeComp(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    //   parent.insertAdjacentElement(position, this.element);
    // }
    changeUrl(url) {
        let changed = "";
        if (url.includes("watch")) {
            changed =
                url.slice(0, url.indexOf("/watch")) +
                    "/embed/" +
                    url.slice(url.indexOf("=") + 1, url.length);
            console.log(changed);
        }
        else {
            changed = url;
        }
        return changed;
    }
    remove() {
        console.log("workd?");
        const parent = document.querySelector(".page");
        // this.element?.remove();
    }
}
//# sourceMappingURL=video.js.map