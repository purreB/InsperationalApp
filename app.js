// Link the HTML, buttons and input-field to the JS
const $ = document.querySelector.bind(document);
const adviceButton = $("#advicebtn");
let h1 = $("#h1");
let inputField = $("#input-field");
let userSearch = inputField.value.toLowerCase();
const resetButton = $("#resetbtn");

// Fetch random advice.
const fetchData = async () => {
  const res = await fetch(`https://api.adviceslip.com/advice`);
  const result = await res.json();

  // Display the advice retrived as h1.
  h1.innerHTML = result.slip.advice;
};

// Fetch random advice depending on user input
let fetchDataSearch = async (id) => {
  let res = await fetch(`https://api.adviceslip.com/advice/search/${id}`);
  console.log(res);
  let result = await res.json();
  h1.innerHTML = result.slips[0].advice;
};

// Click button to fetchData with random generated number as id
adviceButton.onclick = () => {
  fetchData();
};

// Search functionality
inputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    // Do work
    fetchDataSearch(userSearch);
  }
});

// Reset button
resetButton.onclick = () => {
  window.location.reload();
};
