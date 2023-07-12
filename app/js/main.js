const starButtons = document.querySelectorAll(".radioButton");
const thankYouStars = document.getElementById("starNumber");
let starN;
starButtons.forEach((sb) => {
  // console.log(sb);
  sb.addEventListener("click", (e) => {
    starN = sb.value;
    console.log(starN);
  });
});
let ratingForm = document.getElementById("ratingForm");
ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  thankYouStars.innerText = starN;
  document.getElementById("ratingState").style.opacity = "0";
  document.getElementById("thankYouState").style.opacity = "1";
  document.getElementById("thankYouState").style.zIndex = "2";
});
