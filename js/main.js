$(document).ready(function(){
  
  $('#clickMe').click(function(){
    
    var x = numberGenerator();
    
    $('#quoteText').text(quotes[x].quote);
    $('#nameText').text(quotes[x].name);
    $('#yearsText').text(quotes[x].dates);
    $('.blockquote').fadeIn();
    
    var twt = quotes[x].quote + " " + quotes[x].name;
    
    $('#tweet').attr("href", "https://twitter.com/intent/tweet?text=" + twt);
    
    //Code provided by twitter api 
    window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
   
  });
  
  //Sends random number to quote generator
  function numberGenerator() {
    return Math.floor(Math.random() * 10);
  }
  
 //Array of quote objects
var quotes = [
{"quote": "Glory is fleeting, but obscurity is forever.",
 "name": "Napoleon Bonaparte",
 "dates": "1769-1821"
},
  
 {"quote": "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.",
  "name":  "Bertrand Russell",
  "dates": "1872-1970"
},
  
 {
   "quote": "Victory goes to the player who makes the next-to-last mistake.",
   "name": "Chessmaster Savielly Grigorievitch Tartakower",
   "dates": "1887-1956"
 },
  
  {
    "quote": "If a man does his best, what else is there?",
    "name": "General George S. Patton",
    "dates": "1885-1945"
 },
  
  {
    "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
    "name": "Ayn Rand",
    "dates": "1905-1982"
  },
  
  {
    "quote": "When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion.",
    "name": "Robert Pirsig",
    "dates": "1948-"
  },
  
  {
    "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
    "name": "A. J. Liebling",
    "dates": "1904-1963"
  },
    
   {
    "quote": "People demand freedom of speech to make up for the freedom of thought which they avoid.",
    "name": "Soren Aabye Kierkegaard",
    "dates": "1813-1855"
  },
  
  {
    "quote": "Give me chastity and continence, but not yet.",
    "name": "Saint Augustine",
    "dates": "354-430"
  },
    
    {
    "quote": "Not everything that can be counted counts, and not everything that counts can be counted.",
    "name": "Albert Einstein",
    "dates": "1879-1955"
  }


]

});