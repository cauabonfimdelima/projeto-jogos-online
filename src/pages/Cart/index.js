import { Link } from "react-router-dom";
import "./cart.css"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


function Cart(){
    
    const [paymentJogo, setPaymentJogo] = useState([]);
    const [jogo, setJogo] = useState([]);

    useEffect(()=>{
        const myCart = JSON.parse(localStorage.getItem("@jogosOnline")) || [];
        setJogo(myCart);
    }, [])
    
    function buyToGame(item){
        setPaymentJogo(item);
        localStorage.setItem("@payment", JSON.stringify(item))
       window.location.href = "/payment";
    }

    function ExcluirJogo(id){
       const RemoverJogo = jogo.filter((item) => {
        return (item.id !== id)
       })

       setJogo(RemoverJogo);
       localStorage.setItem("@jogosOnline", JSON.stringify(RemoverJogo));
       toast.success("Jogo removido!")

    }

    return(
        <div className="cart">
      <h2>Meu carrinho</h2>
      {jogo.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul className="games-cart">
          {jogo.map((item) => (
            <li key={item.id}>
                {/* <img src={item.poster}/> */}
                <div className="name-game">
                <span>{item.nome}</span>
                </div>
                <div className="buttons">
                <Link className="buy" onClick={() => buyToGame(item)}>Comprar</Link>
                <button onClick={()=> ExcluirJogo(item.id)}>Remover</button>
                </div>
            </li>
          ))}
        </ul>
      )}
    </div>  
  )
}

export default Cart;