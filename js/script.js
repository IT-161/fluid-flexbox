"use strict";

const shippingForm = document.querySelector(".shipping-form");
const formMessage = document.querySelector(".form-message");

if (shippingForm && formMessage) {
    shippingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!shippingForm.checkValidity()) {
            shippingForm.reportValidity();
            return;
        }

        formMessage.textContent =
            "Shipping details saved successfully.";

        shippingForm.reset();
    });
}