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
    image: "/fishFingers.jpg",
    price: 2.5,
    tags: ["Frozen-Food"],
  },
  {
    id: 2,
    name: "Fish Fingers",
    description: "1000 grams",
    image: "/fishFingers.jpg",
    price: 5.0,
    tags: ["Frozen-Food"],
  },
  {
    id: 3,
    name: "Hamburger Patties",
    description: "Pack of 10",
    image: "/hamburgerPatties.jpg",
    price: 2.35,
    tags: ["Frozen-Food"],
  },
  {
    id: 4,
    name: "Shelled Prawns",
    description: "250 gram",
    image: "/shelledPrawn.jpeg",
    price: 6.9,
    tags: ["Frozen-Food"],
  },
  {
    id: 5,
    name: "Tub Ice Cream",
    description: "1 Litre",
    image: "/tubeIcecream.jpg",
    price: 1.8,
    tags: ["Frozen-Food"],
  },
  {
    id: 6,
    name: "Tub Ice Cream",
    description: "2 Litre",
    image: "/tubeIcecream.jpg",
    price: 3.4,
    tags: ["Frozen-Food"],
  },
  {
    id: 7,
    name: "Panadol",
    description: "Pack of 24",
    image: "/Panadol.jpg",
    price: 3.0,
    tags: ["Home-Health"],
  },
  {
    id: 8,
    name: "Panadol",
    description: "Bottle of 50",
    image: "/Panadol.jpg",
    price: 5.5,
    tags: ["Home-Health"],
  },
  {
    id: 9,
    name: "Bath Soap",
    description: "Pack of 6",
    image: "/bathSoap.jpg",
    price: 2.6,
    tags: ["Home-Health"],
  },
  {
    id: 10,
    name: "Garbage Bags Small",
    description: "Pack of 10",
    image: "/garbage.jpg",
    price: 1.5,
    tags: ["Home-Health"],
  },
  {
    id: 11,
    name: "Garbage Bags Large",
    description: "Pack of 50",
    image: "/garbage.jpg",
    price: 5.0,
    tags: ["Home-Health"],
  },
  {
    id: 12,
    name: "Washing Powder",
    description: "1000 gram",
    image: "/washingPowder.jpg",
    price: 4.0,
    tags: ["Home-Health"],
  },
  {
    id: 13,
    name: "Cheddar Cheese",
    description: "500 gram",
    image: "/cheddarCheese.jpg",
    price: 8.0,
    tags: ["Frozen-Food"],
  },
  {
    id: 14,
    name: "Cheddar Cheese",
    description: "1000 gram",
    image: "/cheddarCheese.jpg",
    price: 15.0,
    tags: ["Frozen-Food"],
  },
  {
    id: 15,
    name: "T Bone Steak",
    description: "1000 gram",
    image: "/tboneSteak.jpeg",
    price: 7.0,
    tags: ["Frozen-Food"],
  },
  {
    id: 16,
    name: "Navel Oranges",
    description: "Bag of 20",
    image: "/navelOrange.jpg",
    price: 3.99,
    tags: ["Fresh-Food"],
  },
  {
    id: 17,
    name: "Bananas",
    description: "1 Kg",
    image: "/bananaPack.jpg",
    price: 1.49,
    tags: ["Fresh-Food"],
  },
  {
    id: 18,
    name: "Peaches",
    description: "1 Kg",
    image: "/peaches.jpg",
    price: 2.99,
    tags: ["Fresh-Food"],
  },
  {
    id: 19,
    name: "Grapes",
    description: "1 Kg",
    image: "/grapes.jpg",
    price: 3.5,
    tags: ["Fresh-Food"],
  },
  {
    id: 20,
    name: "Apples",
    description: "1 Kg",
    image: "/apples.jpg",
    price: 1.99,
    tags: ["Fresh-Food"],
  },
  {
    id: 21,
    name: "Earl Grey Tea Bags",
    description: "Pack of 25",
    image: "/earlteabags.jpg",
    price: 2.49,
    tags: ["Beverages"],
  },
  {
    id: 22,
    name: "Earl Grey Tea Bags",
    description: "Pack of 100",
    image: "/earlteabags.jpg",
    price: 7.25,
    tags: ["Beverages"],
  },
  {
    id: 23,
    name: "Earl Grey Tea Bags",
    description: "Pack of 200",
    image: "/earlteabags.jpg",
    price: 13.0,
    tags: ["Beverages"],
  },
  {
    id: 24,
    name: "Instant Coffee",
    description: "200 gram",
    image: "/instantcoffee.jpg",
    price: 2.89,
    tags: ["Beverages"],
  },
  {
    id: 25,
    name: "Instant Coffee",
    description: "500 gram",
    image: "/instantcoffee.jpg",
    price: 5.1,
    tags: ["Beverages"],
  },
  {
    id: 26,
    name: "Chocolate Bar",
    description: "500 gram",
    image: "/chocolatebar.jpg",
    price: 2.5,
    tags: ["Fresh-Food"],
  },
  {
    id: 27,
    name: "Dry Dog Food",
    description: "5 Kg",
    image: "/drydogfood.jpg",
    price: 5.95,
    tags: ["Pet-Food"],
  },
  {
    id: 28,
    name: "Dry Dog Food",
    description: "1 Kg",
    image: "/drydogfood.jpg",
    price: 1.95,
    tags: ["Pet-Food"],
  },
  {
    id: 29,
    name: "Bird Food",
    description: "500g Packet",
    image: "/birdfood.jpg",
    price: 3.99,
    tags: ["Pet-Food"],
  },
  {
    id: 30,
    name: "Cat Food",
    description: "500g Tin",
    image: "/catfood.jpg",
    price: 2.0,
    tags: ["Pet-Food"],
  },
  {
    id: 31,
    name: "Fish Food",
    description: "500g packet",
    image: "/fishfood.jpg",
    price: 3.0,
    tags: ["Pet-Food"],
  },
  {
    id: 32,
    name: "Laundry Bleach",
    description: "2 Litre Bottle",
    image: "/laundrybleach.jpg",
    price: 3.55,
    tags: ["Pet-Food"],
  },
];

