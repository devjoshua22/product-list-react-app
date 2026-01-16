import { useState, useEffect } from 'react'

const useCart = () => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);


  

    


 const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : {};
});


useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


  const addToCart = (product) => {
  setCart(prev => ({
    ...prev,
    [product.id]: {
      product,
      quantity: 1
    }
    }));
  };

  const removeFromCart = (id) => {
  setCart(prev => {
    const copy = { ...prev };
    delete copy[id];
    return copy;
  });
};

  const increment = (id) => {
  setCart(prev => ({
    ...prev,
    [id]: {
      ...prev[id],
      quantity: prev[id].quantity + 1
    }
  }));
};


  const decrement = (id) => {
  setCart(prev => {
    const qty = prev[id].quantity - 1;

    if (qty === 0) {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    }
    return {
      ...prev,
      [id]: {
        ...prev[id],
        quantity: qty
      }
      };
    });
  };

  const totalItems = Object.values(cart)
  .reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = Object.values(cart)
  .reduce((sum, item) => 
    sum + item.product.price * item.quantity,
  0);



    return {
    cart,
    addToCart,
    increment,
    decrement,
    removeFromCart,
    totalItems,
    totalPrice,
    isConfirmOpen,
    setIsConfirmOpen,
    setCart
    };
}
 
export default useCart;