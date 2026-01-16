import Product from './Product'
import YourCart from './YourCart'
import ConfirmModal from './ConfirimationModal';
import useCart from './hooks/useCart';


function App() {
  
 const {
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
    } = useCart()

  return (
    <>
    <div className=  ' w-[400px] md:w-[1350px]  p-4 h-full bg-pink-50 '>
      <h2 className=' text-4xl font-bold text-rose-950  px-1'>Desserts</h2>
      <div className=' flex flex-wrap justify-center content-center items-center align-middle md:flex-nowrap md:justify-start md:align-baseline md:content-normal md:items-start'>
        <main className='flex justify-center align-middle mt-5 md:justify-start   '>
      <Product
      cart={cart}
      addToCart={addToCart}
      increment={increment}
      decrement={decrement}
    />
      </main>
      <section id="your-cart" className='-ml-[4%]' >
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
    //onClose={() => setIsConfirmOpen(false)}
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
