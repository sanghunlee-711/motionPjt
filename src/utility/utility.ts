import { PopUpComponent } from "../components/popUp.js";

//팝업 열기& 닫기
for (let i = 0; i < document.querySelectorAll(".navList").length; i++) {
  document
    .querySelectorAll(".navList")
    [i].addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      let titleInput = input?.innerText;
      let contentsInput = input?.innerText;

      //switch 문으로 youtube 일때, image 일때 contents input url로 바꾸자

      const ne2w = new PopUpComponent(
        `${input?.innerText!} Title`,
        `${input?.innerText!} Contents`
      );
      ne2w.showPopUp(
        `${input?.innerText!} Title`,
        `${input?.innerText!} Contents`
      );

      document
        .querySelector(".quitButton")
        ?.addEventListener("click", function () {
          ne2w.quitpopUp();
        });
    });
}

document.querySelector("submitButton")?.addEventListener("click", function () {
  const titleValue = document.querySelector(".inputTitle") as HTMLElement;
  const contentsValue = document.querySelector(".contentsInput") as HTMLElement;
  const whatContents = document.querySelector("titleSpan") as HTMLElement;

  // whatContents에 따라 불러오는  instance변경하자.
  event?.preventDefault();
  const inputEl: HTMLElement = document.createElement("section"); // 임시
  const parent = document.querySelector(".page");
  parent?.insertAdjacentElement("afterbegin", inputEl);
  console.log("Hello");
});
