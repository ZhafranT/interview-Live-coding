import './App.css';
import Login from './Login';
import Home from './Home';
import { useState } from 'react';

function App() {
   const [switchPage, setSwitchPage] = useState('login');

   const changePage = (btnLogin) => {
      setSwitchPage(btnLogin);
   };
   
   return <div className="App">{switchPage === 'login' ? <Login /> : <Home />}</div>;
}

export default App;
