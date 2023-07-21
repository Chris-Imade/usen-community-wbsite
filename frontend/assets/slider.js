var carouselItems = document.querySelectorAll('.sliding_image');
var carouselImages = document.querySelectorAll('.sliding_image');
var carouselNext = document.querySelector('.carousel-control-next');
var carouselPrev = document.querySelector('.carousel-control-prev');


let myIndex;

// Next Functions in here
carouselNext.addEventListener("click", function(e, item) {
    e.stopPropagation();
    console.log('NEXT BUTTON CLICKED');
    carouselItems.forEach((item, index) => {
        if(item.attributes.class.textContent.includes("active")) {
            myIndex = index;
        }
    });
});

carouselNext.addEventListener("click", () => {
    let index = myIndex;
    if(index === carouselItems.length) {
        carouselImages[0].classList.add('active');
    }
    if(index === 0) {
        carouselImages[1].classList.add('active');
    }
    if (index != myIndex) {
        carouselImages[index].classList.remove('active');
    }else {
        // carouselImages[index].classList.remove('active');
        console.log(index);
    }

    index += 1;
    console.log(index)
});

// Previous Functions in here

carouselPrev.addEventListener("click", function(e, item) {
    e.stopPropagation();
    console.log('PREV BUTTON CLICKED');
    carouselItems.forEach((item, index) => {
        if(item.attributes.class.textContent.includes("active")) {
            myIndex = index;
            if(myIndex === carouselItems.length - 1) {
                myIndex = 0;
            } else if(myIndex === 0) {
                myIndex+1;
            } else {
                console.log("Nothing from first event");
            }
        }
        
    });
});

carouselPrev.addEventListener("click", () => {
    let index = myIndex;
    if(index === carouselItems.length - 1) {
        index = 0
    } else if(index === 0) {
        index-1;
    } else {
        console.log("Nothing from second event");
    }
    console.log("index", index);
    if(index === 0) {
        carouselImages[0].classList.remove('active');
        carouselImages[1].classList.add('active');
    } else {
        carouselImages[index].classList.remove('active');
        carouselImages[index - 1].classList.add('active');
    }
})


carouselPrev.addEventListener("click", prev);



// if(!item.attributes.class.textContent.includes("active")) {
    
// }

