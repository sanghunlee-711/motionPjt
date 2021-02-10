import { PageComponent } from "./components/page.js";
import { ImageComponentImpl } from "./components/image.js";
import { NoteComponentEl } from "./components/note.js";
import { VideoComponentImpl } from "./components/video.js";
import { TodoComponentImpl } from "./components/todo.js";
export class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
    makeAndDeleteComp(component) {
        //make
        const parent = document.querySelector(".page");
        parent.insertAdjacentElement("afterbegin", component.element);
        //delete
        const deleteBtn = component.deleteButton;
        deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener("click", function () {
            parent.removeChild(component.element);
        });
    }
    dragAndDrop(component) {
        const parent = document.querySelector(".page");
        const element = component.element;
        let pickEl;
        let overEl;
        element.addEventListener('dragstart', function (event) {
            const eventTarget = event.target;
            pickEl = eventTarget;
        });
        element.addEventListener('dragend', function (event) {
            const eventTarget = event.target;
            if (eventTarget.className === "element") {
                // eventTarget.style.border = "1px solid black";
            }
            if (overEl !== pickEl) {
                parent.insertBefore(pickEl, overEl);
                overEl.style.margin = "2vh 0";
                setTimeout(function () {
                    if (eventTarget.className === "element") {
                        pickEl.style.margin = "2vh 0";
                        overEl.style.margin = "2vh 0";
                    }
                }, 500);
            }
        });
        parent.addEventListener('dragover', function (event) {
            const eventTarget = event.target;
            if (eventTarget.className === "element") {
                // eventTarget.style.border = "1px solid white";
                overEl = eventTarget;
                overEl.style.margin = "8vh 0";
            }
            setTimeout(function () {
                if (eventTarget.className === "element") {
                    eventTarget.style.margin = "2vh 0";
                }
            }, 500);
        });
    }
}
export const newApp = new App(document.querySelector(".cardWrapper"));
const imageComponent = new ImageComponentImpl("Image Title", "https://picsum.photos/250/250");
const noteComponent = new NoteComponentEl("Note Title", "Note Contets");
const videoComponent = new VideoComponentImpl("https://www.youtube.com/watch?v=DV3ZCTFNmWs", "This is Video Card");
const todoComponent = new TodoComponentImpl("Todo Title", [
    "HTML5",
    "CSS3",
    "TypeScript",
    "OOP",
]);
newApp.makeAndDeleteComp(imageComponent);
newApp.makeAndDeleteComp(noteComponent);
newApp.makeAndDeleteComp(videoComponent);
newApp.makeAndDeleteComp(todoComponent);
newApp.dragAndDrop(imageComponent);
newApp.dragAndDrop(noteComponent);
newApp.dragAndDrop(videoComponent);
newApp.dragAndDrop(todoComponent);
//# sourceMappingURL=app.js.map