export default function Home() {
  const { totalCount } = useCounterContext();
  const { cartItems } = useCartItems();

  const [searchItemName, setSearchItemName] = React.useState("");

  const searchChanged = (e) => {
    setSearchItemName(e.target.value);
    setFilteredItems(
      cartItem.filter((item) =>
        item.name.toLowerCase().includes(searchItemName.toLowerCase())
      )
    );
  };

  // const filteredCartItems = cartItem.filter((item) =>
  //   item.name.toLowerCase().includes(searchItemName.toLowerCase())
  // );

  const [filteredItems, setFilteredItems] = React.useState(cartItem);

  const [categoriesClicked, setCategoriesClicked] = React.useState(false);

  return (
    <div className="flex">
      <div className="min-w-[175px] flex items-center justify-center bg-yellow-400">
        <Sidebar />
      </div>
      <div className="p-[20px] w-full flex flex-col justify-center items-center">
        <Topbar />
        <div className="flex w-full items-center justify-center p-[20px] text-[30px]">
          Items
        </div>
        <input
          className="w-full rounded-md border-[5px] border-solid border-yellow-400 m-[20px] p-[10px]"
          type="text"
          onChange={searchChanged}
          placeholder="Search "
        />
        <div className="flex w-full gap-[50px] bg-white border-[1px] border-solid border-gray-300 m-[20px] p-[10px] rounded-md">
          <button
            className="text-white bg-black rounded-md p-[10px]"
            onClick={() => {
              setCategoriesClicked(!categoriesClicked);
            }}
          >
            Categories
          </button>

          {categoriesClicked && (
            <div className="flex gap-[10px]">
              <button
                className="text-white bg-black rounded-md p-[10px]"
                onClick={() => {
                  setFilteredItems(
                    cartItem.filter((item) => item.tags.includes("Frozen-Food"))
                  );
                }}
              >
                Frozen-Food
              </button>
              <button
                className="text-white bg-black rounded-md p-[10px]"
                onClick={() => {
                  setFilteredItems(
                    cartItem.filter((item) => item.tags.includes("Fresh-Food"))
                  );
                }}
              >
                Fresh-Food
              </button>
              <button
                className="text-white bg-black rounded-md p-[10px]"
                onClick={() => {
                  setFilteredItems(
                    cartItem.filter((item) => item.tags.includes("Beverages"))
                  );
                }}
              >
                Beverages
              </button>
              <button
                className="text-white bg-black rounded-md p-[10px]"
                onClick={() => {
                  setFilteredItems(
                    cartItem.filter((item) => item.tags.includes("Home-Health"))
                  );
                }}
              >
                Home-Health
              </button>
              <button
                className="text-white bg-black rounded-md p-[10px]"
                onClick={() => {
                  setFilteredItems(
                    cartItem.filter((item) => item.tags.includes("Pet-Food"))
                  );
                }}
              >
                Pet-Food
              </button>
              <button
                className="text-white bg-black rounded-md p-[10px] min-w-[60px]"
                onClick={() => {
                  setFilteredItems(cartItem);
                }}
              >
                All
              </button>
            </div>
          )}
          <button
            className="text-white bg-slate-600 rounded-md p-[10px] min-w-[60px] flex justify-end"
            onClick={() => {
              setFilteredItems(cartItem.sort((a, b) => a.price - b.price));
            }}
          >
            Filter by price
          </button>
        </div>
        <div className="h-[600px] overflow-scroll border-[1px] border-solid rounded p-[15px]">
          <div className="grid grid-cols-6 xl1:grid-cols-5 xl2:grid-cols-4 xl3:grid-cols-3 xl4:grid-cols-2 xl5:grid-cols-1 justify-center items-start gap-[20px] ">
            {filteredItems.map((items, index) => {
              return <Items id={index} items={items} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-[200px] bg-yellow-400 flex flex-col justify-center p-[10px] gap-[5px]">
        <div className="flex justify-center gap-[5px]">
          <div className="text-[20px] w-max rounded p-[5px] text-slate-950 ">Your Cart Items</div>
          {/* <div className="text-[30px]">{totalCount}</div> */}
        </div>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.itemName + " - " + item.count}</li>
          ))}
        </ul>
        
      {cartItems.length > 0 && (  <a href="/checkout" className="text-[25px] p-[5px] rounded text-yellow-400 flex justify-center bg-slate-50">
        Checkout
      </a>          
       )}
      </div>
    </div>
  );
}
