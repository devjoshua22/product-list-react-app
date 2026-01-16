const CartButton = ({ isInCart, quantity, onAdd, onIncrement, onDecrement }) => {
  return (
    <>
      {!isInCart && (
        <button
          className="flex items-center justify-center px-2 py-2 rounded-full bg-white border-rose-900 border w-40 gap-1 -mt-5   "
          onClick={onAdd}
        >
          <img src="./assets/images/icon-add-to-cart.svg" className="h-6 w-8" />
          <p className="text-rose-950 font-semibold hover:text-orange-600">Add to Cart</p>
        </button>
      )}

      {isInCart && (
        <div className="flex items-center justify-between px-2 py-2 rounded-full bg-orange-600 w-40 -mt-5">
          <button onClick={onDecrement}>
            <img src="./assets/images/icon-decrement-quantity.svg" className="h-5 w-5 border-white border-2 p-1 rounded-full hover:bg-red-700" />
          </button>

          <span className="text-white font-semibold">{quantity}</span>

          <button onClick={onIncrement}>
            <img src="./assets/images/icon-increment-quantity.svg" className="h-5 w-5 border-white border-2 p-1 rounded-full hover:bg-emerald-700 " />
          </button>
        </div>
      )}
    </>
  );
};

export default CartButton