const cards = document.querySelectorAll('.card-body');



cards.forEach(card => card.addEventListener('click', (e)=>{
    console.log(e.target);
    e.target.style.transition = "1s";
    e.target.style.transform = "rotateY(360deg)";
    e.target.style.backgroundImage = "url(imgs/one-try.jpg)";
    // if()
}))