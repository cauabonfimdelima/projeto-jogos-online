import { useEffect, useState } from "react";
import jogos from "../../services/api";
import './home.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import axios from "axios";


function Home(){

    const [paymentJogo, setPaymentJogo] = useState([]);
    const [cartJogos, setCartJogos] = useState([]);


    useEffect(()=>{
        const salvarCart = JSON.parse(localStorage.getItem("@jogosOnline")) || [];
        setCartJogos(salvarCart);
    }, [])


    function buyToGame(jogo){
        setPaymentJogo(jogo);
        localStorage.setItem("@payment", JSON.stringify(jogo))
       window.location.href = "/payment";
    }

    

    function addToCart(jogo){
        const existing = cartJogos.some((cartJogos) => cartJogos.id === jogo.id)

        if(existing){
            toast.warn("Já existe no seu carrinho!")
            return;
        }

       const updateCart = [...cartJogos, jogo];
       setCartJogos(updateCart);
       localStorage.setItem("@jogosOnline", JSON.stringify(updateCart))
       toast.success("Adicionado ao carrinho!")
    }


    return(
        <div className="container">
            <div className="lista-jogos">
                {jogos.map((jogo)=>{
                    return(
                        <article key={jogo.id}>
                            <strong>{jogo.nome}</strong>
                            <img src={jogo.poster} alt={jogo.nome}/>
                            <div className="buttons-payment">
                            <Link className="buy" onClick={() => buyToGame(jogo)}>Comprar</Link>
                            <Link className="cart" to="" onClick={() => addToCart(jogo)}>
                            <img  src="../../../assets/cart.png"/>
                            </Link>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
