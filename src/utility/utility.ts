import { ImageComponentImpl } from "../components/image.js";
import { NoteComponentEl } from "../components/note.js";
import { VideoComponentImpl } from "../components/video.js";
import { TodoComponentImpl } from "../components/todo.js";
import { PopUpComponentImpl } from "../components/popUp.js";
import { newApp } from "../app.js";

//팝업 열기& 닫기
console.log("HelloUtil");
const navList: NodeListOf<Element> = document.querySelectorAll(".navList");

for (let i = 0; i < navList.length; i++) {
  console.log("Hello for work");
  navList[i].addEventListener("click", function (e) {
    const input = e.target as HTMLElement;
    let contentsInput: string = input?.innerText;

    // youtube 일때, image 일때 contents input -> url
    if (contentsInput === "VIDEO" || contentsInput === "IMAGE") {
      contentsInput = "URL";
    }
    const popUpInstance = new PopUpComponentImpl(`Title`, `${contentsInput}`);

    popUpInstance.showPopUp(`${input?.innerText!} TITLE`, `${contentsInput}`);

    document
      .querySelector(".quitButton")
      ?.addEventListener("click", function () {
        popUpInstance.quitpopUp();
      });

    //e.target.value에러 참고
    //https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript
    document
      .querySelector(".submitButton")
      ?.addEventListener("click", function () {
        const titleValue = document.querySelector(
          ".inputTitle"
        ) as HTMLInputElement;
        const contentsValue = document.querySelector(
          ".contentsInput"
        ) as HTMLInputElement;
        const whatContents = document.querySelector(
          ".titleSpan"
        ) as HTMLInputElement;

        // whatContents에 따라 불러오는  instance변경하자.
        switch (whatContents.innerText.split(" ")[0]) {
          case "IMAGE":
            const newImage = new ImageComponentImpl(
              titleValue.value,
              contentsValue.value
            );
            newApp.makeAndDeleteComp(newImage);
            break;
          case "VIDEO":
            const newVideo = new VideoComponentImpl(
              contentsValue.value,
              titleValue.value
            );
            newApp.makeAndDeleteComp(newVideo);

            break;
          case "TASK":
            console.log("incodition");
            console.log(titleValue.value);
            console.log(contentsValue.value);
            const newTodo = new TodoComponentImpl(titleValue.value, [
              "1",
              "2",
              "3",
            ]);

            break;
          case "NOTE":
            const newNote = new NoteComponentEl(
              titleValue.value,
              contentsValue.value
            );
            newApp.makeAndDeleteComp(newNote);
            break;
          default:
            throw new Error("what Happen??");
        }

        popUpInstance.quitpopUp();
      });
  });
}
