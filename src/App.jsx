import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";
import NotFound from "./pages/NotFound.jsx";
import Product from "./pages/Product.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";

function App() {
    return (
        <div className="app lg:w-9/12 md:w-9/12 m-auto bg-white h-auto">
            <Router>
                <Header/>
                <div>
                    <hr/>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/product/:product_id" element={<Product />}/>
                    <Route path="/cart" element={<ShoppingCart />}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <div>
                    <hr/>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
