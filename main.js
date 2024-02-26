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
  const container = document.querySelector(".container");
  body.removeChild(container);
  const container_ = document.createElement("div");
  container_.classList.toggle("container");
  body.appendChild(container_);
  for (let i = 0; i < sideLength * sideLength; i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    square.style.width = `${100 / sideLength}%`;
    square.style.height = `${100 / sideLength}%`;
    square.style.backgroundColor = "aqua";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "red";
    });
    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "aqua";
    });
    container_.appendChild(square);
  }
}

const btn = document.querySelector("button");
const body = document.querySelector("body");
btn.addEventListener("click", () => {
  let dimensions = prompt("How many squares on each side?");
  let dimensionsNumber = Number(dimensions);
  if (dimensionsNumber > 100) {
    alert("Input must be a number less than 100 (100x100 max)");
  } else if (Number.isNaN(dimensionsNumber)) {
    alert("Input must be a number");
  } else {
    drawSquares(dimensions);
  }
});
