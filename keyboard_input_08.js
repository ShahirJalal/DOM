const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5')


// form.addEventListener('submit', runEvent);

// KeyEvents
// KeyDown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent);




// Eventhandler
function runEvent(e){
    console.log(`Event type: ${e.type}`);

    e.preventDefault();
}