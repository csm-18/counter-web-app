function incrementCounter() {
  let value = document.getElementById("counter-value").innerText;
  value = parseInt(value) + 1;
  document.getElementById("counter-value").innerText = value;
}

function decrementCounter() {
  let value = document.getElementById("counter-value").innerText;
  if (value > 0) {
    value = parseInt(value) - 1;
    document.getElementById("counter-value").innerText = value;
  }
}

function resetCounter() {
  document.getElementById("counter-value").innerText = 0;
}
