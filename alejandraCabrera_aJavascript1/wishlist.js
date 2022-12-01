
"use strict";

/*
Functions used:
setupCart()
addItem(e)
CSS formatting is located in style3.css
Aside and additional formatting located in products.html
*/

// Add an event listener that runs the setupCart() 
window.addEventListener("load", setupCart);

// Create the setupcart() function. 
function setupCart() {

// Create a variable named addbuttons, bringing the elements from the addButton class.
var addButtons = document.getElementsByClassName("addButton");

//addItem() function when the button is clicked.
for (let i = 0; i < addButtons.length; i++) {
const e = addButtons[i];
e.addEventListener("click", function () {
addClass(e);
});
}
}

//additem() function, which adds items to the Enrollment cart.
function addClass(e) {

//Create classID variable
var classItem = e.nextElementSibling ; //I googled how to bring the class description, turns out it is by bringing the next sibling.
var classID = classItem.id ;

//created classDescription variable
//had to figure out how to create a copy of classes and bring them to the Enrollment Cart = cloneNode(true)
var classDescription = classItem.cloneNode(true);  
var cartBox = document.getElementById("cart") ;
console.log(cartBox.childElementCount);

var duplicateClass = false;

//looping to determine if classes have been placed in the Enrollment cart
for(let e of cartBox.childNodes){
console.log(e);
console.log(e.id + classID);
if(e.id == classID){
console.log("Duplicated");
//increases the value of classes, although in real life I would only let them enroll for one class removing the +1 and adds a delete button.
//I tried to reuse and add a delete button, however it shows after selecting add enrollment for the second time, same class.
e.firstChild.innerHTML = parseInt(e.firstChild.innerHTML )+ 1 + '<button onclick="Delete(this);">Delete</button>'; 
duplicateClass = true; //brings the class to Enrollment Cart only once.
break;
}
}


//Inserting the orderCount as the firstChild
//order count storing a span element 
if(!duplicateClass){
var orderCount = document.createElement("span"); //span tab used as storing element.
orderCount.innerText = 1 ; //starting number
classDescription.insertBefore(orderCount, classDescription.firstChild );
cartBox.append(classDescription );
}
}


    
