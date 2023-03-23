import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { Primeira } from './pages/Primeira.jsx';
import { Segunda } from './pages/Segunda.jsx';

export const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/primeira/:nome' element={<Primeira />}  />
        <Route path='/segunda' element={<Segunda />}  />
      </Routes>
    </>
    )
};