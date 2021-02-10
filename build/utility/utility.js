import { ImageComponentImpl } from "../components/image.js";
import { NoteComponentEl } from "../components/note.js";
import { VideoComponentImpl } from "../components/video.js";
import { TodoComponentImpl } from "../components/todo.js";
import { PopUpComponentImpl } from "../components/popUp.js";
import { newApp } from "../app.js";
//팝업 열기& 닫기 & 제출
const navList = document.querySelectorAll(".navList");
for (let i = 0; i < navList.length; i++) {
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
        //e.target.value에러 참고
        //https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript
        (_b = document
            .querySelector(".submitButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            console.log("clickSubmit");
            const titleValue = document.querySelector(".inputTitle");
            const contentsValue = document.querySelector(".contentsInput");
            const whatContents = document.querySelector(".titleSpan");
            const contentsValueforTodo = document.querySelectorAll(".contentsInput");
            if (titleValue.value.length <= 1 || contentsValue.value.length <= 1) {
                alert("제대로 입력해라 ..");
            }
            // whatContents에 따라 불러오는  instance변경하자.
            switch (whatContents.innerText.split(" ")[0]) {
                case "IMAGE":
                    const newImage = new ImageComponentImpl(titleValue.value, contentsValue.value);
                    newApp.makeAndDeleteComp(newImage);
                    newApp.dragAndDrop(newImage);
                    break;
                case "VIDEO":
                    const newVideo = new VideoComponentImpl(contentsValue.value, titleValue.value);
                    newApp.makeAndDeleteComp(newVideo);
                    newApp.dragAndDrop(newVideo);
                    break;
                case "TODO":
                    console.log("TODO!");
                    let todoArr = [];
                    for (let i = 0; i < contentsValueforTodo.length; i++) {
                        console.log(contentsValueforTodo[i].value);
                        todoArr.push(contentsValueforTodo[i].value);
                    }
                    const newTodo = new TodoComponentImpl(titleValue.value, todoArr);
                    newApp.makeAndDeleteComp(newTodo);
                    newApp.dragAndDrop(newTodo);
                    break;
                case "NOTE":
                    const newNote = new NoteComponentEl(titleValue.value, contentsValue.value);
                    newApp.makeAndDeleteComp(newNote);
                    newApp.dragAndDrop(newNote);
                    break;
                default:
                    throw new Error("what Happen??");
            }
            popUpInstance.quitpopUp();
        });
    });
}
//# sourceMappingURL=utility.js.map