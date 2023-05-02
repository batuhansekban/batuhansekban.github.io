const allBtn = document.querySelectorAll(".btn");
const text = document.querySelector(".input__text");
const toplama = document.querySelector(".plus");
const cikarma = document.querySelector(".minus");
const bolme = document.querySelector(".divide");
const carpma = document.querySelector(".multi");
const esittir = document.querySelector(".equal");
const nokta = document.querySelector(".dot");
const silme = document.querySelector(".del");
const btn = document.querySelectorAll(".sayi");
const reset = document.querySelector(".reset");
const gizli = document.querySelector(".gizli");
const islem = document.querySelectorAll(".islem");
const sembol = document.querySelector(".symbol");
const native = document.querySelector(".themechanger__btn--native");
const dark = document.querySelector(".themechanger__btn--dark");
const light = document.querySelector(".themechanger__btn--light");
const buttons = document.querySelectorAll(".buttons");
const calc = document.querySelector(".calc");
const themechangers = document.querySelectorAll(".themechanger__btn");
let arr = [];
let arrOrj = [];
let toplami = [];
let words = [];
let lastbutton = [];

const getButton = function () {
  islem.forEach((e) => {
    e.addEventListener("click", function (e) {
      lastbutton = e.target;
      sembol.textContent = lastbutton.textContent;
      console.log(lastbutton);
    });
  });
};

btn.forEach((e) =>
  e.addEventListener("click", function (value) {
    {
      arr.push(value.target.textContent);
      arrOrj.push(arr.join(""));
      text.value = arrOrj.slice(-1);
    }

    console.log(words);
    console.log(arrOrj);
    console.log(arrOrj.slice(-1));
  })
);

const clear = function () {
  arr = [];
  arrOrj = [];
};

const sum = function (e) {
  toplama.addEventListener("click", function (e) {
    gizli.textContent = Number(gizli.textContent) + Number(text.value);
    clear();
    console.log(arr);

    if (text.value !== 0) {
      text.value = 0;
    }
  });
};

const minus = function (e) {
  cikarma.addEventListener("click", function (e) {
    let cikti = Number(text.value);

    if (gizli.textContent == 0) {
      gizli.textContent = cikti;
    } else {
      gizli.textContent = Number(gizli.textContent) - Number(cikti);
    }

    if (text.value !== 0) {
      text.value = 0;
    }

    console.log(cikti);
    clear();
    console.log(arr);
    console.log(tamkesir);
  });
};

const divide = function (e) {
  bolme.addEventListener("click", function (e) {
    let cikti = Number(text.value);

    if (gizli.textContent == 0) {
      gizli.textContent = cikti;
    } else {
      gizli.textContent = Number(gizli.textContent) / Number(cikti);
    }

    if (text.value !== 0) {
      text.value = 0;
    }

    console.log(cikti);
    clear();
    console.log(arr);
    console.log(tamkesir);
  });
};

const multiply = function (e) {
  carpma.addEventListener("click", function (e) {
    let cikti = Number(text.value);

    if (gizli.textContent == 0) {
      gizli.textContent = cikti;
    } else {
      gizli.textContent = Number(gizli.textContent) * Number(cikti);
    }

    if (text.value !== 0) {
      text.value = 0;
    }

    console.log(cikti);
    clear();
    console.log(arr);
    console.log(tamkesir);
  });
};

const restart = function (e) {
  reset.addEventListener("click", function () {
    gizli.textContent = 0;
    text.value = 0;
    arr = [];
    arrOrj = [];
  });
};

const del = function (e) {
  silme.addEventListener("click", function () {
    text.value = text.value.substring(0, text.value.length - 1);
    let arrOrjDel = [arrOrj.pop().slice(0, -1)];
    arr = arrOrjDel;
  });
};
const equal = function (e) {
  esittir.addEventListener("click", function () {
    if (lastbutton.textContent == "+") {
      gizli.textContent = Number(gizli.textContent) + Number(text.value);

      text.value = 0;
      clear();
    }

    if (lastbutton.textContent == "-") {
      gizli.textContent = Number(gizli.textContent) - Number(text.value);

      text.value = 0;
      clear();
    }

    if (lastbutton.textContent == "/") {
      gizli.textContent = Number(gizli.textContent) / Number(text.value);

      text.value = 0;
      clear();
    }

    if (lastbutton.textContent == "*") {
      gizli.textContent = Number(gizli.textContent) * Number(text.value);

      text.value = 0;
      clear();
    }
  });
};

let body = document.body;

native.addEventListener("click", function () {
  body.style.backgroundColor = "hsl(222, 26%, 31%)";
  text.style.backgroundColor = "hsl(224, 36%, 15%)";
  text.style.color = "white";
  gizli.style.color = "white";
  calc.style.color = "white";
  esittir.style.backgroundColor = "hsl(6, 63%, 50%)";
  esittir.style.boxShadow = "0.4px 3px hsl(6, 70%, 34%)";
  reset.style.backgroundColor = " hsl(225, 21%, 49%)";
  reset.style.boxShadow = "0.4px 3px hsl(224, 28%, 35%)";
  silme.style.backgroundColor = " hsl(225, 21%, 49%)";
  silme.style.boxShadow = "0.4px 3px hsl(224, 28%, 35%)";

  btn.forEach(
    (e) => (
      (e.style.backgroundColor = "hsl(30, 25%, 89%)"), (e.style.color = "black")
    )
  );
  islem.forEach(
    (e) => (
      (e.style.backgroundColor = "hsl(30, 25%, 89%"), (e.style.color = "black")
    )
  );
});

dark.addEventListener("click", function () {
  body.style.backgroundColor = "hsl(268, 75%, 9%)";
  text.style.backgroundColor = "hsl(268, 71%, 12%)";
  text.style.color = "hsl(52, 100%, 62%)";
  gizli.style.color = "hsl(52, 100%, 62%)";
  calc.style.color = "hsl(52, 100%, 62%)";
  esittir.style.backgroundColor = "hsl(176, 100%, 44%)";
  esittir.style.boxShadow = "0.4px 3px hsl(177, 92%, 70%)";
  reset.style.backgroundColor = " hsl(281, 89%, 26%)";
  reset.style.boxShadow = "0.4px 3px hsl(290, 70%, 36%)";
  silme.style.backgroundColor = " hsl(281, 89%, 26%)";
  silme.style.boxShadow = "0.4px 3px hsl(285, 91%, 52%)";

  btn.forEach(
    (e) => (
      (e.style.backgroundColor = "hsl(268, 47%, 21%)"),
      (e.style.color = "hsl(52, 100%, 62%)")
    )
  );
  islem.forEach(
    (e) => (
      (e.style.backgroundColor = "hsl(268, 47%, 21%)"),
      (e.style.color = "hsl(52, 100%, 62%)")
    )
  );
});

sum();
minus();
divide();
multiply();
restart();
equal();
del();
getButton();

// text contente girmiş olduğum sayı üstündeki gizli sayı deposuna gitti.
// sonra tekrar yazdığım sayı oraya başında + olarak gitmeli
