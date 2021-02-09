import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { InputDialog } from './components/dialog/dialog.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attatchTo(appRoot);
        const imageBtn = document.querySelector('#new-image');
        imageBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attatchTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(inputSection.title, inputSection.url);
                console.log("imageWork?", image);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });
        const videoBtn = document.querySelector('#new-video');
        videoBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attatchTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const video = new VideoComponent(inputSection.title, inputSection.url);
                console.log("videoWork?", video);
                this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            });
        });
        const noteBtn = document.querySelector('#new-note');
        noteBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attatchTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const note = new NoteComponent(inputSection.title, inputSection.body);
                console.log("noteWork?", note);
                this.page.addChild(note);
                dialog.removeFrom(dialogRoot);
            });
        });
        const todoBtn = document.querySelector('#new-todo');
        todoBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attatchTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const todo = new TodoComponent(inputSection.title, inputSection.body);
                console.log("todoWork?", todo);
                this.page.addChild(todo);
                dialog.removeFrom(dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.document'), document.body);
//# sourceMappingURL=app.js.map