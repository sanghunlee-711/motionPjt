var _a;
import { PopUpComponent } from '../components/popUp.js';
//팝업 열기
for (let i = 0; i < document.querySelectorAll('.navList').length; i++) {
    document.querySelectorAll('.navList')[i].addEventListener('click', function (e) {
        var _a, _b, _c, _d, _e;
        // console.log(document.querySelectorAll('.navList').length);
        console.log((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.innerText);
        const ne2w = new PopUpComponent((_b = e === null || e === void 0 ? void 0 : e.target) === null || _b === void 0 ? void 0 : _b.innerText, (_c = e === null || e === void 0 ? void 0 : e.target) === null || _c === void 0 ? void 0 : _c.innerText);
        ne2w.showPopUp((_d = e === null || e === void 0 ? void 0 : e.target) === null || _d === void 0 ? void 0 : _d.innerText, (_e = e === null || e === void 0 ? void 0 : e.target) === null || _e === void 0 ? void 0 : _e.innerText);
    });
}
//팝업 닫기
(_a = document.querySelector('.quitButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    const ne2w = new PopUpComponent("", "");
    ne2w.quitpopUp("", "");
});
//# sourceMappingURL=utility.js.map