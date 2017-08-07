window.onload = function(){
  let startTime = new Date()
  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
  function updateTime(){
    let now = new Date()
    let elapsed = now.getTime() - startTime.getTime();
    let today = new Date (elapsed)

        // var h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);

        let timeString = m + ":" + s

    document.querySelector('.play-time').innerHTML = timeString;

    setTimeout(updateTime, 500);
  }

  updateTime();
}
// create a function to ensure that the clock begins when the first card is clicked and only the first card.
// create a function to stop the clock when the last of the cards have been matched
// create an alert message/function that returns "You Win" if the player wins && "Better Luck Next Time" if the player loses.

function gameCards (){
  let cards = ['Dog', 'Dog', 'Horse', 'Horse', 'Lion', 'Lion', 'Panda', 'Panda', 'Zebra', 'Zebra', 'Fox', 'Fox', 'Turtle', 'Turtle', 'Bear', 'Bear'];
  for (let i = 0; i < cards.length; i++);

}
console.log(cards.length)
// create function so that assigns a card value to each "square".
// create "onclick" function so that card value is displayed/flipped when the card is clicked.
// create a function (if, else) that keeps the cards flipped when two cards match & flips back over when they do not match.
// create a function that reduces the amount of "chances" if a match is not made...should be linked to the alert box so that alert "
  //"Better Luck Next Time" appears if all chances are used.
