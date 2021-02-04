document.getElementById('first-class-quantity').value = 0;
document.getElementById('economy-class-quantity').value = 0;


function handleTicket(type, isIncrease) {
    var typeClassQuantity = parseInt(document.getElementById(type + '-class-quantity').value);
    if (isIncrease == true) {
        typeClassQuantity += 1;
    }
    else if (isIncrease == false && typeClassQuantity > 0) {
        typeClassQuantity -= 1;
    }
    document.getElementById(type + '-class-quantity').value = typeClassQuantity;
    calculateAmount();
}


// calculate total cost
function calculateAmount() {
    var firstClassQuantity = parseInt(document.getElementById('first-class-quantity').value);
    var economyClassQuantity = parseInt(document.getElementById('economy-class-quantity').value);

    var firstClassPrice = firstClassQuantity * 150;
    var economyClassPrice = economyClassQuantity * 100;
    var subtotal = firstClassPrice + economyClassPrice;
    var vat = subtotal * 0.1;
    var total = subtotal + vat;

    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;
}


// handling bookNow button 
document.getElementById('book-btn').addEventListener('click', function () {
    document.getElementById('before-purchase').style.display = 'none';
    document.body.style.background = 'none';
    afterPurchaseDisplay();
})


//  handling after purchase section 
function afterPurchaseDisplay() {
    document.body.style.padding = '100px';
    var afterPurchase = document.getElementById('after-purchase');
    afterPurchase.style.display = 'block';

    var totalCost = document.getElementById('total').innerText;
    var firstClassQuantity = document.getElementById('first-class-quantity').value;
    var economyClassQuantity = document.getElementById('economy-class-quantity').value;

    document.getElementById('first-class').innerText = firstClassQuantity;
    document.getElementById('economy-class').innerText = economyClassQuantity;
    document.getElementById('total-cost').innerText = '$ ' + totalCost;

}


// reset button and done button handling
function handlingFinishingButton() {
    location.href = "https://fem97.github.io/flight-booking/index.html";
}
