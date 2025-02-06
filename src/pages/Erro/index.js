import './erro.css'
import { Link } from 'react-router-dom';

function Erro(){
    return( 
        <div className='not-found'>
            <h1>Erro 404</h1>
            <span>Essa página não existe</span>
            <Link to="/">Voltar para Jogos</Link>
        </div>
    )
}

export default Erro;