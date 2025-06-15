document.addEventListener("DOMContentLoaded", () => {
    const cartContent = document.getElementById("cartContent");
    const totalSection = cartContent.querySelector(".sal");
    const totalPriceElement = totalSection.querySelector("p");
    const emp_message = cartContent.querySelector('.emptyMessage');
    const cart = cartContent.querySelector('.mybox');
    function checkEmpty() {
        if (cart && cart.children.length === 0) {
            emp_message.style.display = "block";
        }
        else {
            emp_message.style.display = "none";
        }
    }
    function updateTotal() {
        const prices = cartContent.querySelectorAll(".price");
        let total = 0;

        prices.forEach(priceElement => {
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            total += price;
        });

        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }
    cartContent.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            const itemDiv = e.target.closest(".info");
            itemDiv.remove();
        }
        checkEmpty();
        updateTotal();
        if (e.target.classList.contains("complete")) {
                const itemDiv = e.target.closest(".info");
                itemDiv.remove();
        }
        updateTotal();
        checkEmpty();
    });
    updateTotal();
    checkEmpty();
});
