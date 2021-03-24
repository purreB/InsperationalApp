// Create a button and h1
const $ = document.querySelector.bind(document);
const adviceButton = $("#advicebtn");
let h1 = $("#h1");
let inputField = $("#input-field");
const form = $("#form");
let userSearch = inputField.value;

// Fetch random advice.
const fetchData = async () => {
  const res = await fetch(`https://api.adviceslip.com/advice`);
  const result = await res.json();

  // Display the advice retrived as h1.
  h1.innerHTML = result.slip.advice;
};

// Fetch random advice depending on user input
const fetchDataSearch = async (id) => {
  const res = await fetch(`https://api.adviceslip.com/advice/search/${id}`);
  console.log(res);
  const result = await res.json();
  h1.innerHTML = result.slips[0].advice;
};

// Click button to fetchData with random generated number as id
adviceButton.onclick = () => {
  fetchData();
};

form.onsubmit = (e) => {
  e.preventDefault();
  fetchDataSearch(userSearch);
};
