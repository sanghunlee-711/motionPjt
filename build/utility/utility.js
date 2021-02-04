var _a;
import { PopUpComponent } from "../components/popUp.js";
//팝업 열기& 닫기
for (let i = 0; i < document.querySelectorAll(".navList").length; i++) {
    document
        .querySelectorAll(".navList")[i].addEventListener("click", function (e) {
        var _a;
        const input = e.target;
        let titleInput = input === null || input === void 0 ? void 0 : input.innerText;
        let contentsInput = input === null || input === void 0 ? void 0 : input.innerText;
        //switch 문으로 youtube 일때, image 일때 contents input url로 바꾸자
        const ne2w = new PopUpComponent(`${input === null || input === void 0 ? void 0 : input.innerText} Title`, `${input === null || input === void 0 ? void 0 : input.innerText} Contents`);
        ne2w.showPopUp(`${input === null || input === void 0 ? void 0 : input.innerText} Title`, `${input === null || input === void 0 ? void 0 : input.innerText} Contents`);
        (_a = document
            .querySelector(".quitButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            ne2w.quitpopUp();
        });
    });
}
(_a = document.querySelector("submitButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const titleValue = document.querySelector(".inputTitle");
    const contentsValue = document.querySelector(".contentsInput");
    const whatContents = document.querySelector("titleSpan");
    // whatContents에 따라 불러오는  instance변경하자.
    event === null || event === void 0 ? void 0 : event.preventDefault();
    const inputEl = document.createElement("section"); // 임시
    const parent = document.querySelector(".page");
    parent === null || parent === void 0 ? void 0 : parent.insertAdjacentElement("afterbegin", inputEl);
    console.log("Hello");
});
//# sourceMappingURL=utility.js.map