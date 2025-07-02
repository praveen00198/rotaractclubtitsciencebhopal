let tl = gsap.timeline();

tl.from(".about-details p",{
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.3
})