function changeOtherSquaresColor(square) {
  var squares = document.getElementsByClassName('square');
  for (var i = 0; i < squares.length; i++) {
    if (squares[i] !== square) {
      squares[i].classList.add('highlight');
    }
  }
}

function resetSquaresColor() {
  var squares = document.getElementsByClassName('square');
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.remove('highlight');
  }
}
