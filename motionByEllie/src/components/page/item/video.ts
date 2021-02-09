import { BaseComponent } from './../../component.js';
export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`<section class="video">
                    <div class="video__player">
                        <iframe class ="video__iframe"></iframe>
                    </div>
                
                    <h3 class="video_title"></h3>
                </section>
                            `);

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        iframe.src = this.convertToEmbededURL(url); // url -> videoId -> embed;

        const titleElement = this.element.querySelector('.video_title')! as HTMLHeadingElement;
        titleElement.textContent = title;
    }
    //input
    //https://www.youtube.com/watch?v=0Vl12dVsiss
    //https://youtu.be/H3i5X_7muwk

    //output
    //https://www.youtube.com/embed/0Vl12dVsiss
    //정규표현식 Regex를 사용해서 뽑아낼 거임 ㅎㅅㅎ

    private convertToEmbededURL(url:string):string {
        
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        console.log(match);

        const videoId = match? match[1] || match[2] : undefined;
        if(videoId){
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}



