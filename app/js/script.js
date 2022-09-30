// const btnHam = document.querySelector("#btnHam");
const btnHam = document.querySelector("#btn-ham");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");
const toLoadElements = document.querySelectorAll(".to-load");

//on-load
// window.onload = function() {
//     console.log(toLoadElements);
//     setTimeout(function(){
//         toLoadElements.forEach((element)=>{
//             element.classList.remove("to-load");
//             element.classList.add("load");
//          });
//     }, 0);
//   };


// hamburguer menu
btnHam.addEventListener('click', ()=>{
    if(header.classList.contains("open")){
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElements.forEach((element)=>{
            element.classList.add("fade-out");
            element.classList.remove("fade-in");
         });
        
    }
    else{
        body.classList.add("noscroll");
         header.classList.add("open");
         fadeElements.forEach((element)=>{
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
         });
         
    }
});

visualViewport.onresize = () => {
    if(header.classList.contains("open")){
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElements.forEach((element)=>{
            element.classList.add("fade-out");
            element.classList.remove("fade-in");
         });
        
    }
  };

