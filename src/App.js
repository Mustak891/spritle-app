import './App.css';
import ResponsiveAppBar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Signup/Signup';
import Home from './components/Home/Home';
import Dash from './components/Dashboard/Dash/Dash';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dash />} />
      </Routes>
    </div>
  );
}



export default App;
