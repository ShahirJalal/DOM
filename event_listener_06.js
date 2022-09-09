
document.querySelector('.clear-tasks').addEventListener('click',runEvent);

function runEvent(e){
    // console.log('Clicked')

    let val;
    val = e;

    //event traget element
    //val = e.target;
    //val = e.target.id;
    //val = e.target.className;
    //val = e.target.classList;

    //Event type
    // val = e.type;

    //timestamp
    // val = e.timeStamp;

    //coord events related to the window
    //val = e.clientY;
    //val = e.clientX;

    //coords related to the element
    //val = e.offsetY;
    //val = e.offsetX;

    console.log(val);
}