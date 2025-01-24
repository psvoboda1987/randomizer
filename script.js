function roll(e) {
  const min = 1;
  const max = e.dataset.dice;
  const result = min + Math.floor(Math.random() * (max - min + 1));
  document.getElementById("result").innerText = result;
}

function coinflip(e) {
  document.getElementById("result").innerText = Math.random() >= 0.5 ? "heads" : "tails";
}
