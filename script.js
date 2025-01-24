function roll(e) {
  const min = 1;
  const max = e.dataset.dice;
  document.getElementById("result").innerText = getRandomNumber(min, max);
}

function getRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function coinflip(e) {
  document.getElementById("result").innerText = getRandomNumber(1, 1000) % 2 === 0 ? "heads" : "tails";
}
