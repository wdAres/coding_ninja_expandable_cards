// First we need all the slides 

const slides = document.querySelectorAll('.slide')

slides.forEach((slide)=>{
    slide.addEventListener('mouseenter',()=>{
        removeClass()
        slide.classList.add('active')
    })
})

const removeClass = () => {
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}