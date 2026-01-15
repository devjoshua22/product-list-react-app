import CartButton from "./CartButton";
import UseHandleData from "./useHandleData";
import { useState } from "react";

const Product = ({cart: cartItems , addToCart, increment, decrement }) => {

     
        // the fetch to the handleData hook 
    const { products, isLoading, error } = UseHandleData();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;



    return (
        
        <div className="flex flex-wrap">
            {products.map((product)=>{ 
             const isInCart = !!cartItems[product.id];
             const quantity = cartItems[product.id]?.quantity ?? 0;
            return(
                <section className={`w-[350px] m-1 ` }  key={product.id}>
            {/* the food image */}
            <img src = {product?.image.mobile} alt="" className={`rounded-md ${isInCart ? 'border-orange-600 border-2' : 'border-transparent' } ` }   />

            {/* the  "add to cart button" */}
            <div className=" absolute mx-24 -my-1">
                <CartButton
                isInCart={isInCart}
                quantity={quantity}
                onAdd={() => addToCart(product)}
                onIncrement={() => increment(product.id)}
                onDecrement={() => decrement(product.id)}
                key={product.id}
                />

            </div>

            {/* the Title and price */}
            <div className=" mt-6 mb-2">
                <p className=" font-thin text-red-950">{product.category}</p>
                <p className=" text-red-950 font-medium">{product.name}</p>
                <p className=" font-medium text-red-600">${product.price.toFixed(2)}</p>
            </div>

            
        </section>
            )
            
            })}
        </div>
        
        
    
      );
}
 
export default Product;