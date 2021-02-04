"use strict";
var Modal = /** @class */ (function () {
    function Modal() {
    }
    return Modal;
}());
window.addEventListener("click", function (e) {
    console.log(e.target.attributes.class.value);
    var data = "data/a/b/c/d/e/";
    var alpha = data.indexOf('/a');
    console.log(alpha);
    console.log(data.slice(alpha + 1, -1));
});
