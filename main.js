let rainbowMode = false;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const container = document.querySelector(".container");
for (let i = 0; i < 16 ** 2; i++) {
  const square = document.createElement("div");
  square.classList.toggle("square");
  square.style.width = `${100 / 16}%`;
  square.style.height = `${100 / 16}%`;
  square.style.backgroundColor = "#cc9999";
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "aqua";
  });
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "#cc9999";
  });
  container.appendChild(square);
}

function drawSquares(sideLength) {
  if (rainbowMode = true) {
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
      square.style.backgroundColor = "#cc9999";
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = `rgb(${getRandomInt(
          0,
          255
        )}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
        console.log(square.style.backgroundColor);
      });
      container_.appendChild(square);
    }
  } else {
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
      square.style.backgroundColor = "#cc9999";
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "aqua";
      });
      square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "#cc9999";
      });
      container_.appendChild(square);
    }
  }
}

const dimensionsBtn = document.querySelector("#dimensions");
const rainbowBtn = document.querySelector("#rainbow");
const body = document.querySelector("body");
dimensionsBtn.addEventListener("click", () => {
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
rainbowBtn.addEventListener("click", () => {
  rainbowMode = true
  drawSquares(16)
});
