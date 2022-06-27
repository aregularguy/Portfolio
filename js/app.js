const navToggle = document.querySelector('.nav-toggle')
const navlinks = document.querySelectorAll('.nav__link')



navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open')
})

navlinks.forEach(link =>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    })
})


const clips = document.querySelectorAll('.clip')

// clips.forEach(clip,(clip)=>{
//     console.log("helo");
// })

clips.forEach((clip)=>{

    clip.addEventListener('mouseenter', (e)=>{
        clip.play()
    })
    clip.addEventListener('mouseout', (e)=>{
        clip.pause()
    })

})