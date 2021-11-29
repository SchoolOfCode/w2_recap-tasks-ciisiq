// Task 3
const selectCat = document.querySelector("#cat-here");
const selectButtom = document.querySelector("#new-cat");

// 👉 Using fetch, get a random cat image URL using the following API: https://api.thecatapi.com/v1/images/search

async function getRandomImgUrl() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  getImage(data[0].url);
  return data[0].url;
}

// 👉 Once you have retrieved your image URL, display the image on the page using the img element provided. A different picture should be displayed every time you reload the page.

function getImage(url) {
  let NewImage = (document.getElementById("cat-here").src = url);
  return NewImage;
}

// 👉 Create a button element. Add an event listener to the button so that, when you click the button, a new image is displayed.

// selectButtom.addEventListener("click", getImage);
selectButtom.addEventListener("click", getRandomImgUrl);
