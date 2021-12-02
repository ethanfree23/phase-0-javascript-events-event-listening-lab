

function addingEventListener() { // first, we create the function addingEventListener
    const input = document.getElementById('input'); //getting element by ID, which is input (says it in the indextest.js)
    input.addEventListener('click',()=>{ //attaching the input id to .addeventlistener, the specifying what action we want to listen for, then create an annonymous function for the event it invokes
        alert = 'I\'ve been clicked!' //event being invoked is a string = alert = 'ive been clicked!'
    })
}

// function addingEventListener() {
//     const input = document.getElementById('input');
//     input.addEventListener('click', function() {
//         alert("I was clicked!")
//     });
// }