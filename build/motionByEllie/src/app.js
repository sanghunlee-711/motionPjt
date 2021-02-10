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
        // const video = new VideoComponent('Video Title', 'https://youtu.be/K3-jG52XwuQ');
        // this.page.addChild(video);
        // const note = new NoteComponent('Note Title', 'Note Body');
        // this.page.addChild(note);
        // const todo = new TodoComponent('Todo Title', 'Todo Item');
        // this.page.addChild(todo);
        const imageBtn = document.querySelector('#new-image');
        imageBtn.addEventListener("click", () => {
            //addEventListener의 경우 이벤트가 등록된 순서로 실행이 되지만 onclick을 사용하는 경우 기존 이벤트가 무시되고 덮어씌어지게 되므로
            // 여러방향에서 하나의 node el을 사용하여 이벤트를 등록한다면 addEventListener를 사용하자.
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attatchTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                //섹션을 만들어서 페이지에 추가해 준다.
                const image = new ImageComponent(inputSection.title, inputSection.url);
                console.log("imageWork?", image);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });
        const videoBtn = document.querySelector('#new-video');
        videoBtn.addEventListener("click", () => {
            //addEventListener의 경우 이벤트가 등록된 순서로 실행이 되지만 onclick을 사용하는 경우 기존 이벤트가 무시되고 덮어씌어지게 되므로
            // 여러방향에서 하나의 node el을 사용하여 이벤트를 등록한다면 addEventListener를 사용하자.
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attatchTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                //섹션을 만들어서 페이지에 추가해 준다.
                const video = new VideoComponent(inputSection.title, inputSection.url);
                console.log("videoWork?", video);
                this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            });
        });
        const noteBtn = document.querySelector('#new-note');
        noteBtn.addEventListener("click", () => {
            //addEventListener의 경우 이벤트가 등록된 순서로 실행이 되지만 onclick을 사용하는 경우 기존 이벤트가 무시되고 덮어씌어지게 되므로
            // 여러방향에서 하나의 node el을 사용하여 이벤트를 등록한다면 addEventListener를 사용하자.
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attatchTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                //섹션을 만들어서 페이지에 추가해 준다.
                const note = new NoteComponent(inputSection.title, inputSection.body);
                console.log("noteWork?", note);
                this.page.addChild(note);
                dialog.removeFrom(dialogRoot);
            });
        });
        const todoBtn = document.querySelector('#new-todo');
        todoBtn.addEventListener("click", () => {
            //addEventListener의 경우 이벤트가 등록된 순서로 실행이 되지만 onclick을 사용하는 경우 기존 이벤트가 무시되고 덮어씌어지게 되므로
            // 여러방향에서 하나의 node el을 사용하여 이벤트를 등록한다면 addEventListener를 사용하자.
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attatchTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                //섹션을 만들어서 페이지에 추가해 준다.
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