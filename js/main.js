/*import-------------------------------*/

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);
/*Variables-------------------------------*/

/*Fontions-------------------------------*/



/*Animation premier bloc----------*/
gsap. from("#movingcard1", {
    y:'-2000px',
    
    duration: 2,
    
    yoyo:true
})




/*Animation deuxieme bloc----------*/


gsap. from("#boxallskin2", {

    scrollTrigger: {
        trigger:'#sec2',
        start: 'top 50%',
        scrub :1 ,
        //markers:true,
        id :'sec2',
        toggleActions:'play none reverse reset ',

    },
    y:'50vh',
    
    duration: 2,
    
})

/*Animation troisieme bloc----------*/
let tl = gsap.timeline({
    repeat:-1,
    yoyo: true

})
tl.from('#ezquichante22',{
    x:40,
})

.to('#ezquichante22',{
    x:-40,
})


Draggable.create('#img199',{
    type:'y,x,',                                   /*pour le petit vynille---------------------------*/
 
    bounds : '#sec33',
    
})