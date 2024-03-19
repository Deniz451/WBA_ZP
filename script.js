// Event listener for color mode change
const colorModeButton = document.getElementById('colorMode');
colorModeButton.addEventListener('click', toggleColorMode);

// Event listener for language change
const languageButton = document.getElementById('language');
languageButton.addEventListener('click', changeLanguage);

// Event listener for navbar
const navOpenButton = document.getElementById('navOpenButton');
navOpenButton.addEventListener('click', openNav);
const navCloseButton = document.getElementById('navCloseButton');
navCloseButton.addEventListener('click', closeNav);

// show cards eventlistener
// hide cards eventlistener
 


// Navbar functions
function openNav() {
  document.getElementById("navbar").style.width = "250px";
  }

function closeNav() {
  document.getElementById("navbar").style.width = "0";
}

// Showing/hiding cards functions
function showAboutCard() {
  var card = document.getElementById('card-about');
  card.style.display = 'flex';
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function hideAboutCard() {
  var card = document.getElementById('card-about');
  var header = document.getElementById('about');
  card.style.display = 'none';
  header.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function showCodingCard() {
  var card = document.getElementById('card-coding');
  card.style.display = 'flex';
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function hideCodingCard() {
  var card = document.getElementById('card-coding');
  var header = document.getElementById('coding');
  card.style.display = 'none';
  header.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function showModelingCard() {
  var card = document.getElementById('card-modeling');
  card.style.display = 'flex';
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function hideModelingCard() {
  var card = document.getElementById('card-modeling');
  var header = document.getElementById('modeling');
  card.style.display = 'none';
  header.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function for color mode change
function toggleColorMode() {
  var root = document.documentElement;

  const computedStyle = getComputedStyle(colorModeButton);
  const color = computedStyle.getPropertyValue('color');
  

  if(computedStyle.getPropertyValue('color') == 'rgb(0, 0, 0)'){
    root.style.setProperty('--bg-light1', 'rgb(0, 0, 0)');
    root.style.setProperty('--bg-light2', 'rgb(25, 25, 25)');
    
    root.style.setProperty('--icon-color', 'rgb(255, 255, 255)');

    root.style.setProperty('--header-color', 'rgb(255, 255, 255)');

    root.style.setProperty('--footer-color', 'rgb(255, 255, 255)');

    root.style.setProperty('--navbar-bg-color', 'rgb(255, 255, 255)');
    root.style.setProperty('--navbar-color', 'rgb(0, 0, 0)');
    root.style.setProperty('--navbar-color-hover', 'rgb(100, 100, 100)');
  }
  else{
    root.style.setProperty('--bg-light1', 'rgb(255, 255, 255');
    root.style.setProperty('--bg-light2', 'rgb(233, 232, 232)');
    
    root.style.setProperty('--icon-color', 'rgb(0, 0, 0)');

    root.style.setProperty('--header-color', 'rgb(0, 0, 0)');

    root.style.setProperty('--footer-color', 'rgb(0, 0, 0)');

    root.style.setProperty('--navbar-bg-color', 'rgb(0, 0, 0)');
    root.style.setProperty('--navbar-color', 'rgb(124, 120, 120)');
    root.style.setProperty('--navbar-color-hover', 'rgb(255, 255, 255)');
  }
}

var isEnglish = true; // Language variable
// Functions for switching languages
function changeLanguage() {
    var caption1 = document.getElementById('about');
    var caption2 = document.getElementById('coding');
    var caption3 = document.getElementById('modeling');
    var caption4 = document.getElementById('farewell');


    caption1.textContent = isEnglish ? "O mně" : "About";
    caption2.textContent = isEnglish ? "Programování" : "Coding";
    caption3.textContent = isEnglish ? "3D Modeling" : "3D Modeling";
    caption4.textContent = isEnglish ? "Děkuji za návštěvu!" : "Thank you for visiting!";
    isEnglish = !isEnglish;
}