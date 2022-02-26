const btnOpen = document.querySelector('#open')
const btnClose = document.querySelector('#close')
const itemMenus = document.querySelectorAll('.navbar ul li a')

const openClick = (e) => {
    document.querySelector('.navbar ul').classList.add('active')
}

const closeClick = () => {
    document.querySelector('.navbar ul.active').classList.remove('active')
}

btnOpen.addEventListener('click', openClick)
btnClose.addEventListener('click', closeClick)

itemMenus.forEach(element => {
    element.addEventListener('click', closeClick)
})