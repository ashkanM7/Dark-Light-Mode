const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = getById("nav")
const toggleIcon = getById("toggle-icon")
const image1 = getById("image1")
const image2 = getById("image2")
const image3 = getById("image3")
const textBox = getById("text-box")
let isDark = true
const DARK_THEME = "dark"
const LIGHT_THEME = "light"
// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`
  image2.src = `img/undraw_feeling_proud_${color}.svg`
  image3.src = `img/undraw_conceptual_idea_${color}.svg`
}
// Helper function to minimize the code length
function getById(el) {
  return document.getElementById(el)
}
function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)"
  textBox.style.backgroundColor = isDark ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)"
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode"
  isDark ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
  isDark ? imageMode("dark") : imageMode("light")
}
// Dark Mode Style
function darkMode() {}

// Light Mode Style
function lightMode() {}
// witch Event Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", DARK_THEME)
    localStorage.setItem("theme", DARK_THEME)
    toggleDarkLightMode(isDark)
  } else {
    document.documentElement.setAttribute("data-theme", LIGHT_THEME)
    localStorage.setItem("theme", LIGHT_THEME)
    toggleDarkLightMode(!isDark)
  }
}
// Event Listener
toggleSwitch.addEventListener("change", switchTheme)

// Check local storage for theme
const currentTheme = localStorage.getItem("theme")
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme)
  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true
    toggleDarkLightMode(isDark)
  }
}
