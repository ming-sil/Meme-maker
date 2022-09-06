const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
  "#fffffc",
  "#ffc6ff",
  "#bdb2ff",
  "#a0c4ff",
  "#9bf6ff",
  "#caffbf",
  "#fdffb6",
  "#ffd6a5",
  "#ffadad",
];

const onClick = (e) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
};

canvas.addEventListener("mousemove", onClick);
