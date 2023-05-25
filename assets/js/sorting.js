const sortingItem = document.querySelectorAll(".sorting__item");

for (const i of sortingItem) {
    i.addEventListener("click", () => {
        i.classList.toggle("sorting__item_active");

        if (i.classList.contains("sorting__item_active")) {
            i.querySelector(".sorting__item-icon").src =
                "assets/icons/arrow_top.svg";
        } else {
            i.querySelector(".sorting__item-icon").src =
                "assets/icons/arrow_bottom.svg";
        }
    });
}
