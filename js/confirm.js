let calendar = document.querySelectorAll('.calendar');
let chevron = document.querySelectorAll('.chevron');
let index;
for (i = 0;  i < chevron.length;  i++) {
    chevron[i].addEventListener('click', dropDown)
}




function dropDown(){
    if (!this.classList.contains('chevron-up')) {
        this.classList.add('chevron-up');
        this.parentNode.nextElementSibling.style.display = 'block';




    } else {
        this.classList.remove('chevron-up');
        this.parentNode.nextElementSibling.style.display = 'none';
    }

}

console.log(chevron)

