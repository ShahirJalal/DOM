// We can construct the element from the scratch in JS

// Create element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Create text node and append it 
li.appendChild(document.createTextNode('new item'));

// Create link
const link = document.createElement('a');

// Add class
link.className = 'delete-item secondary-content';

// Add HTML icon
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append the link into the li
li.appendChild(link);

// Append the li as the child of ul
document.querySelector('ul').appendChild(li);