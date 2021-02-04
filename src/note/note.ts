class Modal{
    //e.target의 이름 받기
    //modal창의 boolean값 변경하기
}

window.addEventListener("click", function(e){
    console.log(e.target.attributes.class.value)
    let data = "data/a/b/c/d/e/"
    let alpha = data.indexOf('/a');
    console.log(alpha);
    console.log(data.slice(alpha+1, -1));

})
