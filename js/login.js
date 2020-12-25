// Remember me - checkbox
let checkbox = document.querySelector('.checkbox');
let checked = document.querySelector('.checked');



document.addEventListener('click', function(event) {
    if(event.target.classList.contains('checkbox')){
        checked.style.display = 'flex'
        console.log(checked.style.display)
    }
    else if(event.target.classList.contains('check')){
        checked.style.display = 'none'
    }
    console.log(event)


}) 




