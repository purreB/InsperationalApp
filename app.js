// Create link button to js
const $ = document.querySelector.bind(document);
const adviceButton = $("#advicebtn");
let h1 = $("#h1");

const fetchData = async () => {
  const res = await fetch(`https://api.adviceslip.com/advice`);
  const result = await res.json();
  h1.innerHTML = result.slip.advice;
};

// Click button to fetchData with random generated number as id
adviceButton.onclick = () => {
  console.log(fetchData());
};
