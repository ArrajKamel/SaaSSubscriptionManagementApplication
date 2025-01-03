import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import { UserProvider } from './Context/useAuth';
import { ToastContainer } from 'react-toastify';


const App: React.FC = () => {
  return (
    <>
      <UserProvider>
        <NavBar />
        <div className="app-wrapper">
          <Outlet /> {/* This renders the currently matched route */}
        </div>
        <ToastContainer />
      </UserProvider>
    </>
  );
};

export default App;
