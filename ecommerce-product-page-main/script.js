const icerik = document.querySelector(".navbar__cart--icerigi");
const mainPhoto = document.querySelector(".main__photo");
const sidePhotos = document.querySelectorAll(
  ".left-side__down--photos-thumbnails"
);
const addToCart = document.querySelector(".right-side__cart--add-button");
const photo1 = document.querySelector(".photo--1");
const photo2 = document.querySelector(".photo--2");
const photo3 = document.querySelector(".photo--3");
const photo4 = document.querySelector(".photo--4");
const modalphoto1 = document.querySelector(".modal--photo--1");
const modalphoto2 = document.querySelector(".modal--photo--2");
const modalphoto3 = document.querySelector(".modal--photo--3");
const modalphoto4 = document.querySelector(".modal--photo--4");
const modal = document.querySelector(".modal");
const modalMainPhoto = document.querySelector(".modal--main__photo");
const closeButton = document.querySelector(".close");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const photo = document.querySelector("#photo");
const minus = document.querySelector(".right-side__cart--prev-button");
const plus = document.querySelector(".right-side__cart--next-button");
const item = document.querySelector(".item--count");
const price = document.querySelector(".price");
const cart = document.querySelector(".navbar__cart");
const cartText = document.querySelector(".navbar__cart--icerigi");
const hiddenCart = document.querySelector(".hidden-nav");
const empty = document.querySelector(".navbar__cart--icerigi");
const count = document.querySelector(".count");
const calculatedPrice = document.querySelector(".calculated_price");
const calcPrice = document.querySelectorAll(".calc");
const notification = document.querySelector(".notification");
const cartButton = document.querySelector(".cart__button");
const deleteButton = document.querySelector(".delete");
const navbarMobile = document.querySelector(".navbar__mobile");
const mobileCloseButton = document.querySelector(".navbar__mobile--close");
const hamburger = document.querySelector(".navbar__hamburger_menu");
photosIndex = 0;

photoChanger = function () {
  photo1.addEventListener("mouseover", function () {
    mainPhoto.src = "./images/image-product-1.jpg";
    modalMainPhoto.src = "./images/image-product-1.jpg";
    photosIndex = 0;
  });
  photo2.addEventListener("mouseover", function () {
    mainPhoto.src = "./images/image-product-2.jpg";
    modalMainPhoto.src = "./images/image-product-2.jpg";
    photosIndex = 1;
  });
  photo3.addEventListener("mouseover", function () {
    mainPhoto.src = "./images/image-product-3.jpg";
    modalMainPhoto.src = "./images/image-product-3.jpg";
    photosIndex = 2;
  });
  photo4.addEventListener("mouseover", function () {
    mainPhoto.src = "./images/image-product-4.jpg";
    modalMainPhoto.src = "./images/image-product-4.jpg";
    photosIndex = 3;
  });
};

photoChangerModal = function () {
  modalphoto1.addEventListener("click", function () {
    photo.src = "./images/image-product-1.jpg";
    photosIndex = 0;
  });
  modalphoto2.addEventListener("click", function () {
    photo.src = "./images/image-product-2.jpg";
    photosIndex = 1;
  });
  modalphoto3.addEventListener("click", function () {
    photo.src = "./images/image-product-3.jpg";
    photosIndex = 2;
  });
  modalphoto4.addEventListener("click", function () {
    photo.src = "./images/image-product-4.jpg";
    photosIndex = 3;
  });
};

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

mainPhoto.addEventListener("click", function () {
  modal.style.display = "block";

  photoChangerModal();
});

let photos = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

prevButton.addEventListener("click", function () {
  if (photosIndex > 0) {
    photosIndex--;
    photo.src = photos[photosIndex];
  } else {
    photosIndex = photos.length - 1;
    photo.src = photos[photosIndex];
  }
});

nextButton.addEventListener("click", function () {
  if (photosIndex < photos.length - 1) {
    photosIndex++;
    photo.src = photos[photosIndex];
  } else {
    photosIndex = 0;
    photo.src = photos[photosIndex];
  }
});

plus.addEventListener("click", function () {
  if (item.textContent < 9) {
    item.textContent++;
  }
});
minus.addEventListener("click", function () {
  item.textContent--;

  if (item.textContent < 0) {
    item.textContent++;
  }
});
let replacedPrice = price.textContent.replace("$", "");
const addcart = function () {
  addToCart.addEventListener("click", function (e) {
    let actualPrice = item.textContent * replacedPrice;

    cart.style.display = "block";

    hiddenCart.style.display = "block";
    empty.style.display = "none";
    if (item.textContent == 0) {
      hiddenCart.style.display = "none";
      empty.style.display = "block";
    }
  });
};
calcPrice.forEach((e) => {
  e.addEventListener("click", function () {
    if (item.textContent > 0) {
      count.textContent = "x" + item.textContent;
      calculatedPrice.textContent = `$` + item.textContent * replacedPrice;
      notification.textContent = item.textContent;
    } else {
      count.textContent = "";
      notification.textContent = "";
      calculatedPrice.textContent = "";
    }
  });
});

cartButton.addEventListener("click", function () {
  if (cart.style.display == "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
  }
});

deleteButton.addEventListener("click", function () {
  hiddenCart.style.display = "none";
  empty.style.display = "block";
  notification.textContent = 0;
});

hamburger.addEventListener("click", function () {
  navbarMobile.style.display = "flex";
});

mobileCloseButton.addEventListener("click", function () {
  navbarMobile.style.display = "none";
});

addcart();
photoChanger();
photoChangerModal();
