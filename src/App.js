import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import KishanDashboard from '../src/pages/Iot/KishanDashbord'
import Mart from './pages/mart/Mart';
import Cart from './pages/mart/Cart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Learn */}
      <Route path='learn/' element={<>learn</>}/>
      {/* Mart */}
      <Route path='mart/' element={<Mart/>}/>
      <Route path='mart/cart' element={<Cart/>}/>
      {/* Iot */}
      <Route path='/' element={<KishanDashboard/>}/>
      <Route path='iot/' element={<></>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
