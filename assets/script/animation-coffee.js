
const CoffeeLiquide = document.querySelector('.coffe-pot img:nth-child(1)')
const emptyCoffeePot = document.querySelector('.coffe-pot img:nth-child(2)')
//const coffeAnimationContainer = document.querySelector('.coffee-animation')
//const text1 = document.querySelector('.text-main h2:nth-child(1)')
//const text2 = document.querySelector('.text-main h2:nth-child(2)')

const imageMain = document.querySelector('.home .main-picture:nth-child(1)')
const cup = document.querySelector('.home .cup')
//gsap.to(imageMain, {opacity:1,duration: 4,})

gsap.to(imageMain, {
    opacity:1,
    duration: 10,
    scrollTrigger: {
        trigger: ".home",
        //markers:true,
        start: "top 20%",
        end: "bottom 50%",
        toggleActions: "play none reverse reset",
        scrub: 1,
        }
})


let potScrollTrigger  = {
    trigger: ".coffee-beans-background",
    //markers:true,
    start: "top+=90% 70%",
    end: "bottom-=20% 35%",

    // onEnter onLeave onEnterBack onLeaveBack
    // play pause resume reset restart complete reverse none
    toggleActions: "play pause reverse reset",
    scrub: 0.5,
    //onEnter: () => 
    };

   
let cutScrollTrigger  = {
    trigger: ".marker",
    markers:true,
    start: "top+=50% 60%",
    end: "bottom-=20% 40%",

    // onEnter onLeave onEnterBack onLeaveBack
    // play pause resume reset restart complete reverse none
    toggleActions: "play pause reverse reset",
    scrub: true,
    //onEnter: () => 
    };

let potAnimationDuration = 2; 

/* 
gsap.to(cup, { 
    duration:10, 
    y:100, 
    x:0,  
    scale:1, 
    //ease:"back.out(1.7)",
    scrollTrigger: cutScrollTrigger
})
*/
gsap.to(CoffeeLiquide, {
    rotation: 10, 
    duration: potAnimationDuration,
    scale:0.9,
    y:18,
    x:-10,
    scrollTrigger: potScrollTrigger
})



gsap.to(emptyCoffeePot, {
    rotation: 30, 
    duration: potAnimationDuration,
    scrollTrigger: potScrollTrigger,
})



gsap.to(imageMain, {
    opacity:1,
    duration: potAnimationDuration,
    scrollTrigger: {
        trigger: "#marker",
        //markers:true,
        start: "top center",
        //end: "bottom+=200 30%",
        //start: "top-=50% 50%",
    }
})





















/* 
gsap.to(text1, {
    y: 0, 
    opacity: 0,
    duration: 4,
    scrollTrigger: {
        trigger: ".cup",
        markers:true,
        start: "top 60%",
    }
})


gsap.to(text2, {
    y: 0, 
    opacity: 1,
    duration: 4,
    scrollTrigger: {
        trigger: ".cup",
        markers:true,
        start: "top 60%",
    }
})









//setTimeout(image(), 10000)
//function image() {
// coffeAnimationContainer.classList.add('image-background');   
//}

*/
