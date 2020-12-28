// ---------------REMEMBER ME CHECKBOX----------------

let checkbox = document.querySelector('.checkbox');
let checked = document.querySelector('.checked');


document.addEventListener('click', function(event) {
    if(event.target.classList.contains('checkbox')){
        checked.style.display = 'flex'
    }
    else if(event.target.classList.contains('check')){
        checked.style.display = 'none'
    }

}) 

// ---------------- SHOW/HIDE TOGGLE ----------------

let password = document.getElementById('password');
let toggle = document.getElementById('toggle');

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text')
        toggle.classList.add('hide')

    }
    else{
        password.setAttribute('type', 'password')
        toggle.classList.remove('hide')
    }
}


