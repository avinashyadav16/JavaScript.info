// Feature Request Scripts:

// Click Event Script
// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
document.getElementById('clickButton').addEventListener('click', function () {
    document.getElementById('paragraph').textContent = 'Text changed!';
});





// Mouse Events Script
// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
const element = document.getElementById('hoverElement');
element.addEventListener('mouseover', function () {
    element.style.backgroundColor = 'lightgreen';
});
element.addEventListener('mouseout', function () {
    element.style.backgroundColor = 'lightblue';
});






// Keyboard Events Script
// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
const inputField = document.getElementById('inputField');
inputField.addEventListener('keydown', function (event) {
    console.log(`Key pressed: ${event.key}`);
});
inputField.addEventListener('keyup', function () {
    document.getElementById('displayText').textContent = inputField.value;
});






// Form Events Script
// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});






// Event Delegation Script
// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.
document.getElementById('parent').addEventListener('click', function (event) {
    if (event.target.classList.contains('child')) {
        alert(`Child clicked: ${event.target.textContent}`);
    }
});

document.getElementById('addButton').addEventListener('click', function () {
    const newChild = document.createElement('div');
    newChild.textContent = 'New Child';
    newChild.classList.add('child');
    document.getElementById('parent').appendChild(newChild);
});
