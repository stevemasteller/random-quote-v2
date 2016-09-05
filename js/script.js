const TIMEOUT_IN_SECONDS = 3;
var timeout;	// holds timeout counter

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

// Get a random quote object from global quotes array
function getRandomQuote() {
	var randomIndex = getRandomNumber( quotes.length );
	return quotes[randomIndex];
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
document.getElementById('loadQuote').addEventListener("click", 
	function() {
		printQuote();
		timeoutClear();
		timeoutInit();
	}, false);
	
// Initialize on page load
printQuote();
timeoutInit();

