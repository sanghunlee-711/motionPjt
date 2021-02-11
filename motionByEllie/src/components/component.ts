//Base Comp.
export interface Component{
    attatchTo(parent: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent: HTMLElement): void;
}


/*
HTML element를 만드는것을 캡슐화 한다.
*/
export class BaseComponent<T extends HTMLElement> implements Component{
   protected readonly element: T;
   constructor(htmlString: string){
        const template = document.createElement("template");
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
   }

   attatchTo(parent: HTMLElement, position: InsertPosition = "afterbegin"){
       console.log(parent);
    parent.insertAdjacentElement(position, this.element);
    }
    
    removeFrom(parent: HTMLElement) {
        if(parent !== this.element.parentElement) {
            throw new Error("Parent Mismatch!");
        }
        parent.removeChild(this.element);
    }
}