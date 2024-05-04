console.log("this is linked");
const mark = document.getElementById("mark");
mark.addEventListener("click", () => {
  let arr = Array.from(document.getElementsByTagName("li"));
  arr.forEach((item) => {
    item.classList.remove("new");
  });
  let dot = Array.from(document.getElementsByClassName("dot"));
  // dot.style.background = "#fff";
  dot.forEach((item) => {
    item.classList.remove("dot");
  });
  const box = document.getElementById("notification-box");
  box.innerHTML = "0";
});
