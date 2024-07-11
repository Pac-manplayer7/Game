let score = 0;
const scoreElement = document.getElementById('score');
const target = document.getElementById('target');

function getRandomPosition() {
  const x = Math.floor(Math.random() * (window.innerWidth - 50));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  return { x, y };
}

function moveTarget() {
  const { x, y } = getRandomPosition();
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

target.addEventListener('click', () => {
  score++;
  scoreElement.textContent = `Score: ${score}`;
  moveTarget();
});

document.addEventListener('DOMContentLoaded', () => {
  moveTarget();
});
