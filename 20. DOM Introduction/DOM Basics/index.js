
// use the available document selectors to get js objects of the dom/html tree
// use console.log to print them out

// +getelementbyid method
let a = document.getElementById("main-heading");
console.log(a);


// +getelementsbyclassname method
let b = document.getElementsByClassName("blackhole-info");

// +getelementsbytagname method
let c = document.getElementsByTagName("span");
console.log(c);

// +queryselector method
// this method returns the first element that matches a specified CSS selector(s) in the document. 
let d = document.querySelector("img");

// +queryselectorall method
// this method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

let e = document.querySelectorAll(".text span");

// methods to get the text inside an element in all forms

// +innerText - returns the text contained in a node and all its descendants
// +innerHTML - returns the HTML contained in a node and all its descendants
// +textContent - returns all the text contained in a node, and in its child nodes

// innerText and textContent are similar, but there are some important differences between them:

// innerText returns "human-readable" text, while textContent returns all text, including text with markup (like <br> tags).
// textContent will return the text of <script> and <style> elements.
// innerText will not.
// innerText is faster than textContent because no parsing is required.

// alert(b[0].innerText);
// alert(b[0].innerHTML);
// alert(b[0].textContent);



// +attributes
// attributes are the properties of an element, all html elements have attributes

// we can get the attributes of an element using the getAttribute() method and set them using the setAttribute() method
// or we can use the dot notation to get and set attributes

// alert(d.getAttribute("src"));

// *while dot notation returns the complete rendered value (the value provided) the getAttribute() method returns the actual value of the attribute 

d.getAttribute("src");
d.setAttribute(
    "src",
    "https://static.wikia.nocookie.net/kungfupanda/images/6/62/Kung_Fu_Panda_3_02.png"
);


// >>



// +styling

// we can edit/change the current style of objects using the <obj>.style attribute

const h1 = document.querySelector("h1");
h1.style.color = "blueviolet";
h1.style.fontSize = "50px";
h1.style.fontFamily = "sans-serif";

// + <obj>.style is mostly blank since it contains inline css properties only, but we can use it to change the css properties

// * we can get its actual style using window.getComputedStyle(<obj>) and then use the getPropertyValue() method or the dot notation to get the value of a property

// alert(window.getComputedStyle(h1).getPropertyValue("color"));
// window.getComputedStyle(h1).textAlign = "center";

// + adding classes to objects
// the basic option
h1.setAttribute("class", "color");

// -we can also use <obj>.classlist methods to do all of that
// >

h1.classList.add("border");
h1.classList.remove("color");
h1.classList.toggle("color");

// +accesing parents and children  of nodes

// <obj>.parentElement is used to acces the parent of an object.
// One object can contain only one parent
const h2 = document.querySelector("h2");
// !console.log(h2.parentElement);
// siblings can be accessed by <obj>.nextSibling or <obj>.nextElementSibling
h2.nextElementSibling;
// 
h2.nextSibling;
// nodes and elements

// +appending and removing elements
// > adding new elements
const newH3 = document.createElement("h3");
newH3.style.color = "red";
newH3.innerText = "Well, it works.  ";
document.body.appendChild(newH3);
newH3.append("  Aha,it's still working");

// *append is similar to appendChild but it can take multiple arguments and it can also take text as an argument
// -we can also prepend elements 

const newDiv = document.createElement("div");
newDiv.innerText = "Just checking something";
document.body.prepend(newDiv);
// * .insertAdjacentElement() can be used to insert an element in a specific position relative to another element
const otherDiv = document.createElement("div");
otherDiv.style.color = "blueviolet";
otherDiv.innerText = "VOILA";
newDiv.insertAdjacentElement("beforebegin", otherDiv);
h1.after(otherDiv);

// > removing elements

// - we can remove using removeChild / remove

document.body.removeChild(newDiv); // removes the element from the dom (here we used the parent to remove the child)

otherDiv.remove(); // removes the element from the dom


