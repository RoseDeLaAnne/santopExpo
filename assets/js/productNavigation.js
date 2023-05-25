const productNavigationItem = document.querySelectorAll(
    ".product-navigation__item"
);
const productDescription = document.querySelectorAll(
    ".product-description"
);

for (const i of productNavigationItem) {
    i.addEventListener("click", () => {
        for (const i2 of productNavigationItem) {
            i2.classList.remove("product-navigation__item_active");
        }
        for (const i2 of productDescription) {
            i2.classList.remove("product-description_active");
        }

        i.classList.toggle("product-navigation__item_active");

        document
            .getElementById(`product-description_${i.dataset.id}`)
            .classList.toggle("product-description_active");
    });
}
