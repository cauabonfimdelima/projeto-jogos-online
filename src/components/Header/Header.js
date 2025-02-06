import { Link } from "react-router-dom";
import "./header.css"

function Header(){
    return(
        <header>
            <Link className="logo" to="/">Jogos Online</Link>
            <Link className="cart" to="/cart">Meu Carrinho</Link>
        </header>
    )
}

export default Header;