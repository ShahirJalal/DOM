// Event bubbling

// Event bubbling basically is bubbling up an event through DOM
// When an event happens on a particular element in the DOM, 
// it actually bubbles up through its parent

// When we click on the card-title which is the task list, 
// the event is going to bubble up through all the parent elements

// Task list element
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('.card title clicked!')
// });

// Task list parent
// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('.card content clicked!')
// });

// Card Content parent
// document.querySelector('.card').addEventListener('click', function(){
//     console.log('.card clicked!')
// });

// Card parent
// document.querySelector('.col').addEventListener('click', function(){
//     console.log('.col clicked!')
// });

// col parent
// document.querySelector('.row').addEventListener('click', function(){
//     console.log('.row clicked!')
// });

// Event delegation
// It is opposite to event bubbling
// We put the event listeners on the parent 
// element and it goes down to the child

const delItem = document.querySelector('.delete-item');

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete Item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}