import { useEffect, useState } from "react"
import jogos from "../../services/api";
import "./payment.css"
import { toast } from "react-toastify";

function Pagamento(){

const [paymentJogo, setPaymentJogo] = useState(null);

useEffect(()=>{
    const jogo = JSON.parse(localStorage.getItem("@payment"));
    if(jogo){
        setPaymentJogo(jogo);
    }
}, []);


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cartao, setCartao] = useState('');
    const [dataValidade, setDataValidade] =  useState('');
    const [codigoSeguranca, setCodigoSeguranca] = useState('');


const handleSubmit = (e) =>{
    e.preventDefault();

    if(!nome || !email || !cartao || !dataValidade || !codigoSeguranca){
    alert("Todos os campos devem ser preechidos!")
    }
    else{
        toast.success("Pagamento concluído com sucesso!")
        window.location.href = "/"
    }

}

if(!paymentJogo){
    return <p>Jogo não encontrado!</p>
}

return(
    <div className="container">
    <div className="info">
        <article>
        <h1>Você está comprando: {paymentJogo.nome}</h1>
        <img src={paymentJogo.poster} alt={paymentJogo.nome}/>
        <p>Preço: {paymentJogo.preco}</p>
        </article>
        </div>
        

    <form onSubmit={handleSubmit} className="pagamento">
    
    <div>
        <label>Nome Completo</label>
        <br></br>
        <input type="text" 
        value={nome}
        onChange={(e)=>{setNome(e.target.value)}}
        placeholder="digite seu nome"/>
       </div>

    <div>
    <label>Email</label>
    <br></br>
        <input type="email" 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="insira seu email"/>
    </div>

    <div>
    <label>Cartão</label>
    <br></br>
        <input type="text" 
        value={cartao}
        onChange={(e)=>{setCartao(e.target.value)}}
        placeholder="número do cartão"/>
    </div>

    <div>
    <label>Data Validade (MM/AA)</label>
    <br></br>
        <input type="text" 
        value={dataValidade}
        onChange={(e)=>{setDataValidade(e.target.value)}}
        placeholder="MM/AA"/>
    </div>

    <div>
    <label>Código de Segurança</label>
    <br></br>
        <input type="text" 
        value={codigoSeguranca}
        onChange={(e)=>{setCodigoSeguranca(e.target.value)}}
        placeholder="Código Segurança"/>
    </div>

    <button type="submit">Confirmar</button>
    </form>

    </div>
    
);
};
export default Pagamento;





