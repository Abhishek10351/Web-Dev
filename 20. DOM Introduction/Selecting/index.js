
// use the available document selectors to get js objects of the dom/html tree
// use console.log to print them out

// getelementbyid method
let a = document.getElementById("main-heading");
console.log(a);

a.style.color = "red";

// getelementsbyclassname method
let b = document.getElementsByClassName("text");
console.log(b);

// getelementsbytagname method
let c = document.getElementsByTagName("span");
console.log(c);

// queryselector method
// this method returns the first element that matches a specified CSS selector(s) in the document. 
let d = document.querySelector("img");

// queryselectorall method
// this method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

let e = document.querySelectorAll(".text span");