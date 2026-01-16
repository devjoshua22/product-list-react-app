import CartButton from "./CartButton";
import UseHandleData from "./useHandleData";
import { motion } from "framer-motion";

const Product = ({cart: cartItems , addToCart, increment, decrement }) => {

     
        // the fetch to the handleData hook 
    const { products, isLoading, error } = UseHandleData();

   if (isLoading)
  return (
    <motion.p
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
    >
      <div className=" ml-4">
    Loading desserts...
    </div>
    </motion.p>
  );

if (error)
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-red-600"
    >
      Failed to load products
    </motion.p>
  );



    return (
        
        <div className="flex flex-wrap md:gap-1 md:px-1 md:max-w-[950px] justify-center md:justify-start">
            {products.map((product)=>{ 
             const isInCart = !!cartItems[product.id];
             const quantity = cartItems[product.id]?.quantity ?? 0;
            return(
                <section className={`w-[350px] md:w-[265px]  m-1 ` }  key={product.id}>
            {/* the food image */}
              {/* Responsive image without JS logic */}
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={product.image.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={product.image.tablet}
              />
              <img
                src={product.image.mobile}
                alt={product.name}
                className={`rounded-md w-full md:w-[280px] md:h-[220px] ${
                  isInCart ? "border-2 border-orange-600" : ""
                }`}/>
            </picture>
           

            {/* the  "add to cart button" */}
            <div className=" absolute mx-24 md:mx-[6%] lg:mx-[4.5%] -my-1">
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