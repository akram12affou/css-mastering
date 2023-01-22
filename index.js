const toggleButton = document.getElementsByClassName('hum_cont')[0]

const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const hum = document.getElementsByClassName('hum')[0]
const h1 = document.getElementsByTagName('h1')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('navbar-linkss')
  hum.classList.toggle('humopen')
})