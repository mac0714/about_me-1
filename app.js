'use strict';

var username = prompt('Hi there! So what\'s your name, anyhow?');
console.log('The visitor\'s name is ' + username);

var start = confirm('Hello, ' + username + '! Would you like to play a game and see if you know me as well as I know myself? You don\'t, but it never hurts to try now, does it?');
if (start === true) {
  alert('All right, hold on to your pants! Here comes the first question...');
  console.log('The visitor has agreed to play the guessing game.');
} else {
  alert('Well, too bad! You\'re playing whether you want to or not!');
  console.log('The visitor has declined to play the guessing game, but they get to play it anyway.');
}

var correct = 0;

var whereFrom = prompt('Tell me, do you think I am originally from the Seattle area?');
if (whereFrom.toLowerCase() === 'yes' || whereFrom.toLowerCase() === 'y') {
  alert('Not even close! I\'m from Fresno, California. It is an awful place...');
  console.log('The visitor incorrectly guessed that I was from Seattle.');
} else if (whereFrom.toLowerCase() === 'no' || whereFrom.toLowerCase() === 'n') {
  alert('Ah, very astute! I\'m from Fresno, California. It is an awful place...');
  console.log('The visitor correctly guessed that I am not from Seattle.');
  correct += 1;
} else {
  alert('I\'m sorry, I didn\'t catch that. I only understand yes, no, y, or n!');
  console.log('The visitor entered an unrecognizable answer.');
}

var cats = confirm('Yes or no: Do you think I have entirely too many cats?');
if (cats === true) {
  alert('Well I guess technically it\'s all subjective, but I have four cats. That seems like too many cats to me. Do you want a cat?');
  console.log('The visitor correctly guessed that I have too many cats.');
  correct += 1;
} else {
  alert('I assure you that I have too many cats. It\'s actaully a bit of a funny story how I wound up with so many cats, but I\'m not going to tell you right now, because who has time to read an alert message that long, right? Please take a cat on your way out.');
  console.log('The visitor incorrectly guessed that I don\'t have too many cats. I have too many cats, I promise.');
}

var kids = prompt('Would you believe that I have FIVE kids?');
if (kids.toLowerCase() === 'yes' || kids.toLowerCase() === 'y') {
  alert('Jesus Christ, no. No, I don\'t have five kids. The cats are enough! I\'ve only got the one smart-ass daughter.');
  console.log('The visitor thinks I\'m a total breeder with five kids, but I am not.');
} else if (kids.toLowerCase() === 'no' || kids.toLowerCase() === 'n') {
  alert('Good, because I\'m lying to you. You are quite the savvy truth... determiner... person... thing.');
  console.log('The visitor correctly guessed that I do not have five kids.');
  correct += 1;
} else {
  alert('I\'m sorry, I didn\'t catch that. I only understand yes, no, y, or n!');
  console.log('The visitor entered an unrecognizable answer.');
}

var transformers = confirm('Would you believe that I have collected every Transformer action figure released since 1999?');
if (transformers === true) {
  alert('Again, I have caught you in my web of lies.  Wow, you must think I\'m a total nerd loser who doesn\'t have, like, a kid and a mortgage or something. No, I stopped collecting in 2009...');
  console.log('The visitor thinks I have way more disposable income than I do and have spent it on little plastic robots for going on 20 years.');
} else {
  alert('That\'s because I haven\'t. That shit\'s expensive, yo.');
  console.log('The visitor correctly guessed that I have not collected every Transformer since 1999.');
  correct += 1;
}

var tattoo = prompt('That\'s not to say that I\'m still not a big fan of Transformers, even those terrible, terrible movies that Michael Bay keeps putting out. What if I were to tell you that I have a Decepticon insignia tattooed on my right shoulder, would you believe it?');
if (tattoo.toLowerCase() === 'yes' || tattoo.toLowerCase() === 'y') {
  alert('Fooled you again! It\'s actually on my LEFT shoulder...');
  console.log('The visitor guessed the wrong shoulder I have my tattoo on.');
} else if (tattoo.toLowerCase() === 'no' || tattoo.toLowerCase() === 'n') {
  alert('Good guess. I do indeed have no such tattoo on my right shoulder. It\'s on my left.');
  console.log('The visitor guessed that I don\'t have a tattoo on my right shoulder. Close enough for jazz.');
  correct += 1;
} else {
  alert('I\'m sorry, I didn\'t catch that. I only understand yes, no, y, or n!');
  console.log('The visitor entered an unrecognizable answer.');
}

alert('BONUS ROUND!');

var randomNumber = Math.round(Math.random() * 10);
console.log('The script has picked a random number of ' + randomNumber);

for (var i = 1; i < 5; i++) {
  var num = prompt('I\'m thinking of a number between 0 and 10, can you guess what it is?');
  var numberGuess = parseInt(num);
  if (numberGuess === randomNumber) {
    alert('Wow, you got it spot on! Kudos to you, maybe you ought to go out and buy yourself some lotto tickets.');
    console.log('The visitor guessed the random number correctly at ' + numberGuess);
    correct += 1;
    break;
  } else if (numberGuess < randomNumber) {
    alert('Nope. Higher!');
    console.log('The visitor guessed less than the random number at ' + numberGuess);
  } else if (numberGuess > randomNumber) {
    alert('Nope. Lower!');
    console.log('The visitor guessed higher than the random number at ' + numberGuess);
  } else {
    alert('I\'m sorry, I didn\'t catch that. And you wasted a guess on it. Bummer!');
    console.log('The visitor entered a value the script didn\'t recognize.');
  }
  if (i === 4) {
    alert('Look\'s like you couldn\'t guess within the limit! Better luck next time.');
    console.log('The visitor wasn\'t able to guess within the allowed turns');
  }
}

alert('Now it\'s time to get serious...');
alert('DOUBLE BONUS ROUND!');

var myArray = ['Fight Club', 'The Crow', 'Children of Men', 'Dark City', 'Thank You For Smoking', 'The Dark Knight'];

for (var i = 1; i < 7; i ++) {
  var movie = prompt('See if you can guess one of my favorite movies! Here\'s a freebie: Transformers isn\'t on the list.');
  if (myArray.includes(movie)) {
    alert('Wow, that\'s a surprisingly good guess. Color me amazed that you could pick ' + movie + ' from all of cinimeatic history as one of my favorites. Hats off to you.');
    console.log('The visitor correctly guessed that ' + movie + ' is one of my favorite movies.');
    correct += 1;
    break;
  } else if (i < 6) {
    alert('Nope. Try again. You have ' + (6 - i) + ' chances left!');
  } else {
    alert('Look\'s like you couldn\'t guess within six tries! Better luck next time.');
    console.log('The visitor wasn\'t able to guess within the allowed turns');
  }
}

if (correct === 7) {
  alert('Congrats, ' + username + ' you got every question correct! ' + correct + ' out of 7! That\'s kind of scary.  Are... are you me?');
  console.log('The visitor got every question correct.');
} else if (correct > 3) {
  alert('Congrats, ' + username + ' you got most of them correct with ' + correct + ' out of 7! You know me so well. Kind of creepy.');
  console.log('The visitor got most of the questions correct, ' + correct + ' out of 7.');
} else {
  alert('Aw, too bad, ' + username + '. You only got ' + correct + ' out of 7. Better luck next time!');
}
