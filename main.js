const container = document.querySelector(".container");
for (let i = 0; i < 16 ** 2; i++) {
  const square = document.createElement("div");
  square.classList.toggle("square");
  square.style.width = `${100 / 16}%`;
  square.style.height = `${100 / 16}%`;
  square.style.backgroundColor = "aqua";
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "aqua";
  });
  container.appendChild(square);
}

function drawSquares(sideLength) {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.classList.toggle("container");
  body.appendChild(container);
  for (let i = 0; i < sideLength * sideLength; i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "red";
    });
    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "aqua";
    });
    container.appendChild(square);
  }
}

const btn = document.querySelector("button");
const body = document.querySelector("body");
btn.addEventListener("click", () => {
  let dimensions = prompt("How many squares on each side?");
  if (dimensions > 100) {
    alert("Input must be a number less than 100");
  } else {
    body.removeChild(container);
    drawSquares(dimensions);
  }
});
