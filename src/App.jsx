import { useState, useEffect } from 'react'
import Product from './Product'
import YourCart from './YourCart'
import ConfirmModal from './ConfirimationModal';


function App() {
  //const [count, setCount] = useState(0)
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





  return (
    <>
    <div className=  ' w-screen p-4 h-full bg-pink-50 '>
      <h2 className=' text-4xl font-bold text-rose-950  px-1'>Desserts</h2>
      <div className=' flex flex-wrap justify-center items-center lg:flex-nowrap'>
        <main className='flex justify-center align-middle mt-5  '>
      <Product
      cart={cart}
      addToCart={addToCart}
      increment={increment}
      decrement={decrement}
    />
      </main>
      <section id="your-cart" >
        <YourCart
        cart={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        removeFromCart={removeFromCart}
          onConfirm={() => setIsConfirmOpen(true)}

      />
      </section>
      </div>
      {isConfirmOpen && (
  <ConfirmModal
    cart={cart}
    totalPrice={totalPrice}
    onClose={() => setIsConfirmOpen(false)}
    onConfirm={() => {
      setCart({});
      setIsConfirmOpen(false);
      localStorage.removeItem("cart");
    }}
  />
)}

    </div>
    </>
  )
}

export default App
