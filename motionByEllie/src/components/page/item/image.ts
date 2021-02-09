import { BaseComponent } from './../../component.js';


export class ImageComponent extends BaseComponent<HTMLElement>{
    
    constructor(title: string, url: string){
        super(`<section class="image">
                    <div class="image__holder">
                        <img class = "image__thumbnail">
                        <h2 class="image__title"></h2>
                    </div>
                </section>`);


        const imagElement = this.element.querySelector(".image__thumbnail")! as HTMLImageElement;
        imagElement.src = url;
        imagElement.alt = title;
        //필요한 부분만 업데이트 해주자!
        const titleElement = this.element.querySelector(".image__title")! as HTMLParagraphElement;
        titleElement.textContent = title;        

    }
//사용자에게 입력받은 데이터를 곧바로 설정하는 경우에는 innerHTML을 하는 경우 사용자가 html에 직접접근할 수 있게 만들기에 위험하므로 textContent를 이용하여 넣어준다.



}