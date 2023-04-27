import { useCartItems } from "@/context/cartItemsContext";
import { useCounterContext } from "@/context/counterContext";
import Image from "next/image";
import React from "react";

function Items(items) {
  const [count, setCount] = React.useState(0);
  const { totalCount, setTotalCount } = useCounterContext();
  const { cartItems, setCartItems } = useCartItems();

  const [checkoutItems, setCheckoutItems] = React.useState([
    { itemname: "", count: 0, price: 0 },
  ]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("items", JSON.stringify(cartItems));
      // console.log("cartItems", cartItems);
    }
  }, [cartItems]);

  React.useEffect(() => {
    setTotalCount(totalCount + count);
    // console.log(totalCount);
  }, [count]);

  const addToCart = (itemName, count, price) => {
    setCartItems([...cartItems, { itemName, count, price }]);
  };

  const removeFromCart = (itemName) => {
    const newItems = [...cartItems];
    const index = newItems.findIndex((item) => {
      return item.itemName === itemName;
    });
    // console.log(index);
    if (index !== -1) {
      newItems.splice(index, 1);
      setCartItems(newItems);
    } else {
      alert(`Can't remove product ${itemName} as its not in cart!`);
    }
  };

  return (
    <div className=" w-[180px] rounded overflow-hidden shadow-lg bg-yellow-400 min-h-[455px]">
      <Image
        className="w-full"
        src={items.items.image}
        alt="Sunset in the mountains"
        width={70}
        height={37}
      />
      <div className="px-6 py-4 min-h-[149px]">
        <div className="font-bold text-xl mb-2">{items.items.name}</div>
        <p className="text-gray-700 text-base">{items.items.description}</p>
        <div className="font-bold text-[14px] mb-2">
          Cost: {items.items.price}$
        </div>
      </div>
      <div className="px-6 pb-4 flex justify-center items-center text-[10px]">
        {items.items.tags[0] && (
          <span className="inline-block bg-slate-50 rounded-full px-3 py-1 font-semibold text-slate-950 mr-2 mb-2">
            {items.items.tags[0]}
          </span>
        )}
        {items.items.tags[1] && (
          <span className="inline-block bg-slate-50 rounded-full px-3 py-1 font-semibold text-slate-950 mr-2 mb-2">
            {items.items.tags[0]}
          </span>
        )}
        {items.items.tags[2] && (
          <span className="inline-block bg-slate-50 rounded-full px-3 py-1 font-semibold text-slate-950 mr-2 mb-2">
            {items.items.tags[0]}
          </span>
        )}
      </div>
      <div className="flex justify-center items-center gap-[10px] pb-[20px]">
        <button
          className={`inline-block bg-slate-50 rounded-full px-3 py-1 text-[10px] font-semibold text-slate-950 ${
            count === 0
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <div className="text-[10px]">{count}</div>
        <button
          className="inline-block bg-gray-200 text-[10px] rounded-full px-3 py-1 text-sm font-semibold text-slate-950"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          className={`inline-block bg-green-700 rounded px-3 py-1 text-[10px] font-semibold text-slate-50 
          ${
            count === 0
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}
          onClick={() => {
            addToCart(items.items.name, count, items.items.price);
          }}
        >
          Add to Cart
        </button>
      </div>
      <button
        className={`inline-block pb-[10px] w-full justify-center items-center bg-red-500 rounded px-3 py-1 text-[10px] font-semibold text-slate-50  ${
          count === 0 ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`}
        onClick={() => {
          const itemToRemove = items.items.name;
          removeFromCart(itemToRemove);
        }}
      >
        Remove from Cart
      </button>
    </div>
  );
}

export default Items;
