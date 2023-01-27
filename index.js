const popup = document.querySelectorAll('.popup')
const popupBody = document.querySelectorAll('.popup-body')
const buttons = document.querySelectorAll('.container-item-share')
const copyLink = document.querySelectorAll('.popup-body-input-icon')

popupBody.forEach(popup => popup.addEventListener('click', (e) => {
    e.stopPropagation()
}))
popup.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.remove('active')
}))

buttons.forEach(button => 
    button.addEventListener('click', (e) => {
        e.preventDefault()
        openModal(button.getAttribute('data-value'))
    })
)
function openModal (id) {
    document.querySelector(`.popup[data-popup='${id}']`).classList.add('active')
}
copyLink.forEach(copy => 
    copy.addEventListener('click', (e) => {
        e.stopPropagation()
        let input = document.querySelector(`.${copy.getAttribute('data-link')}`)
        input.disabled = false;
        input.select();
        input.disabled = true
        document.execCommand('copy');
        window.getSelection().removeAllRanges()
    })    
)