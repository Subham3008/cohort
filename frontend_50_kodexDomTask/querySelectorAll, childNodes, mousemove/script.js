const allCards = document.querySelectorAll('.card')

allCards.forEach((elem) => {
  elem.childNodes[5].addEventListener('click', function () {
    if (elem.childNodes[3].innerHTML === 'Stranger') {
      elem.childNodes[3].innerHTML = "friends"
    } else {
      elem.childNodes[3].innerHTML = "Stranger"
    }
  })
})