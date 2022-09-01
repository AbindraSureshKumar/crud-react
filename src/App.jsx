import logo from "./logo.svg";
import "./App.css";
import "./css/sb-admin-2.css";
import Products from "./Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./Portal";
import CreateProduct from "./CreateProduct";
import Productview from "./Productview";
import EditProduct from "./EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />}>
          <Route path="/products" element={<Products />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="products/:id" element={<Productview />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
