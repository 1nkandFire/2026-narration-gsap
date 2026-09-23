/*import-------------------------------*/

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);
/*Variables-------------------------------*/

/*Fontions-------------------------------*/



/*Animation premier bloc----------*/
/*gsap. from("#movingcard1", {
    y:'-1200px',
    rotation: 360,
    duration: 2,
    repeat: -1,
    yoyo: true,
})

/*Animation deuxieme bloc----------*/


gsap. from("#movingcard2", {

    scrollTrigger: {
        trigger:'#sec22',
        start: 'top 50%',
        scrub :1 ,
        //markers:true,
        id :'sec22',
        toggleActions:'play none reverse reset ',

    },
    y:'50vh',
    
    duration: 2,
    
})

/*Animation troisieme bloc----------*/
let tl = gsap.timeline({
    repeat:-1,
    yoyo: true,

})
tl.to('#movingcard3',{
    x:100,
})
.to('#movingcard3',{
    y:100,
})
.to('#movingcard3',{
    x:-100,
})
.to('#movingcard3',{
    y:-100,
})



/*Animation quatrieme  bloc----------*/
Draggable.create('#movingcard4',{
    type:'y,x,',
    //type:'rotation',  
    bounds : '#sec44',

})
