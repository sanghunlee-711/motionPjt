import { BaseComponent } from './../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="video">
                    <div class="video__player">
                        <iframe class ="video__iframe"></iframe>
                    </div>
                
                    <h3 class="video_title"></h3>
                </section>
                            `);
        const iframe = this.element.querySelector('.video__iframe');
        iframe.src = this.convertToEmbededURL(url);
        const titleElement = this.element.querySelector('.video_title');
        titleElement.textContent = title;
    }
    convertToEmbededURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        console.log(match);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}
//# sourceMappingURL=video.js.map