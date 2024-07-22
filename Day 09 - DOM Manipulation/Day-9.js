/**
 *  @file: Day-9.js
 *  @author: Avinash Yadav
 *  @brief: Day 9: DOM Manipulation
 *  @date: 21-07-2024
*/

// Tasks/Activities:

// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById('elementId').textContent = 'New text content';



// Task 2: Select an HTML element by its class and change its background color.
document.querySelector('.elementClass').style.backgroundColor = 'blue';






// Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';
document.body.appendChild(newDiv);







// Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement('li');
newLi.textContent = 'This is a new list item';
document.querySelector('ul').appendChild(newLi);







// Task 5: Select an HTML element and remove it from the DOM.
const elementToRemove = document.getElementById('elementToRemoveId');
elementToRemove.parentNode.removeChild(elementToRemove);







// Task 6: Remove the last child of a specific HTML element.
const parentElement = document.getElementById('parentElementId');
parentElement.removeChild(parentElement.lastElementChild);







// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.getElementById('imageId').src = 'Day-9.png';







// Task 8: Add and remove a CSS class to/from an HTML element.
const element = document.getElementById('elementId');
element.classList.add('newClass');
element.classList.remove('oldClass');







// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('buttonId').addEventListener('click', function () {
    document.getElementById('paragraphId').textContent = 'Text changed on button click';
});







// Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById('hoverElementId').addEventListener('mouseover', function () {
    this.style.borderColor = 'red';
});


