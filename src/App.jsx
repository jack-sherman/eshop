import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";
import Success from "./pages/Success";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />

          <Route
            path="/Register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />

          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
