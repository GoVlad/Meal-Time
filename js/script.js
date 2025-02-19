function mobileMenu() {
    let x = document.getElementsByTagName("nav")[0];
    if (x.className === "") {
        x.className += " mobile";
    } else {
        x.className = "";
    }
}

function cartMenu() {
    let y = document.getElementsByClassName("cart")[0];
    if (y.className === "cart") {
        y.className += " Open";
    } else {
        y.className = "cart";
    }
}

function addToCart(event) {
    let product = event.target.closest(".product");
    let title = product.querySelector("p").innerText;
    let price = product.querySelector("h3").innerText;

    let cartList = document.getElementById("cart-list");

    let listItem = document.createElement("li");
    listItem.textContent = `${title} - ${price}`;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "×";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = function () {
        cartList.removeChild(listItem);
    };

    listItem.appendChild(removeBtn);
    cartList.appendChild(listItem);
}
