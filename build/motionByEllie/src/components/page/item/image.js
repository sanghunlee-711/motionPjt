import { BaseComponent } from './../../component.js';
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="image">
                    <div class="image__holder">
                        <img class = "image__thumbnail">
                        <h2 class="image__title"></h2>
                    </div>
                </section>`);
        const imagElement = this.element.querySelector(".image__thumbnail");
        imagElement.src = url;
        imagElement.alt = title;
        //필요한 부분만 업데이트 해주자!
        const titleElement = this.element.querySelector(".image__title");
        titleElement.textContent = title;
    }
}
//# sourceMappingURL=image.js.map