// تخزين السلة في localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Kids Store Functionality
let kidsCart = JSON.parse(localStorage.getItem('kidsCart')) || [];

// Women's Store Functionality
let womensCart = JSON.parse(localStorage.getItem('womensCart')) || [];

// Brands Store Functionality
let brandsCart = JSON.parse(localStorage.getItem('brandsCart')) || [];

// تحديث واجهة السلة
function updateCartUI() {
    const cartButton = document.querySelector('.cart-button');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartButton.innerHTML = `<i class="bi bi-cart"></i> Cart (${cart.length})`;

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    cartTotal.textContent = totalPrice.toFixed(2);
}

// تحديث واجهة السلة الخاصة بالأطفال
function updateKidsCartUI() {
    const kidsCartButton = document.querySelector('.cart-button');
    const kidsCartItemsContainer = document.getElementById('cart-items');
    const kidsCartTotal = document.getElementById('cart-total');

    kidsCartButton.innerHTML = `<i class="bi bi-cart"></i> Cart (${kidsCart.length})`;

    kidsCartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    kidsCart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        kidsCartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    kidsCartTotal.textContent = totalPrice.toFixed(2);
}

// تحديث واجهة السلة الخاصة بالنساء
function updateWomensCartUI() {
    const womensCartButton = document.querySelector('.cart-button');
    const womensCartItemsContainer = document.getElementById('cart-items');
    const womensCartTotal = document.getElementById('cart-total');

    womensCartButton.innerHTML = `<i class="bi bi-cart"></i> Cart (${womensCart.length})`;

    womensCartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    womensCart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        womensCartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    womensCartTotal.textContent = totalPrice.toFixed(2);
}

// تحديث واجهة السلة الخاصة بالعلامات التجارية
function updateBrandsCartUI() {
    const brandsCartButton = document.querySelector('.cart-button');
    const brandsCartItemsContainer = document.getElementById('cart-items');
    const brandsCartTotal = document.getElementById('cart-total');

    brandsCartButton.innerHTML = `<i class="bi bi-cart"></i> Cart (${brandsCart.length})`;

    brandsCartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    brandsCart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        brandsCartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    brandsCartTotal.textContent = totalPrice.toFixed(2);
}

// إضافة منتج إلى السلة
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.product-item');
        const productId = productItem.getAttribute('data-product-id');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));
        
        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    });
});

// إضافة منتج إلى سلة الأطفال
document.querySelectorAll('.add-to-kids-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.product-item');
        const productId = productItem.getAttribute('data-product-id');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));
        
        const existingProduct = kidsCart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            kidsCart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        localStorage.setItem('kidsCart', JSON.stringify(kidsCart));
        updateKidsCartUI();
    });
});

// إضافة منتج إلى سلة النساء
document.querySelectorAll('.add-to-womens-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.product-item');
        const productId = productItem.getAttribute('data-product-id');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));
        
        const existingProduct = womensCart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            womensCart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        localStorage.setItem('womensCart', JSON.stringify(womensCart));
        updateWomensCartUI();
    });
});

// إضافة منتج إلى سلة العلامات التجارية
document.querySelectorAll('.add-to-brands-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.product-item');
        const productId = productItem.getAttribute('data-product-id');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));
        
        const existingProduct = brandsCart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            brandsCart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        localStorage.setItem('brandsCart', JSON.stringify(brandsCart));
        updateBrandsCartUI();
    });
});

// فتح السلة
document.querySelector('.cart-button').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'flex';
});

// إغلاق السلة
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// مسح السلة
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    closeCart();
}

// مسح سلة الأطفال
function clearKidsCart() {
    kidsCart = [];
    localStorage.setItem('kidsCart', JSON.stringify(kidsCart));
    updateKidsCartUI();
    closeCart();
}

// مسح سلة النساء
function clearWomensCart() {
    womensCart = [];
    localStorage.setItem('womensCart', JSON.stringify(womensCart));
    updateWomensCartUI();
    closeCart();
}

// مسح سلة العلامات التجارية
function clearBrandsCart() {
    brandsCart = [];
    localStorage.setItem('brandsCart', JSON.stringify(brandsCart));
    updateBrandsCartUI();
    closeCart();
}

// متابعة إلى الدفع
function checkout() {
    const totalAmount = calculateTotal(); 
    alert(`Proceeding to checkout with a total of $${totalAmount.toFixed(2)}`);
}

function calculateTotal() {
    let total = 0;
    [...kidsCart, ...womensCart, ...brandsCart].forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

// إضافة حدث لزر الدفع
const checkoutButton = document.getElementById('checkout-button'); 
if (checkoutButton) {
    checkoutButton.addEventListener('click', checkout);
}

// عند تحميل الصفحة، تحديث واجهة السلة
window.onload = updateCartUI();
