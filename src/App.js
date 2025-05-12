import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Layout />} >

      <Route index element={ <Home /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/dashboard' element={ <Dashboard /> } />

      </Route>

    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
