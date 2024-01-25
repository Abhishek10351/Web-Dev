
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
input.addEventListener('input', function (e) {

    h1.innerText = input.value;
});


//  * input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
// * change event fires when the value of an <input>, <select>, or <textarea> element has been changed AND the element loses focus.