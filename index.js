function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log('hello'.toUpperCase())
}

function logWhisper(string){
  console.log('hello'.toLowerCase());
}

var lowercase = 'hello!'
function sayHiToGrandma(string){

  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!";
  }
}

var uppercase = "HELLO!"
function sayHiToGrandma(string){

  if (uppercase.toUpperCase() === uppercase ) {
    return "YES INDEED!";
  }
}
