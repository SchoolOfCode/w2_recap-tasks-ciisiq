const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson",
];

// Task 1
// 👉 Write a function called makeLegend, which takes in a name (string) as its only argument. The function should return a new string which includes the name plus the words 'is now a legend.'. For example, if the name given was 'Chris', the function would return the string 'Chris is now a legend.'.

let legend = " is now a legend.";

function makeLegend(string) {
  return `${string}` + legend;
}

console.log(makeLegend("Chris"));

// 👉 Using an array method and the makeLegend function, create a new array which includes 'is now a legend' for each item. Save this new array to the variable legendaryCelebs.

let legendaryCelebs = celebs.map((celeb) => makeLegend(celeb));

console.log(legendaryCelebs);

// 👉 Use an array method to produce a new array of all of the celebrity names which start with a vowel and store in a new variable called vowelCelebs.

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const vowelCelebs = celebs.filter(
  (vowelCeleb) => /^[AEIOUaeiou]/.test(vowelCeleb) //Using Regex

  // for (let vowel = 0; vowel < vowels.length; vowel++) {
  //   const element = vowels[vowel];
  //   if (element === vowelCeleb.charAt(0)) {
  //     return true;
  //   }
  // }
  // return false;
);

console.log(vowelCelebs);
