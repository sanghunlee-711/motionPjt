import {BaseComponent, Component} from './../component.js';

export interface Composable {
    addChild(child:Component):void;

}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable{
    setOnCloseListener(listener: OnCloseListener): void;
}


type SectionContainerConstructor = {
    //생성자의 타입을 만드는 법

    new (): SectionContainer;
        //SectionContainer에서 허용되는 어떤것이는 new를 할 수 있게 해주는 Type지정

}

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer{
    private closeListener?: OnCloseListener;

    constructor(){
        super(`<li class="page-item">
                <section class="page-item__body">
            
                </section>
                <div class="page-item__controls">
                    <button class="close">&times;</button>
                </div>
            </li>`);
        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
            //클릭이벤트 알림만 뜨게 만드는 것.
        }
    }

    addChild(child: Component): void{
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        //container
        console.log(container);
        child.attatchTo(container);
    }

    setOnCloseListener(listener: OnCloseListener):void {
        this.closeListener = listener;
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable{
    
    constructor(private pageItemConstructor: SectionContainerConstructor){
        super(`<ul class="page"></ul>`);
        //상속받으니까 부모클래스의 생성자 호출해야함.
    }
   
    addChild(section: Component){
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attatchTo(this.element, "beforeend");
        item.setOnCloseListener(()=>{
            item.removeFrom(this.element);
        })
    }
}