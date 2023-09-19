function processPayment() {
    var selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    if (selectedPaymentMethod === "card") {
    var cardNumber = document.getElementById("cardNumber").value;
    var cardHolder = document.getElementById("cardHolder").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
    
    // Perform card payment processing
    console.log("Card Payment:");
    console.log("Card Number:", cardNumber);
    console.log("Card Holder:", cardHolder);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    }
}