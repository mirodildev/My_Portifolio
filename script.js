const elDark = document.querySelector('.moon')
const elSun = document.querySelector('.sun')
const elBody = document.querySelector('.body')
const elHeader = document.querySelector('.header')
const elDarkModeBtn = document.querySelector('.darkmode')
const elHover = document.querySelector('.link-hover')
const elMirodil = document.querySelector('.mirodil')


console.log(elHeader);

elDarkModeBtn.addEventListener('click', function () {
    elHeader.classList.toggle('dark')
    elSun.classList.toggle('hidden')
    elDark.classList.toggle('hidden')
    elBody.classList.toggle('dark')

    
    
})

elHover.addEventListener('click', function () {
    elHover.classList.toggle('hover')
    setTimeout(() => {
        elMirodil.classList.toggle('hidden')

    }, 300);
})
    
console.log(elHover);

