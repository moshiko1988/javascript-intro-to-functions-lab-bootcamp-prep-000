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

function sayHiToGrandma(string){
  if (string.toLowerCase() === string) {
      return "I can't hear you!";
  } if (string.toUpperCase() === string ) {
        return "YES INDEED!";
    }if (string === "I love you, Grandma.") {
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
