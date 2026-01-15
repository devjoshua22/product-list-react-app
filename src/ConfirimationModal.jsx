const ConfirmModal = ({ cart, totalPrice, onClose, onConfirm }) => {
  const items = Object.values(cart);
  
  return (
    <div className="fixed inset-0 bg-black/40 flex items-stretch justify-center z-50 overflow-scroll ">
      <div className=" w-[396px] h-fit bg-white px-8 py-7 rounded-2xl mt-[9%]">
        <header>
          <img src="assets/images/icon-order-confirmed.svg" alt="" />
          <h1 className=" w-32 py-2 text-4xl font-bold text-rose-950">Order  Confirmed</h1>
          <small className=" text-gray-400 text-sm  ">We hope you enjoy your food!</small>
        </header>
        <main className=" bg-rose-50  rounded-lg flex flex-wrap justify-center w-[310px] px-3 py-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex flex-wrap gap-2 text-sm items-center border-b justify-between py-2 w-full">
              <span className=" ">
                <img src={product.image.thumbnail} alt="" className=" w-16 h-16 rounded" />
              </span>
              <span>
                {product.name.length > 21 ? 
                 <p className="  font-medium text-rose-950">{product.name.slice(0,20)}...</p>  : <p className="  font-medium text-rose-950">{product.name}</p>
               }
                <small className="flex justify-between w-20">
                  <p className=" text-red-700 font-bold" >{quantity}x</p>
                  <p className=" text-gray-500 font-medium">@ ${product.price.toFixed(2)}</p>
                </small>
              </span>
              <span className=" text-rose-950 font-semibold">
                ${(product.price * quantity).toFixed(2)}
              </span>
            </div>

            
          ))}

          <div className="flex justify-between w-full p-4 items-center">
            <p className="  font-light">Order Total</p>
            <p className=" font-bold text-2xl text-rose-950">${totalPrice.toFixed(2)}</p>
            </div>
            
        </main>
        <button
                  onClick={onConfirm}
                  className="w-[300px] bg-orange-700 text-white py-3 my-6  rounded-full bg "
                >
                  Start New Order
                </button>
      </div>
      {/* 
        <button
          onClick={onClose}
          className="w-full text-sm text-gray-500"
        >
          Close
        </button>
      </div> */}
    </div>
  );
};

export default ConfirmModal;
