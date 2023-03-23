import { useNavigate } from 'react-router-dom';

export const Segunda = () => {
    const irPara = useNavigate();

    return(
        <>
            <h1>Página Segunda</h1>
            <hr />
            <button onClick={() => irPara('/')}>Voltar</button>
        </>
    )
};