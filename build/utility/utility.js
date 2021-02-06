import { ImageComponentImpl } from "../components/image.js";
import { NoteComponentEl } from "../components/note.js";
import { VideoComponentImpl } from "../components/video.js";
import { PopUpComponentImpl } from "../components/popUp.js";
import { newApp } from "../app.js";
//팝업 열기& 닫기
console.log("HelloUtil");
const navList = document.querySelectorAll(".navList");
for (let i = 0; i < navList.length; i++) {
    console.log("Hello for work");
    navList[i].addEventListener("click", function (e) {
        var _a, _b;
        const input = e.target;
        let contentsInput = input === null || input === void 0 ? void 0 : input.innerText;
        // youtube 일때, image 일때 contents input -> url
        if (contentsInput === "VIDEO" || contentsInput === "IMAGE") {
            contentsInput = "URL";
        }
        const popUpInstance = new PopUpComponentImpl(`Title`, `${contentsInput}`);
        popUpInstance.showPopUp(`${input === null || input === void 0 ? void 0 : input.innerText} TITLE`, `${contentsInput}`);
        (_a = document
            .querySelector(".quitButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            popUpInstance.quitpopUp();
        });
        (_b = document
            .querySelector(".submitButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            const titleValue = document.querySelector(".inputTitle");
            const contentsValue = document.querySelector(".contentsInput");
            const whatContents = document.querySelector(".titleSpan");
            // whatContents에 따라 불러오는  instance변경하자.
            switch (whatContents.innerText.split(" ")[0]) {
                case "IMAGE":
                    const newImage = new ImageComponentImpl(titleValue.value, contentsValue.value);
                    newApp.makeAndDeleteComp(newImage);
                    break;
                case "VIDEO":
                    const newVideo = new VideoComponentImpl(contentsValue.value, titleValue.value);
                    newApp.makeAndDeleteComp(newVideo);
                    break;
                // case "TASK":
                // console.log("incodition");
                // console.log(titleValue.value);
                // console.log(contentsValue.value);
                //   const newImage = new TodoComponent(titleValue.value, contentsValue.value);
                //   newImage.makeComp(
                //     document.querySelector(".page")! as HTMLElement,
                //     "afterbegin"
                //   );
                // break;
                case "NOTE":
                    const newNote = new NoteComponentEl(titleValue.value, contentsValue.value);
                    newApp.makeAndDeleteComp(newNote);
                    break;
                default:
                    throw new Error("what Happen??");
            }
            popUpInstance.quitpopUp();
        });
    });
}
//# sourceMappingURL=utility.js.map