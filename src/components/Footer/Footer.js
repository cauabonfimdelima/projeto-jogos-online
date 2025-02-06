import { Link } from "react-router-dom";
import "./footer.css"

function Footer(){
    return(
        <footer> 
        <Link className="logo" to="/">Jogos Online</Link>
            <ul>
            <li><span>Siga-me em minhas redes sociais</span></li>
            <li><a href="https://www.linkedin.com/in/cau%C3%A3-bonfim-de-lima-891b30304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Linkedin</a></li>
            <li><a href="https://www.instagram.com/cauabonfim_/" target="_blank">Instagram</a></li>
            </ul>

        </footer>
    )
}

export default Footer;