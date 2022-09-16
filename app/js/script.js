// const btnHam = document.querySelector("#btnHam");
const btnHam = document.querySelector("#btn-ham");
const overlay = document.querySelector(".overlay");
btnHam.addEventListener('click', ()=>{
    if(btnHam.classList.contains("open")){
        btnHam.classList.remove("open");
        overlay.classList.add("fade-out");
        overlay.classList.remove("fade-in");
    }
    else{
         btnHam.classList.add("open");
         overlay.classList.remove("fade-out");
         overlay.classList.add("fade-in");
    }
});

