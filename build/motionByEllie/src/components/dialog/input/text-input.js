import { BaseComponent } from './../../component';
export class TextSectionInput extends BaseComponent {
    constructor() {
        super(`<div>
                    <div class = "form__container">
                        <label for="title">Title</label>
                        <input type="text" id = "title">
                    </div>
                    <div class = "form__container">
                        <label for="url">Body</label>
                        <textarea type = "text" row="3" id ="body"></textarea>
                    </div>  
                </div>`);
    }
    get title() {
        const element = this.element.querySelector("#title");
        return element.value;
    }
    get body() {
        const element = this.element.querySelector("#body");
        return element.value;
    }
}
//# sourceMappingURL=text-input.js.map