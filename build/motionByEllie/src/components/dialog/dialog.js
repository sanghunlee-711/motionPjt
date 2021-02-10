import { BaseComponent } from '../component.js';
export class InputDialog extends BaseComponent {
    constructor() {
        super(`
        <dialog class="dialog">
            <div class = "dialog__container">
                <button class="close">&times;</button>
                <div id = "dialog__body"></div>
                <button class="dialog__submit">ADD</button>
            </div>
        </dialog>`);
        const closeBtn = this.element.querySelector('.close');
        closeBtn.onclick = () => {
            //이벤트는 내부에서 처리하는게 아니라 외부에서 주입받아 등록된 리스너가 있다면 그것을 호출해주는 방식으로 해야한다.
            this.closeListener && this.closeListener();
        };
        const submitBtn = this.element.querySelector('.dialog__submit');
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener) {
        this.submitListener = listener;
    }
    addChild(child) {
        const body = this.element.querySelector('#dialog__body');
        child.attatchTo(body);
    }
}
//# sourceMappingURL=dialog.js.map