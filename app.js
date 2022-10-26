const bounce = new TimelineMax({
    repeat: -1
})



function bounceball() {
    let bunce = new TimelineMax();

    bunce.to('.chain', 0.5, {
        transformOrigin: "50% 50%",
        y: -90,
        ease: Circ.easeOut
}, "bounce")

bunce.to('.chain', 0.4, {
        transformOrigin: "50% 50%",
        y: 20,
        ease: Circ.easeIn
      }, "bounce2")


    bunce.to('.poly', 0.5, {
        transformOrigin: "50% 50%",
        y: -90,
        ease: Circ.easeOut,
        delay: .1
}, "bounce")

bunce.to('.poly', 0.4, {
        transformOrigin: "50% 50%",
        y: 20,
        ease: Circ.easeIn
      }, "bounce2")

      return bunce;

}

bounce.add(bounceball())

const load = gsap.timeline({
    paused: true
})

load.to('.progress, .bar, .percent', 0.5, {
    width: '100%',
    height: 0,
    padding: 0,
    duration: 2,
    opacity: 0
} )


load.to('.poly', .5, {
    x: '100%',
    duration: 1.2,
    ease: Power1.easeInOut
})
load.to('.chain', .5, {
    x: '-100%',
    duration: 1.2,
    ease: Power1.easeInOut
})

load.to('.chain, .poly', {
    delay: 1,
    duration: 1,
    display: 'none'
})

load.to('.loading', {
    display: 'none'
})

load.to('.main-content', {
    display: 'block',
    ease: "power3.in",
    duration: 2.4
})

let id, width = 0;

function play() {
    id = setInterval(time, 60)
}

function time(){
    if(width > 100 - 1){
        clearInterval(id)
        load.play()
    } else {
        width++;
        const bar = document.querySelector('.bar')
        const percent = document.querySelector('.percent')

        bar.style.width = width + '%'
        percent.innerHTML = width + '%'
    }
}

window.onload = function(){
    play()
}