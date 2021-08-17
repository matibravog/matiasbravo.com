// header
const main  = document.querySelector("main")
const header  = document.querySelector(".header")
const botonHeader  = document.querySelector(".header-button")
const menuMobile  = document.querySelector(".menu-mobile")

const lineA  = document.querySelector(".a")
const lineB  = document.querySelector(".b")
const lineC  = document.querySelector(".c")

const menuLines = () => {
    lineA.classList.toggle("rotatea")
    lineB.classList.toggle("inactiveb")
    lineC.classList.toggle("rotatec")
}

botonHeader.onclick = () => {
    menuMobile.classList.toggle("menu-active")
    main.classList.toggle('ocultar-main')
    menuLines()

    main.addEventListener('click', () => {
        menuMobile.classList.remove('menu-active')
        main.classList.remove('ocultar-main')
        if(lineA.classList.contains('rotatea')){
            menuLines()
        }
    })
}

//fotos
const fotosButton = document.querySelector('.fotos-button')
const fotosContainer = document.querySelector('.fotos-container')
fotosButton.onclick = () => {
    fotosContainer.classList.toggle('inactive')
}