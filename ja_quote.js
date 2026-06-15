"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Case Problem 2

   Random Jane Austen Quote Generator
   Author: Vanessa Dela Cruz
   Date: March 25, 2024
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/
var randomQ = randomInt(0, 9); //generate random numbers from 0 to 9
var quoteElem = document.getElementsByTagName("quote")[0]; //retrieve the first element in "quote" tag name
quoteElem.innerHTML = getQuote(randomQ); //displays the quote that corresponds to the randomQ as a text from HTML code

function randomInt(lowest, size)
{
   var myRandom = Math.random(); //store random number from 0 to 9
   myRandom = myRandom * size; //multiplies random number to size (10 = range from 0 to 9)
   myRandom = myRandom + lowest; //adds random number to lowest possible number
   myRandom = Math.floor(myRandom); //drops the decimal point value
   return myRandom; //returns the number
}

function getQuote(n) {
   var quotes = [
   "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
   "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
   "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
   "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
   "Life seems but a quick succession of busy nothings.",
   "Our scars make us know that our past was for real.",
   "I cannot speak well enough to be unintelligible.",
   "One cannot be always laughing at a man without now and then stumbling on something witty.",
   "Men were put into the world to teach women the law of compromise.",
   "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
   ];
   
   return quotes[n];
}