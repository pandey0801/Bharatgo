import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity, toggleCart, checkOut } from "../src/redux/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>My Order</h2>
          <button className="close-cart" onClick={() => dispatch(toggleCart())}>✕</button>
        </div>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.title} className="cart-image" />
                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <p className="cart-price">${item.price}</p>
                  <div className="cart-controls">
                    <button className="qty-btn decrease" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="qty-btn increase" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>✕</button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <p className="total-price">Total: <strong>${totalPrice}</strong></p>
          <button className="checkout-btn" onClick={()=>dispatch(checkOut())}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
