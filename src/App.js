
import './App.css';
import {  Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <BrowserRouter>
    <Suspense
      fallback={
        <div className="loading-center">
        <div className="loader ">
        <span className="loader__element"></span>
        <span className="loader__element"></span>
        <span className="loader__element"></span>
      </div>
      </div>
      }
    >
      <Routes>
    
        <Route path="/" index element={<HomePage />} />

      </Routes>
    </Suspense>
    <Routes>
   
    </Routes>
  </BrowserRouter>

  );
}

export default App;
