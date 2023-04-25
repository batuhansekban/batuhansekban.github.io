const btn = document.querySelector(".btn");
const boxes = document.querySelectorAll(".container__notifications__box");
const count = document.querySelector(".container__nav--notifs-count");
const unseen = document.querySelectorAll(".unseen");
const unread = document.querySelector(".unread-btn");

btn.addEventListener("click", function () {
  boxes.forEach(function (e) {
    e.classList.remove("unseen");
  });
});

btn.addEventListener("click", function () {
  count.innerHTML = "0";
});

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    boxes[i].classList.remove("unseen");
    count.innerHTML--;

    if (count.innerHTML == -1) {
      count.innerHTML++;
    }
  });
}

unread.addEventListener("click", function () {
  boxes.forEach(function (e) {
    e.classList.add("unseen");
    count.innerHTML = boxes.length;
  });
});
