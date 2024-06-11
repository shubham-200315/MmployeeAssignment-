import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LandingPage from './components/LandingPage';

function App() {
  return (
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/login" element={<SignupForm/>}></Route>
          </Routes>
      
          </BrowserRouter>
  );
}

export default App;
