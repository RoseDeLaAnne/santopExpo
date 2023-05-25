const filtersItem = document.querySelectorAll(".filters__item");

for (const i of filtersItem) {
    i.addEventListener("click", () => {
        i.classList.toggle("filters__item_active");

        if (i.classList.contains("filters__item_active")) {
            i.querySelector(".filters__item-icon").src =
                "assets/icons/minus.svg";
        } else {
            i.querySelector(".filters__item-icon").src =
                "assets/icons/plus.svg";
        }
    });
}
