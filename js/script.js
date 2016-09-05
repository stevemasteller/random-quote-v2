// Print some HTML to the screen at id
function print( id, html ) {
	document.getElementById(id).innerHTML = html;
}

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

// Call getRandomQuote
// Construct HTML string from quote object
// 		Skip citation if it doesn't exist
//		Skip year if it doesn't exist
// Call print 
function printQuote( quotes ) {
	var quote = getRandomQuote( quotes );
	var html  = ' <p class="quote">' + quote.quote +
				'</p> <p class="source">' + quote.source;
	
	if ('citation' in quote) {
		html += '<span class="citation">' + quote.citation + '</span>';
	}
	
	if ('year' in quote) {
		html += '<span class="year">' + quote.year + '</span>';
	}
	
	html += '</p>';
	print( 'quote-box', html );
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function() {printQuote( quotes )}, false);

