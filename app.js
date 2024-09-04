// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById("date");
date.innerText= new Date().getFullYear();

// ********** close links ************

const menuBtn = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

menuBtn.addEventListener("click",toggleMenu);

function toggleMenu(){

    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height.toFixed(0);

    if(containerHeight === 0){
        
        linkContainer.style.height = `${linksHeight}px`;

    }else{
        linkContainer.style.height = `0px`;

    }
    
}


// ********** fixed navbar ************

const nav = document.getElementById("nav");
const uperBtn = document.querySelector(".top-link");


// if(window.scrollY)


window.addEventListener("scroll",fixedNavbar)

function fixedNavbar(){

    if(window.scrollY > nav.getBoundingClientRect().height){
        nav.classList.add("fixed-nav");
        uperBtn.classList.add("show-link");
    

    }else{
        nav.classList.remove("fixed-nav");
        uperBtn.classList.remove("show-link");


    }
   

}

// ********** smooth scroll ************


const titles = document.querySelectorAll(".scroll-link");
const fixIn = nav.classList.contains("fixed-nav");

titles.forEach((title) =>title.addEventListener("click",smoothScroll))

function smoothScroll(e){
    e.preventDefault();

    let pageId = e.target.dataset.page;
    let section = document.getElementById(`${pageId}`);
    const linksHeight = links.getBoundingClientRect().height.toFixed(0);

    if(window.innerWidth>800){

        if(window.scrollY < nav.getBoundingClientRect().height){

            let scrollHeight = section.offsetTop - ( nav.getBoundingClientRect().height * 2);
            window.scrollTo(0,scrollHeight);
            
    
    
        }else{
    
            let sectionHeight = section.offsetTop - nav.getBoundingClientRect().height ;
            window.scrollTo(0,sectionHeight);
    
        }

    }else{

        if(window.scrollY < nav.getBoundingClientRect().height){

            let scrollHeight = section.offsetTop - ( nav.getBoundingClientRect().height *2 -linksHeight);
            window.scrollTo(0,scrollHeight);
            
    
    
        }else{
    
            let sectionHeight = section.offsetTop - (nav.getBoundingClientRect().height-linksHeight) ;
            window.scrollTo(0,sectionHeight);
    
        }

        linkContainer.style.height=0;
    }
  

    



    console.log(  linksHeight)
    console.log(nav.getBoundingClientRect().height )

   

}

// select links
