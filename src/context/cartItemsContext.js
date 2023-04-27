import React, { useContext, useState } from "react";

export const cartItemContext = React.createContext({
  cartItems: [],
  setCartItems: () => {},
});

export function useCartItems() {
  const { cartItems, setCartItems } = useContext(cartItemContext);

  return {
    cartItems,
    setCartItems,
  };
}

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <cartItemContext.Provider
      value={{ cartItems, setCartItems: setCartItems || (() => {}) }}
    >
      {children}
    </cartItemContext.Provider>
  );
};

// export const cartItemContext = React.createContext({
//   cartItems: [{ itemName: "", count: 0 }],
//   setCartItems: () => {},
// });

// export function useCartItems() {
//   const { cartItems, setCartItems } = useContext(cartItemContext);

//   return {
//     cartItems,
//     setCartItems,
//   };
// }

// export const CartItemsProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([{}]);
//   return (
//     <cartItemContext.Provider value={{ cartItems, setCartItems }}>
//       {children}
//     </cartItemContext.Provider>
//   );
// };
