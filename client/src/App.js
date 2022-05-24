import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import Home from './screen/Home';
import Welcome from './screen/welcome';



function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/welcome" exact element={<Welcome/>}/>
      <Route path="/login"   exact element={ <LoginScreen />} />
      <Route path="/register" exact element={<RegisterScreen />} />
     </Routes>
     </BrowserRouter>
     </div>
  );
}

export default App;
