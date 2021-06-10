import { useState } from "react";
import CartProvider from "./UI/store/CartProvider";
import { Cart } from "./Card/Cart";
import { Meals } from "./Card/Meals/Meals";
import { Header } from "./Layout/Header";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
     { cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
