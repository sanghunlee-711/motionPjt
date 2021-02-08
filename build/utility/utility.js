import { ImageComponent } from "../components/image.js";
import { NoteComponent } from "../components/note.js";
import { VideoComponent } from "../components/video.js";
import { TodoComponent } from "../components/todo.js";
import { PopUpComponent } from "../components/popUp.js";
for (let i = 0; i < document.querySelectorAll(".navList").length; i++) {
    document
        .querySelectorAll(".navList")[i].addEventListener("click", function (e) {
        var _a, _b;
        const input = e.target;
        let titleInput = input === null || input === void 0 ? void 0 : input.innerText;
        let contentsInput = input === null || input === void 0 ? void 0 : input.innerText;
        //팝업 열기
        if (contentsInput === "VIDEO" || contentsInput === "IMAGE") {
            contentsInput = "URL";
        }
        const popUpInstance = new PopUpComponent(`${input === null || input === void 0 ? void 0 : input.innerText} TITLE`, `${contentsInput}`);
        popUpInstance.showPopUp(`${input === null || input === void 0 ? void 0 : input.innerText} TITLE`, `${contentsInput}`);
        //팝업 닫기
        (_a = document
            .querySelector(".quitButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            popUpInstance.quitpopUp();
        });
        //팝업 제출
        (_b = document.querySelector(".submitButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            const titleValue = document.querySelector(".inputTitle");
            const contentsValue = document.querySelector(".contentsInput");
            const whatContents = document.querySelector(".titleSpan");
            console.log(whatContents.innerText.split(" ")[0]);
            // whatContents에 따라 불러오는  instance변경하자.
            switch (whatContents.innerText.split(" ")[0]) {
                case "IMAGE":
                    console.log("incodition");
                    console.log(titleValue.value);
                    console.log(contentsValue.value);
                    const newImage = new ImageComponent(titleValue.value, contentsValue.value);
                    newImage.makeComp(document.querySelector(".page"), "afterbegin");
                    break;
                case "VIDEO":
                    console.log("incodition");
                    console.log(titleValue.value);
                    console.log(contentsValue.value);
                    const newVideo = new VideoComponent(contentsValue.value, titleValue.value);
                    newVideo.makeComp(document.querySelector(".page"), "afterbegin");
                    break;
<<<<<<< HEAD
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
=======
                case "TASK":
                    console.log("incodition");
                    console.log(titleValue.value);
                    console.log(contentsValue.value);
                    const newTask = new TodoComponent(titleValue.value, contentsValue.value);
                    newTask.makeComp(document.querySelector(".page"), "afterbegin");
                    break;
>>>>>>> 90ff67f... Add: uitlity function
                case "NOTE":
                    console.log("incodition");
                    console.log(titleValue.value);
                    console.log(contentsValue.value);
                    const newNote = new NoteComponent(titleValue.value, contentsValue.value);
                    newNote.makeComp(document.querySelector(".page"), "afterbegin");
                    break;
                default:
                    throw new Error("what Happen??");
            }
            popUpInstance.quitpopUp();
            console.log("Hello");
        });
    });
}
const deleteButtons = document.querySelectorAll(".deleteButton");
const targetWrapper = document.querySelector(".page");
const targetWrapperChild = targetWrapper === null || targetWrapper === void 0 ? void 0 : targetWrapper.childNodes;
const len = targetWrapperChild === null || targetWrapperChild === void 0 ? void 0 : targetWrapperChild.length;
const deleteTarget = document.querySelectorAll(".element");
window.onload = function () {
    for (let i = 0; i < len; i++) {
        //   window.onload = function () {
        //     console.log(targetWrapper?.childNodes.length);
        //   };
        deleteButtons[i].addEventListener("click", (event) => {
            const eTarget = event.target;
            console.log(targetWrapper);
            console.log(deleteTarget);
            //gonna delete deleteTarget[i]
            targetWrapper === null || targetWrapper === void 0 ? void 0 : targetWrapper.removeChild(deleteTarget[i]);
        });
    }
};
//deleteButton index랑 게시물 인덱스 같은거 지워버리자!
//# sourceMappingURL=utility.js.map