import React from 'react';
import { FaSquarePlus, FaCircleMinus } from "react-icons/fa6";
import { actions } from '../Redux_Ecomm/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductList({ listOfProducts }) {
  const dispatch = useDispatch();

  // ✅ Read cartProducts from Redux
  const cartProducts = useSelector((state) => state.cartSlice.cartProducts);

  const handleAddProduct = (product) => {
    dispatch(actions.addToCart(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(actions.deleteFromCart(product));
  };

  // Helper to get the quantity of a product
  const getQuantity = (productId) => {
    const item = cartProducts.find((p) => p.id === productId);
    return item ? item.IndvQuantity : 0;
  };

  return (
    <>
      <h1 className="our_pro">Oru Products</h1>
      <div className="product_container">
      {listOfProducts.length === 0 ? (
        <h2 className='loading'>No Product Found...</h2>
      ) : (
        listOfProducts.map((product) => (
          <div className='details-container'>
          <div className='product' key={product.id}>
            <div className='img-carticon'>
            <img src={product.image} alt="product-img" className='product_image' />
            <div className="add_to_cart_container">
              <FaSquarePlus 
  style={{ cursor: "pointer" }} 
  onClick={() => handleAddProduct(product)} 
/>

              <span className='cart_value'>{getQuantity(product.id)}</span>
              <FaCircleMinus style={{ cursor: "pointer" }}  onClick={() => handleRemoveProduct(product)} />
            </div>
            </div>
            <div className='product_meta'>
              <p className='product_title'>{product.title}</p>
              <p className='price'>${product.price}</p>
            </div>
</div>
   
          </div>
        
        ))
      )}
      </div>
    </>
  );
}

export default ProductList;
