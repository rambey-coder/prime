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