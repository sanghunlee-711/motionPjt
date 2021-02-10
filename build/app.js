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
        console.log(deleteBtn);
        deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener("click", function () {
            parent.removeChild(component.element);
        });
    }
    dragAndDrop(component) {
        const parent = document.querySelector(".page");
        const element = component.element;
        element.addEventListener('dragstart', function () {
            console.log("dragstart element");
        });
        element.addEventListener('dragend', function (event) {
            console.log("dragend");
            const eventTarget = event.target;
            const parentNode = eventTarget.parentNode;
            if (eventTarget.className == "element") {
                eventTarget.style.background = "red";
                // parent.removeChild( element );
                // parent.insertAdjacentElement("beforebegin", element );
            }
        });
        // element.addEventListener('dragover',function(event){
        //   console.log("dragover",element);
        // },false)
        element.addEventListener('drop', function (event) {
            console.log("drop", element);
        });
        element.addEventListener("dragleave", function () {
            console.log("dragleave");
        });
        //click되면 해당 컴포넌트가 픽되고..
        //parent에서 ..
    }
}
export const newApp = new App(document.querySelector(".cardWrapper"));
const imageComponent = new ImageComponentImpl("Hello", "https://picsum.photos/250/250");
const noteComponent = new NoteComponentEl("Note Title", "Note Contets");
const videoComponent = new VideoComponentImpl("https://www.youtube.com/watch?v=KvIfjyyl_E4", "Youtube!");
const todoComponent = new TodoComponentImpl("Todo Title!", [
    "할1",
    "할2",
    "집가고싶다",
    "TS짱짱맨",
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