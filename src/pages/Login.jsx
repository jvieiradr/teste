import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const irPara = useNavigate();
    const nome = 'José Vieira Costa Júnior';

    return(
        <>
            <h1>Esta é a Tela Inicial de Login !!!</h1>
            <hr />
            <button onClick={() => irPara('/primeira/' + nome)}>Primeiro</button>
            <button onClick={() => irPara('/segunda')}>Segundo</button>
        </>
    )
};