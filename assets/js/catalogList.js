const items = document.querySelectorAll(".catalog-list__item");

for (const item of items) {
    item.querySelector('.catalog-list__item-box-11').addEventListener("click", () => {
        item.classList.toggle("catalog-list__item_active");

        if (item.classList.contains("catalog-list__item_active")) {
            item.querySelector(".catalog-list__item-icon").src =
                "assets/icons/minus.svg";
        } else {
            item.querySelector(".catalog-list__item-icon").src =
                "assets/icons/plus.svg";
        }
    });
}
