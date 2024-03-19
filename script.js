// Navbar opening function
function openNav() {
  document.getElementById("navbar").style.width = "250px";
  }
  
function closeNav() {
  document.getElementById("navbar").style.width = "0";
}




// Functions for showing about card
function showAboutCard() {
  var card = document.getElementById('card-about');
  card.style.display = 'flex';
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Functions for hiding about card
function hideAboutCard() {
  var card = document.getElementById('card-about');
  card.style.display = 'none';
  window.scrollTo({ top: 700, behavior: 'smooth' });
}


// Functions for showing coding card
function showCodingCard() {
  var card = document.getElementById('card-coding');
  card.style.display = 'flex';
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// Functions for hiding coding card
function hideCodingCard() {
  var card = document.getElementById('card-coding');
  card.style.display = 'none';
  window.scrollTo({ top: 1400, behavior: 'smooth' });
}


// Functions for showing 3D modeling card
function showModelingCard() {
  var card = document.getElementById('card-modeling');
  card.style.display = 'flex';
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Functions for hiding 3D modeling card
function hideModelingCard() {
  var card = document.getElementById('card-modeling');
  card.style.display = 'none';
  window.scrollTo({ top: 2100, behavior: 'smooth' });
}




// Function for ligh mode change
function colorModeChange() {

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