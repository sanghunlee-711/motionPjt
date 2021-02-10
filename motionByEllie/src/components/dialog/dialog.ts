import { Composable } from '../page/page.js';
import { BaseComponent , Component} from '../component.js';

type OnCloseListener= () => void;
type setOnSubmitListener = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable{
    closeListener?: OnCloseListener;
    submitListener?: setOnSubmitListener;
    constructor(){
        super(`
        <dialog class="dialog">
            <div class = "dialog__container">
                <button class="close">&times;</button>
                <div id = "dialog__body"></div>
                <button class="dialog__submit">ADD</button>
            </div>
        </dialog>`);
        const closeBtn = this.element.querySelector('.close')! as HTMLElement;
        closeBtn.onclick = () => {
            //이벤트는 내부에서 처리하는게 아니라 외부에서 주입받아 등록된 리스너가 있다면 그것을 호출해주는 방식으로 해야한다.

            this.closeListener && this.closeListener();
        }
        const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        }
    }

    setOnCloseListener(listener: OnCloseListener){
        this.closeListener = listener;
    }
    setOnSubmitListener(listener: setOnSubmitListener){
        this.submitListener = listener;
    }

    addChild(child: Component){
        const body = this.element.querySelector('#dialog__body')! as HTMLElement;
        child.attatchTo(body);
    }
}