import { PageComponent } from "../components/page.js";
import { ImageComponent } from "../components/image.js";
import { NoteComponent } from "../components/note.js";
import { VideoComponent } from "../components/video.js";
import { TodoComponent } from "../components/todo.js";
import { PopUpComponent } from "../components/popUp.js";


for (let i = 0; i < document.querySelectorAll(".navList").length; i++) {
  document
    .querySelectorAll(".navList")
    [i].addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      let titleInput: string = input?.innerText;
      let contentsInput: string = input?.innerText;

      //팝업 열기
      if(contentsInput === "VIDEO" || contentsInput === "IMAGE"){
        contentsInput = "URL";
      }
      const popUpInstance = new PopUpComponent(
        `${input?.innerText!} TITLE`,
        `${contentsInput}`
      );
      popUpInstance.showPopUp(
        `${input?.innerText!} TITLE`,
        `${contentsInput}`
      );

      //팝업 닫기
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

        //팝업 제출
      document.querySelector(".submitButton")?.addEventListener("click", function () {
        const titleValue = document.querySelector(".inputTitle") as HTMLElement;
        const contentsValue = document.querySelector(".contentsInput") as HTMLElement;
        const whatContents = document.querySelector(".titleSpan") as HTMLElement;
        console.log(whatContents.innerText.split(" ")[0]);
        // whatContents에 따라 불러오는  instance변경하자.
        switch(whatContents.innerText.split(" ")[0]){
          case "IMAGE":
          console.log("incodition");
          console.log(titleValue.value);
          console.log(contentsValue.value);
            const newImage = new ImageComponent(titleValue.value, contentsValue.value);
            newImage.makeComp(
              document.querySelector(".page")! as HTMLElement,
              "afterbegin"
            );
          break;
          case "VIDEO": 
          console.log("incodition");
          console.log(titleValue.value);
          console.log(contentsValue.value);
            const newVideo = new VideoComponent(contentsValue.value, titleValue.value);
            newVideo.makeComp(
              document.querySelector(".page")! as HTMLElement,
              "afterbegin"
            );
          break;
          case "TASK": 
          console.log("incodition");
          console.log(titleValue.value);
          console.log(contentsValue.value);
            const newTask = new TodoComponent(titleValue.value, contentsValue.value);
            newTask.makeComp(
              document.querySelector(".page")! as HTMLElement,
              "afterbegin"
            );
          break;
          case "NOTE": 
          console.log("incodition");
          console.log(titleValue.value);
          console.log(contentsValue.value);
            const newNote = new NoteComponent(titleValue.value, contentsValue.value);
            newNote.makeComp(
              document.querySelector(".page")! as HTMLElement,
              "afterbegin"
            );
          break;
          default:
            throw new Error("what Happen??")
        }

        popUpInstance.quitpopUp();
        console.log("Hello");
      });

    });
}
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
