import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Product" element={<ProductList/>} />
        <Route path="/Product/:id" element= {<Product/>} />
        <Route path="/Cart" element= {<Cart/>} />
        <Route path="/Register" element = {<Register/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/*" element= {<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;