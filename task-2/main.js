// Task 2

// 👉 In the task-2 index.html, there is a p tag that contains a counter. Using setInterval, have the counter increment once every second when the page is loaded.

const counter = document.querySelector("p");

let startInterval = setInterval(function () {
  let newValue = Number(counter.textContent) + 1; // information inside of paragraph
  counter.textContent = newValue;

  // 👉 Stop the above interval from incrementing after 12 seconds have passed using the clearInterval function
  if (newValue >= 12) {
    clearInterval(startInterval);
  }
}, 1000);
