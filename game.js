// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
<<<<<<< HEAD
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
=======
>>>>>>> 8703471d788fa81507714695bfb61ac70ffd51bc
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
<<<<<<< HEAD
  evt.target.classList.remove('blue')
  evt.target.classList.remove('invisible')

=======
>>>>>>> 8703471d788fa81507714695bfb61ac70ffd51bc
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE

<<<<<<< HEAD
function makeBlue (evt) {
 // evt.preventDefault()  // prevents context menu on right mouse click
  evt.target.classList.toggle('blue')
  evt.target.classList.remove('green')
  evt.target.classList.remove('invisible')
  updateCounts()
}

// CREATE FUNCTION hide HERE

function hide (evt) {
 
  evt.target.classList.toggle('invisible')
  evt.target.classList.remove('blue')
  evt.target.classList.remove('green')
  updateCounts()
}

=======
// CREATE FUNCTION hide HERE

>>>>>>> 8703471d788fa81507714695bfb61ac70ffd51bc
function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
<<<<<<< HEAD

  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
 totals.blue = document.getElementsByClassName('blue').length
 totals.green = document.getElementsByClassName('green').length
 totals.invisible = document.getElementsByClassName('invisible').length
 
=======
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

>>>>>>> 8703471d788fa81507714695bfb61ac70ffd51bc
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
<<<<<<< HEAD

=======
>>>>>>> 8703471d788fa81507714695bfb61ac70ffd51bc
