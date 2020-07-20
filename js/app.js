// ------------- VARIABLES -------------
// ELEMENTS
const burgerButton = document.querySelector('#burger-menu')
const menu = document.querySelector('.menu')
// MEDIA
const ipadMedia = window.matchMedia('screen and (max-width:767px)')


// ------------- FUNCTIONS -------------
/**
 * Hide/show menu on mobile version
 */
function toggleMenuVisibility() {
  // Ternary operator just to be a bit clearer
  // In case of needing more logic, change it by an if operator
  menu.classList.contains('is-active')
    ? menu.classList.remove('is-active')
    : menu.classList.add('is-active')
}

/**
 * Toggle listener for burger button
 */
function toggleMenuListener(event) {
  // Ternary operator just to be a bit clearer
  // In case of needing more logic, change it by an if operator
  event.matches
    ? burgerButton.addEventListener('click', toggleMenuVisibility)
    : burgerButton.removeEventListener('click', toggleMenuVisibility)
}


// ------------- EVENTS / FUNCTIONS CALLS -------------
// Watch window resizing
ipadMedia.addListener(toggleMenuListener)

// Verify window size on first load
toggleMenuListener(ipadMedia)
