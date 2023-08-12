

 // JavaScript to add click event listeners to left and right buttons
const left = document.querySelector(".leftbutton")
const right = document.querySelector(".rightbutton")
const blogslider = document.querySelectorAll(".blogslider")
    const slide = document.querySelector(".slideItem")
    
  const mobile_navbar = document.querySelector(".mobile-navbar");
    const header = document.querySelector(".header")
  const toggle_navbar = ()=>{
  header.classList.toggle("active")
  }

  mobile_navbar.addEventListener("click",()=> toggle_navbar()
  )



left.addEventListener("click",()=>{
    slide.style.transform = `translateX(${0}vw)`;
  
})
right.addEventListener("click",()=>{
    slide.style.transform = `translateX(${-50.5}vw)`;
   
})


let isImage1 = true;

const updateSliderImages = () => {
    const boxes = document.querySelectorAll(".img-box");
    const sliderwrappers = document.querySelectorAll(".sliderwrapper");

    if (isImage1) {
        boxes.forEach((box) => {
            box.style.backgroundImage = "url('slider-1.jpg')";
        });
        sliderwrappers.forEach((sliderwrapper) => {
            sliderwrapper.style.backgroundImage = "url('slider.jpg')";
        });
    } else {
        boxes.forEach((box) => {
            box.style.backgroundImage = "url('slider.jpg')";
        });
        sliderwrappers.forEach((sliderwrapper) => {
            sliderwrapper.style.backgroundImage = "url('slider-1.jpg')";
        });
    }

    isImage1 = !isImage1;
};

const startSlideshow = () => {
    setInterval(updateSliderImages, 5000); 
};

startSlideshow();


const next = document.querySelector(".next");
next.addEventListener("click" , ()=>{
    const boxes = document.querySelectorAll(".img-box");
    const sliderwrappers = document.querySelectorAll(".sliderwrapper");
    // const blogslider = document.querySelectorAll(".blogslider")
    // const slide = document.querySelector(".slideItem")
    // slide.style.transform = `translateX(${-50}vw)`;
    // slide.style.marginLeft = '150px'

    if (isImage1) {
        boxes.forEach((box) => {
            box.style.backgroundImage = "url('slider-1.jpg')";
        });
        sliderwrappers.forEach((sliderwrapper) => {
            sliderwrapper.style.backgroundImage = "url('slider.jpg')";
        });
    } else {
        boxes.forEach((box) => {
            box.style.backgroundImage = "url('slider.jpg')";
        });
        sliderwrappers.forEach((sliderwrapper) => {
            sliderwrapper.style.backgroundImage = "url('slider-1.jpg')";
        });
    }

    isImage1 = !isImage1;
})

 // JavaScript for card slider functionality
 const slider = document.querySelector('.slider-content');
 const cards = document.querySelectorAll('.blogItem');
 const cardWidth = cards[0].offsetWidth;
 const visibleCards = 2; // Number of cards to display at a time
 let currentIndex = 0;

 function slideToIndex(index) {
     slider.style.transform = `translateX(-${index * cardWidth}px)`;
 }

 function nextSlide() {
     currentIndex = (currentIndex + 1) % (cards.length - visibleCards + 1);
     slideToIndex(currentIndex);
 }

 setInterval(nextSlide, 5000); // Slide to the next card every 5 seconds





  

