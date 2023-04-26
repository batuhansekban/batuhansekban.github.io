const btn = document.querySelector(".btn");
const boxes = document.querySelectorAll(".container__notifications__box");
const count = document.querySelector(".container__nav--notifs-count");
const unseen = document.querySelectorAll(".unseen");
const unread = document.querySelector(".unread-btn");

btn.addEventListener("click", function () {
  count.innerHTML = "0";
  boxes.forEach(function (e, i) {
    boxes[i].classList.remove("unseen");
  });
});

// foreach ile
boxes.forEach((e, i) => {
  boxes[i].addEventListener("click", function () {
    if (boxes[i].classList.contains("unseen")) {
      count.innerHTML--;
    }
    boxes[i].classList.remove("unseen");
  });
});

//////////////////

// for dongusu ile

// for (let i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener("click", function () {
//     boxes[i].classList.remove("unseen");
//     count.innerHTML--;

//     if (count.innerHTML == -1) {
//       count.innerHTML++;
//     }
//   });
// }

unread.addEventListener("click", function () {
  boxes.forEach(function (e) {
    e.classList.add("unseen");
    count.innerHTML = boxes.length;
  });
});
