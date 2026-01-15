const YourCart = ({ cart, totalItems, totalPrice, removeFromCart, onConfirm }) => {
  const cartItems = Object.values(cart);

  return (
    <div className="bg-white w-[336px] rounded-lg mt-2 pb-6 md:sticky md:top-1">
      <h2 className="text-xl font-bold text-red-700 px-4 py-5">
        Your Cart ({totalItems})
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-3">
          <img
            src="assets/images/illustration-empty-cart.svg"
            alt=""
            className="w-[150px] h-[180px]"
          />
          <p className="text-sm text-rose-950">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="px-4 space-y-4">
          {cartItems.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b pb-2  "
            >
                <div className="flex items-center justify-between w-[290px] ">
                    <div id="product-details">
                      <h3 className="font-medium text-rose-950">{product.name}</h3>
                      <span className=" text-gray-600 text-sm flex justify-between">
                        <p className="text-sm text-rose-600 font-bold">{quantity}x</p>
                        <p>@{product.price.toFixed(2)}</p>
                        <p className=" font-semibold"> ${(product.price * quantity).toFixed(2)}</p>
                      </span>
                    </div>
                    <div onClick={()=>{removeFromCart(product.id)}}>
                       <img src="./assets/images/icon-remove-item.svg" alt="" className="w-4 border-gray-400 border rounded-full p-0.5 cursor-pointer" /> 
                    </div>
                </div>
            </div>
          ))}

          <div className="flex justify-between font-bold text-2xl pt-4">
            <span className=" font-normal text-gray-700 text-base">Order Total</span>
            <span className="text-rose-950">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex gap-3 justify-center bg-rose-50 p-3.5 rounded text-sm">
            <img src="./assets/images/icon-carbon-neutral.svg" alt="" className=""/>
            <p>This is a <span className=" font-semibold text-rose-950 ">carbon-neutral</span> delivery</p>
          </div>
          <div className="flex justify-center align-middle">
            <button className=" text-white bg-orange-700 w-[270px] p-3 font-semibold rounded-full " onClick={onConfirm}>Confirm Order</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default YourCart;
