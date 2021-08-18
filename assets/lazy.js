const isIntersecting = (entry) => {
    return entry.isIntersecting //method
}
const loadImg = (entry) => {
    const container = entry.target
    const imagen = container.firstChild
    const url = imagen.dataset.src
    imagen.src = url

    observer.unobserve(container) //method
    console.log('imagenes cargadas')
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImg)
})

export const registerImg = (img) => {
    observer.observe(img)
}

