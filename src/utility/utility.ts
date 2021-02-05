import { PageComponent } from "../components/page.js";
import { ImageComponent } from "../components/image.js";
import { NoteComponent } from "../components/note.js";
import { VideoComponent } from "../components/video.js";
import { TodoComponent } from "../components/todo.js";
import { PopUpComponent } from "../components/popUp.js";
//팝업 열기& 닫기
for (let i = 0; i < document.querySelectorAll(".navList").length; i++) {
  document
    .querySelectorAll(".navList")
    [i].addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      let titleInput: string = input?.innerText;
      let contentsInput: string = input?.innerText;

      //switch 문으로 youtube 일때, image 일때 contents input url로 바꾸자
      if (contentsInput === "VIDEO" || contentsInput === "IMAGE") {
        contentsInput = "URL";
      }
      const popUpInstance = new PopUpComponent(`Title`, `${contentsInput}`);
      popUpInstance.showPopUp(`${input?.innerText!} TITLE`, `${contentsInput}`);

      document
        .querySelector(".quitButton")
        ?.addEventListener("click", function () {
          popUpInstance.quitpopUp();
        });

      document
        .querySelector(".submitButton")
        ?.addEventListener("click", function () {
          const titleValue = document.querySelector(
            ".inputTitle"
          ) as HTMLElement;
          const contentsValue = document.querySelector(
            ".contentsInput"
          ) as HTMLElement;
          const whatContents = document.querySelector(
            ".titleSpan"
          ) as HTMLElement;
          console.log(whatContents.innerText.split(" ")[0]);
          // whatContents에 따라 불러오는  instance변경하자.
          switch (whatContents.innerText.split(" ")[0]) {
            case "IMAGE":
              console.log("incodition");
              console.log(titleValue.value);
              console.log(contentsValue.value);
              const newImage = new ImageComponent(
                titleValue.value,
                contentsValue.value
              );
              newImage.makeComp(
                document.querySelector(".page")! as HTMLElement,
                "afterbegin"
              );
              break;
            case "VIDEO":
              console.log("incodition");
              console.log(titleValue.value);
              console.log(contentsValue.value);
              const newVideo = new VideoComponent(
                contentsValue.value,
                titleValue.value
              );
              newVideo.makeComp(
                document.querySelector(".page")! as HTMLElement,
                "afterbegin"
              );

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
              console.log("incodition");
              console.log(titleValue.value);
              console.log(contentsValue.value);
              const newNote = new NoteComponent(
                titleValue.value,
                contentsValue.value
              );
              newNote.makeComp(
                document.querySelector(".page")! as HTMLElement,
                "afterbegin"
              );
              break;
            default:
              throw new Error("what Happen??");
          }

          // if(whatContents.innerText.split(" ")[0] === 'IMAGE'){
          //   console.log("incodition");
          //   console.log(titleValue.value);
          //   console.log(contentsValue.value);
          //     const newImage = new ImageComponent(titleValue.value, contentsValue.value);
          //     newImage.makeComp(
          //       document.querySelector(".page")! as HTMLElement,
          //       "afterbegin"
          //     );
          //   }
          // const parent = document.querySelector(".page");
          // parent?.insertAdjacentElement("afterbegin", inputEl);

          popUpInstance.quitpopUp();
          console.log("Hello");
        });
    });
}

const deleteButtons = document.querySelectorAll(".deleteButton");
const targetWrapper = document.querySelector(".page");
const targetWrapperChild = targetWrapper?.childNodes;
const len: number = targetWrapperChild?.length as number;
const deleteTarget = document.querySelectorAll(".element");

window.onload = function () {
  for (let i: number = 0; i < len; i++) {
    //   window.onload = function () {
    //     console.log(targetWrapper?.childNodes.length);
    //   };
    deleteButtons[i].addEventListener("click", (event) => {
      const eTarget = event.target as HTMLElement;
      console.log(targetWrapper);
      console.log(deleteTarget);
      //gonna delete deleteTarget[i]
      targetWrapper?.removeChild(deleteTarget[i]);
    });
  }
};

//deleteButton index랑 게시물 인덱스 같은거 지워버리자!
