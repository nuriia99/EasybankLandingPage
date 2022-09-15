// const btnHam = document.querySelector("#btnHam");
const btnHam = document.querySelector("#btn-ham");
btnHam.addEventListener('click', ()=>{
    if(btnHam.classList.contains("header-menu-open")){
        btnHam.classList.remove("header-menu-open");
    }
    else btnHam.classList.add("header-menu-open");
});

