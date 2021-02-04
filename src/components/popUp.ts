export class PopUpComponent {
    private element: HTMLElement;
    private name: string;
    private titleWrapper: HTMLDivElement;
    private contentWrapper: HTMLDivElement;
    private inputTitle: HTMLInputElement;
    private inputContents: HTMLInputElement;
    private quitButton: HTMLButtonElement;
    constructor(titleForInput:string, contentsForInput:string){
        this.name = titleForInput;
        this.element = document.createElement('section');
        this.element.setAttribute('class', "popUpContainer");
        this.titleWrapper = document.createElement('div');
        this.inputTitle = document.createElement('input');
        this.titleWrapper.textContent = titleForInput;
        this.titleWrapper.appendChild(this.inputTitle);

        this.contentWrapper = document.createElement('div');
        this.inputContents = document.createElement('input');

        this.contentWrapper.textContent = contentsForInput;
        this.contentWrapper.appendChild(this.inputContents);

        this.quitButton = document.createElement('button');
        this.quitButton.textContent ="X";
        this.quitButton.setAttribute('class', 'quitButton');


        this.element.appendChild(this.titleWrapper);
        this.element.appendChild(this.contentWrapper);
        this.element.appendChild(this.quitButton);
    }

    makeComp(parent: HTMLElement, position: InsertPosition = "afterbegin"){
        parent.insertAdjacentElement(position, this.element);
    }
    quitpopUp(title:string, contents: string){
            const parent = document.querySelector('.page');
            const child = document.querySelector('.popUpContainer');
            console.log(child)
            parent?.removeChild(child! as Node);
            // document.querySelector('.popUpContainer')?.setAttribute('style','display:none')        
    }
    showPopUp(title:string, contents:string){        
            const newPopUp = new PopUpComponent(title, contents);
            document.querySelector('.page')?.insertAdjacentElement("afterbegin" , newPopUp.element);
        }
    }

