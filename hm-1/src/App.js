import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='drift' element={<DriftPage />} />
        <Route path='timeattack' element={<TimeAttackPage />} />
        <Route path='forza' element={<ForzaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
