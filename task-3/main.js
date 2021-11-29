// Task 3
let selectCat = document.querySelector("#cat-here");
console.log(selectCat);

// 👉 Using fetch, get a random cat image URL using the following API: https://api.thecatapi.com/v1/images/search

let randomCat = fetch("https://api.thecatapi.com/v1/images/search").then(
  (response) => console.log(response.json())
);

// 👉 Once you have retrieved your image URL, display the image on the page using the img element provided. A different picture should be displayed every time you reload the page.

// 👉 Create a button element. Add an event listener to the button so that, when you click the button, a new image is displayed.
