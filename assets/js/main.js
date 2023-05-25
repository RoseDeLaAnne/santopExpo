document.addEventListener("DOMContentLoaded", () => {
    const goodsInTheShowroom = document.getElementById("cards_goods");

    let cardSliderItemActive = 0;

    const cards = [];

    // const cards = [
    //     {
    //         id: 0,
    //         inTheShowroom: true,
    //         imagesUrls: [
    //             {
    //                 id: 0,
    //                 url: "assets/images/card-1.jpg",
    //             },
    //             {
    //                 id: 1,
    //                 url: "assets/images/card-2.jpg",
    //             },
    //             {
    //                 id: 2,
    //                 url: "assets/images/card-3.jpg",
    //             },
    //             {
    //                 id: 3,
    //                 url: "assets/images/card-4.jpg",
    //             },
    //         ],
    //         name: "Смеситель для раковины Grohe Eurosmart Cosmopolitan",
    //         inStock: true,
    //         price: 4590,
    //     },
    //     {
    //         id: 1,
    //         inTheShowroom: true,
    //         imagesUrls: [
    //             {
    //                 id: 0,
    //                 url: "assets/images/card-1.jpg",
    //             },
    //             {
    //                 id: 1,
    //                 url: "assets/images/card-2.jpg",
    //             },
    //             {
    //                 id: 2,
    //                 url: "assets/images/card-3.jpg",
    //             },
    //             {
    //                 id: 3,
    //                 url: "assets/images/card-4.jpg",
    //             },
    //         ],
    //         name: "Смеситель для раковины Grohe Eurosmart Cosmopolitan",
    //         inStock: true,
    //         price: 4590,
    //     },
    //     {
    //         id: 2,
    //         inTheShowroom: true,
    //         imagesUrls: [
    //             {
    //                 id: 0,
    //                 url: "assets/images/card-1.jpg",
    //             },
    //             {
    //                 id: 1,
    //                 url: "assets/images/card-2.jpg",
    //             },
    //             {
    //                 id: 2,
    //                 url: "assets/images/card-3.jpg",
    //             },
    //             {
    //                 id: 3,
    //                 url: "assets/images/card-4.jpg",
    //             },
    //         ],
    //         name: "Смеситель для раковины Grohe Eurosmart Cosmopolitan",
    //         inStock: true,
    //         price: 4590,
    //     },
    //     {
    //         id: 3,
    //         inTheShowroom: true,
    //         imagesUrls: [
    //             {
    //                 id: 0,
    //                 url: "assets/images/card-1.jpg",
    //             },
    //             {
    //                 id: 1,
    //                 url: "assets/images/card-2.jpg",
    //             },
    //             {
    //                 id: 2,
    //                 url: "assets/images/card-3.jpg",
    //             },
    //             {
    //                 id: 3,
    //                 url: "assets/images/card-4.jpg",
    //             },
    //         ],
    //         name: "Смеситель для раковины Grohe Eurosmart Cosmopolitan",
    //         inStock: true,
    //         price: 4590,
    //     },
    //     {
    //         id: 4,
    //         inTheShowroom: true,
    //         imagesUrls: [
    //             {
    //                 id: 0,
    //                 url: "assets/images/card-1.jpg",
    //             },
    //             {
    //                 id: 1,
    //                 url: "assets/images/card-2.jpg",
    //             },
    //             {
    //                 id: 2,
    //                 url: "assets/images/card-3.jpg",
    //             },
    //             {
    //                 id: 3,
    //                 url: "assets/images/card-4.jpg",
    //             },
    //         ],
    //         name: "Смеситель для раковины Grohe Eurosmart Cosmopolitan",
    //         inStock: true,
    //         price: 4590,
    //     },
    //     {
    //         id: 5   ,
    //         inTheShowroom: true,
    //         imagesUrls: [
    //             {
    //                 id: 0,
    //                 url: "assets/images/card-1.jpg",
    //             },
    //             {
    //                 id: 1,
    //                 url: "assets/images/card-2.jpg",
    //             },
    //             {
    //                 id: 2,
    //                 url: "assets/images/card-3.jpg",
    //             },
    //             {
    //                 id: 3,
    //                 url: "assets/images/card-4.jpg",
    //             },
    //         ],
    //         name: "Смеситель для раковины Grohe Eurosmart Cosmopolitan",
    //         inStock: true,
    //         price: 4590,
    //     },
    // ];

    // let content = "";
    // for (let i = 0; i < cards.length; i++) {
    //     content += `<a class="cards__item">
    //                     <div class="cards__item-goods-in-the-showroom">
    //                         ${cards[i].inTheShowroom ? "Товар в шоуруме" : ""}
    //                     </div>
    //                     <div class="cards__item-box-1">
    //                         <img
    //                             src="${
    //                                 cards[i].imagesUrls[cardSliderItemActive]
    //                                     .url
    //                             }"
    //                             alt="Card 1"
    //                             class="cards__item-img"
    //                             id="cards__item-img-1"
    //                         />
    //                     </div>
    //                     <div class="cards__item-box-2">
    //                         <div class="card-slider">
    //                             <div class="card-slider__item ${
    //                                 cardSliderItemActive === 0
    //                                     ? "card-slider__item_active"
    //                                     : ""
    //                             }" data-id="0"></div>
    //                             <div class="card-slider__item ${
    //                                 cardSliderItemActive === 1
    //                                     ? "card-slider__item_active"
    //                                     : ""
    //                             }" data-id="1"></div>
    //                             <div class="card-slider__item ${
    //                                 cardSliderItemActive === 2
    //                                     ? "card-slider__item_active"
    //                                     : ""
    //                             }" data-id="2"></div>
    //                             <div class="card-slider__item ${
    //                                 cardSliderItemActive === 3
    //                                     ? "card-slider__item_active"
    //                                     : ""
    //                             }" data-id="3"></div>
    //                         </div>
    //                         <div class="cards__item-name">
    //                             ${cards[i].name}
    //                         </div>
    //                         <div class="cards__item-in-stock">
    //                         ${cards[i].inStock ? "В наличии" : "Нет в наличии"}
    //                         </div>
    //                         <div class="cards__item-price">
    //                             ${cards[i].price} руб.
    //                         </div>
    //                     </div>
    //                 </a>`;
    // }
    // goodsInTheShowroom.innerHTML = content;

    // const cardSliderItem = document.querySelectorAll(".card-slider__item");

    // for (let i = 0; i < cardSliderItem.length; i++) {
    //     cardSliderItem[i].addEventListener("click", function () {
    //         cardSliderItemActive = cardSliderItem[i].dataset.id;
    //         document.getElementById("cards__item-img-1").src =
    //             cards[0].imagesUrls[cardSliderItemActive].url;

    //         for (let i = 0; i < cardSliderItem.length; i++) {
    //             cardSliderItem[i].classList.remove("card-slider__item_active");
    //         }
    //         cardSliderItem[i].classList.add("card-slider__item_active");
    //     });
    // }
    const swipesSliders = document.querySelectorAll(".swipe_slider");
    const swipesPromo = document.querySelectorAll(".swipe_promo");
    const swipesGoods = document.querySelectorAll(".swipe_goods");
    const swipesBrands = document.querySelectorAll(".swipe_brands");

    const swipesSliders_left = swipesSliders[0];
    const swipesSliders_right = swipesSliders[1];

    const swipesPromo_left = swipesPromo[0];
    const swipesPromo_right = swipesPromo[1];
    const swipesGoods_left = swipesGoods[0];
    const swipesGoods_right = swipesGoods[1];
    const swipesBrands_left = swipesBrands[0];
    const swipesBrands_right = swipesBrands[1];

    const slider = document.querySelector(".slider");
    const cardPromotions = document.getElementById("cards_promo");
    const cardGoods = document.getElementById("cards_goods");
    const brands = document.querySelector(".brands__box-11");

    swipesSliders_left.addEventListener("click", () => {
        slider.scrollLeft -= 1630;
    });
    swipesSliders_right.addEventListener("click", () => {
        slider.scrollLeft += 1630;
    });

    swipesPromo_left.addEventListener("click", () => {
        cardPromotions.scrollLeft -= 286;
    });
    swipesPromo_right.addEventListener("click", () => {
        cardPromotions.scrollLeft += 286;
    });
    swipesGoods_left.addEventListener("click", () => {
        cardGoods.scrollLeft -= 286;
    });
    swipesGoods_right.addEventListener("click", () => {
        cardGoods.scrollLeft += 286;
    });
    swipesBrands_left.addEventListener("click", () => {
        brands.scrollLeft -= 286;
    });
    swipesBrands_right.addEventListener("click", () => {
        brands.scrollLeft += 286;
    });

    c
});
