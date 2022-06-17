const button = document.querySelector(".ham");
const mobileMenu = document.querySelector(".mobileMenu");
const image = document.querySelector(".ham img");


// Hamburger nav
button.addEventListener('click' , ()=>{

    if(mobileMenu.getAttribute("id") === "1"){
    image.setAttribute("src" , "images/icon-close.svg");
    mobileMenu.style.display ="block";
    mobileMenu.setAttribute("id", "2");
    }
    else if(mobileMenu.getAttribute("id") === "2"){
        image.setAttribute("src" , "images/icon-hamburger.svg");
       mobileMenu.style.display ="none";
        mobileMenu.setAttribute("id", "1");
    }
   
} 
    
);