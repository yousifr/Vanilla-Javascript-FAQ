open1 = document.querySelector(".open1");
open2 = document.querySelector(".open2");
open3 = document.querySelector(".open3");
answer1 = document.getElementById("answer1");
answer2 = document.getElementById("answer2");
answer3 = document.getElementById("answer3");

open1.addEventListener("click", function () {
  if (answer1.style.display === "none") {
    answer1.style.display = "block";
  } else {
    answer1.style.display = "none";
  }
});

open2.addEventListener("click", function () {
  if (answer2.style.display === "none") {
    answer2.style.display = "block";
  } else {
    answer2.style.display = "none";
  }
});

open3.addEventListener("click", function () {
  if (answer3.style.display === "none") {
    answer3.style.display = "block";
  } else {
    answer3.style.display = "none";
  }
});
