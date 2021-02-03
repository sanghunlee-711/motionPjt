import { PageComponent } from "./components/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}
//element | null return으로 ! as 로 강제해주자
new App(document.querySelector(".cardWrapper"));
//# sourceMappingURL=app.js.map