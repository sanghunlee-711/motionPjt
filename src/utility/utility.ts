import {PopUpComponent} from '../components/popUp.js';

//팝업 열기
for(let i = 0; i< document.querySelectorAll('.navList').length; i++){
    document.querySelectorAll('.navList')[i].addEventListener('click',function(e){
        // console.log(document.querySelectorAll('.navList').length);
        console.log(e?.target?.innerText! as string);

        const ne2w = new PopUpComponent(e?.target?.innerText!, e?.target?.innerText!);
        ne2w.showPopUp(e?.target?.innerText!, e?.target?.innerText!)

    })
}




//팝업 닫기
document.querySelector('.quitButton')?.addEventListener('click', function(){
    const ne2w = new PopUpComponent("","");
    ne2w.quitpopUp("","");
})