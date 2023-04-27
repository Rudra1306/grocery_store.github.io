import Items from "@/components/items";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import { useCartItems } from "@/context/cartItemsContext";
import { useCounterContext } from "@/context/counterContext";
import React from "react";

const cartItem = [
  {
    id: 1,
    name: "Fish Fingers",
    description: "500 grams",
    image: "/cart.jpeg",
    price: 2.5,
    tags: ["Frozen-Food"],
  },
  {
    id: 2,
    name: "Fish Fingers",
    description:
      "1000 grams",
    image: "/cart.jpeg",
    price: 5.0,
    tags: ["Frozen-Food"],
  },
  {
    id: 3,
    name: "Hamburger Patties",
    description:
      "Pack of 10",
    image: "/cart.jpeg",
    price: 2.35,
    tags: ["Frozen-Food"],
  },
  {
    id: 4,
    name: "Shelled Prawns",
    description:
      "250 gram",
    image: "/cart.jpeg",
    price: 6.90,
    tags: ["Frozen-Food"],
  },
  {
    id: 5,
    name: "Tub Ice Cream",
    description:
      "1 Litre",
    image: "/cart.jpeg",
    price: 1.80,
    tags: ["Frozen-Food"],
  },
  {
    id: 6,
    name: "Tub Ice Cream",
    description:
      "2 Litre",
    image: "/cart.jpeg",
    price: 3.40,
    tags: ["Frozen-Food"],
  },
  {
    id: 13,
    name: "Cheddar Cheese",
    description:
      "500 gram",
    image: "/cart.jpeg",
    price: 8.00,
    tags: ["Frozen-Food"],
  },
  {
    id: 14,
    name: "Cheddar Cheese",
    description:
      "1000 gram",
    image: "/cart.jpeg",
    price: 15.00,
    tags: ["Frozen-Food"],
  },
  {
    id: 15,
    name: "T Bone Steak",
    description:
      "1000 gram",
    image: "/cart.jpeg",
    price: 7.00,
    tags: ["Frozen-Food"],
  },
  {
    id: 16,
    name: "Navel Oranges",
    description:
      "Bag of 20",
    image: "/cart.jpeg",
    price: 3.99,
    tags: ["Fresh-Food"],
  },
];

export default function Home() {
  const { totalCount } = useCounterContext();
  const { cartItems } = useCartItems();

  React.useEffect(() => {
    console.log(totalCount);
  }, [totalCount]);
  return (
    <div className="flex">
      <div className="min-w-[175px] flex items-center justify-center bg-slate-400">
        <Sidebar />
      </div>
      <div className="p-[20px] w-full flex flex-col justify-center items-center">
        <Topbar />
        <div className="flex w-full items-center justify-center p-[20px] text-[30px]">
          Items
        </div>
        <div className="h-[600px] overflow-scroll border-[1px] border-solid rounded p-[15px]">
          <div className="grid grid-cols-4 xl1:grid-cols-3 xl2:grid-cols-2 xl3:grid-cols-1 justify-center items-start gap-[20px] ">
            {cartItem.map((items, index) => {
              return <Items id={index} items={items} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-[200px] mr-[20px] flex flex-col justify-center gap-[5px]">
        <div className="flex justify-center gap-[5px]">
          <div className="text-[30px] w-max">Your Cart Items</div>
          {/* <div className="text-[30px]">{totalCount}</div> */}
        </div>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.itemName + " - " + item.count}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
