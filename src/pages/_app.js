import { CartItemsProvider } from "@/context/cartItemsContext";
import { CounterProvider } from "@/context/counterContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CounterProvider>
      <CartItemsProvider>
        <Component {...pageProps} />
      </CartItemsProvider>
    </CounterProvider>
  );
}
