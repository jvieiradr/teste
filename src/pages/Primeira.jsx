import { useNavigate, useParams } from 'react-router-dom';

export const Primeira = () => {
    const irPara = useNavigate();
    const { nome } = useParams();

    return(
        <>
            <h1>Página Primeira - {nome} </h1>
            <hr />
            <button onClick={() => irPara('/')}>Voltar</button>
        </>
    )
};