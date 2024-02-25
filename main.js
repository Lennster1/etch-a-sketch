for (let i = 0; i < 256; i++) {
  const container = document.querySelector(".container");
  const square = document.createElement("div");
  square.classList.toggle("square");
  container.appendChild(square);
}
