import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Pagamento from "./pages/Payment";
import Erro from "./pages/Erro";
import Footer from "./components/Footer/Footer";


function RoutesApp(){
    return(
        <BrowserRouter>
        
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/payment" element={<Pagamento/>}/>
        <Route path="*" element={<Erro/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;