
import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart-page">
      <div className="cart-container">

        <div className="cart-header">
          <p className="cart-label">CLOSET CYCLE</p>
          <h1>Your Cart</h1>
          <p className="cart-subtitle">
            Review the pieces you've chosen before checkout.
          </p>
        </div>

        <div className="cart-content">

          <div className="cart-items">
            <div className="cart-section-header">
              <h2>Your Items</h2>
              <span>0 items</span>
            </div>

            <div className="empty-cart">
              <div className="empty-cart-icon">♡</div>

              <h3>Your cart is empty</h3>

              <p>
                Discover something you love and add it to your cart.
              </p>

              <button
                className="shop-button"
                onClick={() => (window.location.href = "/explore")}
              >
                Browse Pre-Loved
              </button>
            </div>
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>0</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <span>$0.00</span>
            </div>

            <button className="checkout-button" disabled>
              Proceed to Checkout
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Cart;