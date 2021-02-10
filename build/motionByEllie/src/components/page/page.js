import { BaseComponent } from './../component.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-item">
                <section class="page-item__body">
            
                </section>
                <div class="page-item__controls">
                    <button class="close">&times;</button>
                </div>
            </li>`);
        const closeBtn = this.element.querySelector('.close');
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
            //클릭이벤트 알림만 뜨게 만드는 것.
        };
    }
    addChild(child) {
        const container = this.element.querySelector('.page-item__body');
        //container
        console.log(container);
        child.attatchTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemConstructor) {
        super(`<ul class="page"></ul>`);
        this.pageItemConstructor = pageItemConstructor;
        //상속받으니까 부모클래스의 생성자 호출해야함.
    }
    addChild(section) {
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attatchTo(this.element, "beforeend");
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
//# sourceMappingURL=page.js.map