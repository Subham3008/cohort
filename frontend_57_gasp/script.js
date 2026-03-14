var tl1 = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:"true",
    //markers:true,
}})

tl1.to("#sprite",{
    top:"120%",
    left:"18%"
},'lemon')
tl1.to("#lemon-cut",{
    width:"17%",
    top:"160%",
    left:"30%"
},'lemon')
tl1.to("#fresh-lemon",{
    width:"20%",
    top:"180%",
    right:"0%"
},'lemon')
tl1.to("#leaf",{
    top:"110%",
    rotate:"120deg",
    left:"80%"
},'lemon')
tl1.to("#leaf2",{
    top:"175%",
    rotate:"180deg",
    left:"0%"
},'lemon')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:"true",
    markers:false,
}})
tl2.from("#orange",{
    rotate:"-90deg",
    left:"-50%",
    top:"110%"
})
tl2.from("#fanta",{
    width:"30%",
    rotate:"5deg",
    left:"20%",
    top:"60%"
})
tl2.from("#coca-cola",{
    width:"30%",
    rotate:"5deg",
    left:"20%",
    top:"60%"
})
tl2.from("#splash",{
    rotate:"-90deg",
    left:"-20%",
    top:"-10%"   
})
tl2.to("#lemon-cut",{
    width:"20%",
    left:"40%",
    top:"210%"
})
tl2.to("#sprite",{
    width:"15%",
    left:"43%",
    top:"225%"   
})

