import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./Notification/NotificationService";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
