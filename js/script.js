

// placeholder 
function printQuote() {
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Get a random number from 0 to upper - 1
function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ); 
  return randomNumber;
}

// Get a random quote object from quotes array
function getRandomQuote( quotes ) {
	var randomIndex = getRandomNumber( quotes.length );
	return quotes[randomIndex];
}

var quote = getRandomQuote(quotes);
console.log(quote.quote);