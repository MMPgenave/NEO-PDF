const scales_bar = document.querySelectorAll(".scaled_ruler div");
const green_bar = document.getElementById("green_bar");
for (let i = 0; i < scales_bar.length; i++) {
  if (scales_bar[i].dataset.active === "t") {
    console.log(scales_bar[i].offsetLeft);
    green_bar.style.left = scales_bar[i].offsetLeft - 2 + "px";
  }
}
