// Replace

// Create new element
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'new-head';

// New text node
newHeading.appendChild(document.createTextNode('task list'));

// Get old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace method
cardAction.replaceChild(newHeading, oldHeading);

// Remove elements
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove the list item
lis[0].remove();

// Remove child element
list.removeChild(lis[2]);