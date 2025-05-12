import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './componentes/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Routes>

            <Route path='/' element={<Layout />} >

              <Route path='/dashboard' element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />

              <Route path='/login' element={<Login />} />
              <Route index  path='/' element={<Home />} />

            </Route>

          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
