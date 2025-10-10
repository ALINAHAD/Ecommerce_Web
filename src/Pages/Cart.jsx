import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../Redux_Ecomm/cartSlice";
import { FaCircleMinus, FaSquarePlus } from "react-icons/fa6";

function Cart() {
  const dispatch = useDispatch();

  // ✅ Access cart data from Redux
  const { cartProducts, cartQuantity } = useSelector(
    (state) => state.cartSlice
  );

  // Calculate total price
  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.price * item.IndvQuantity,
    0
  );

  const handleAdd = (product) => {
    dispatch(actions.addToCart(product));
  };

  const handleRemove = (product) => {
    dispatch(actions.deleteFromCart(product));
  };

  return (

    <div className="cart-main-bg">
    <div className="cart-container">
      <h2>🛒 Your Cart ({cartQuantity} items)</h2>
    
      {cartProducts.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        cartProducts.map((product) => (
          <div className="cart-item" key={product.id}>
              <div className='img-carticoncart'>
            <img src={product.image} alt={product.title} className="cart-img" />
            <div className="cart-details">
              <h4>{product.title}</h4>
              <p>${product.price.toFixed(2)}</p>
           

            <div className="cart-controls">
              <FaCircleMinus onClick={() => handleRemove(product)} />
              <span>{product.IndvQuantity}</span>
              <FaSquarePlus onClick={() => handleAdd(product)} />
            </div>
            </div>
          </div>
         <hr style={{ height: "3px", backgroundColor: "#531705ff", border: "none" }} />

        
          </div>
        
        ))
      )}

      {cartProducts.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
    </div>
    
  );
}

export default Cart;
