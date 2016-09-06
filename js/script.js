/***********************************************************
*
*   Random Quote 
*
*  Generates a random quote every time the button is clicked 
*  or when it times out. The quotes do not repeat until all 
*  quotes have been displayed.
*
*  Author: Steve Masteller
*  Email: stevermasteller@gmail.com
***********************************************************/ 


const TIMEOUT_IN_SECONDS = 5;
var timeout;					// holds timeout counter
var remainingQuoteKeys = []; 	// remaingQuoteKeys set in getRandomQuote
//var originalQuotes;			// originalQuotes array set in quotes.js file

// When timeout triggers
//		print a new quote to the screen
//		restart the timeout counter
function timeoutTrigger() {
    printQuote();
	timeoutInit();
}

// Start the timeout counter
function timeoutInit() {
    timeout = setTimeout('timeoutTrigger()', TIMEOUT_IN_SECONDS * 1000);
 }

// Clear the timeout counter
//		timeout is a global variable
function timeoutClear() {
    clearTimeout(timeout);
}

// Print some HTML to the screen at id
function print( id, html ) {
	document.getElementById(id).innerHTML = html;
}

// Get a random number from 0 to upper - 1
//		if upper is 0 returns 0
function getRandomNumber( upper ) {
	var randomNumber = Math.floor( Math.random() * upper ); 
	return randomNumber;
}

// Randomly change the background color.
function randomBackgroundColor() {
	var color = 'rgb(';
	color += getRandomNumber( 256 ) + ',';
	color += getRandomNumber( 256 ) + ',';
	color += getRandomNumber( 256 ) + ')';
	document.body.style.background = color;
}

// Get and remove a random key from global remainingQuoteKeys array
// Use the random key to select a quote from global originalQuotes array
// 		if the key array is empty reload it
function getRandomQuote() {
	var randomIndex;
	var quote;
	
	if (typeof remainingQuoteKeys[0] === 'undefined') {	  // if all keys removed from array
		//alert('Reload the remainingQuoteKeys array');
		remainingQuoteKeys = Object.keys(originalQuotes); 
	} 
	
	randomIndex = getRandomNumber(remainingQuoteKeys.length ); 	// pick a key at random
	quote = originalQuotes[remainingQuoteKeys[randomIndex]];   	// use key to select quote
	remainingQuoteKeys.splice(randomIndex, 1) 					// remove used key from array
	//alert('remainingQuoteKeys: ' + remainingQuoteKeys.join());
	return quote;
}

// Call getRandomQuote
// Construct HTML string from quote object
//		Skip citation if it doesn't exist
// 		Skip year if it doesn't exist
// Change the background color
// Call print 
function printQuote() {
	var quote = getRandomQuote();
	var html  = ' <p class="quote">' + quote.quote +
				'</p> <p class="source">' + quote.source;
	
	if ('citation' in quote) {
		html += '<span class="citation">' + quote.citation + '</span>';
	}
	
	if ('year' in quote) {
		html += '<span class="year">' + quote.year + '</span></p>';
	}
	
	html += '<p class="tag">' + quote.tag + '</p>';
	
	randomBackgroundColor();
	print( 'quote-box', html );
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, 
// 		call printQuote  -- prints new quote
//		restart timer
document.getElementById('loadQuote').addEventListener("click", 
	function() {
		printQuote();
		timeoutClear();
		timeoutInit();
	}, false);
	
// Initialize on page load
printQuote();
timeoutInit();

