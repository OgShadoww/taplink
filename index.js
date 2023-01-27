const popup = document.querySelector('.popup')
const popupBody = document.querySelector('.popup-body')
const buttons = document.querySelectorAll('.container-item-share')

popupBody.addEventListener('click', (e) => {
    e.stopPropagation()
})
popup.addEventListener('click', () => {
    popup.classList.remove('active')
})

buttons.forEach(button => 
    button.addEventListener('click', (e) => {
        e.preventDefault()
        popup.classList.add('active')
        console.log('f')
    })
)

function openModal (id) {
    document.querySelector(``)
}