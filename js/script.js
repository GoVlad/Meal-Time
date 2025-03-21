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
    let priceText = product.querySelector("h3").innerText;
    let price = parseInt(priceText.match(/\d+/)[0]);

    let cartList = document.getElementById("cart-list");

    let listItem = document.createElement("li");
    listItem.textContent = `${title} - ${price}`;
    listItem.dataset.price = price;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "×";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
        cartList.removeChild(listItem);
        setTimeout(updateTotalPrice, 0); 
    };

    listItem.appendChild(removeBtn);
    cartList.appendChild(listItem);

    updateTotalPrice();
    showAddToCartNotification();
}

function showAddToCartNotification() {
    let message = document.getElementById('cartMessage');
    message.style.display = 'block';

    setTimeout(function() {
        message.style.display = 'none';
    }, 1000); 
}

function updateTotalPrice() {
    let cartItems = document.querySelectorAll("#cart-list li");
    let total = 0;

    cartItems.forEach(item => {
        total += parseInt(item.dataset.price);
    });

    document.getElementById("total-price").innerText = total + " lei";
}
