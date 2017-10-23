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
var uppercase = "HELLO!"

function sayHiToGrandma(string){
  if (lowercase.toLowerCase() === lowercase) {
      return "I can't hear you!";
  } else if (uppercase.toUpperCase() === uppercase ) {
        return "YES INDEED!";
    }else {
      return "I love you, too."
    }
}

// function sayHiToGrandma(string){
//   console.log(`${string}`);
//     if (lowercase.toLowerCase() === lowercase) {
//         return "I can't hear you!";
//     } else if (uppercase.toUpperCase() === uppercase ) {
//           return "YES INDEED!";
//       }else {
//         return "I love you, too."
//       }
// }
//
// sayHiToGrandma(uppercase);
// sayHiToGrandma(lowercase);
// sayHiToGrandma(other);
