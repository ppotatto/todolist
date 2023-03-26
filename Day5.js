const body = document.querySelector("body");
const h1 = document.querySelector("h1");

h1.style.color = "black";

function handleWindowResize() {
  const inner = window.innerWidth;
  if (inner < 600) {
    body.style.backgroundColor = "#2E8CD5";
  } else if (inner > 600 && inner < 800) {
    body.style.backgroundColor = "#904ead";
  } else if (inner >= 800) {
    body.style.backgroundColor = "red";
  }
}
window.addEventListener("resize", handleWindowResize);
