import React from 'react'
import{BrowserRouter as Router , Routes , Route } from 'react-router-dom' ;
import Login from './Screens/Login/Login';
import Dashboard from './Screens/Dashboard/Dashboard';
import Register from './Screens/Register/Register';
import LDashboard from './Screens/Loggedin_mp/LDashboard';
import MPC_DB from './Screens/Dashboard/MPC_DB';
import Bgr from './Screens/BackgroundRemover/Bgremover'
import PopUp from './components/Dropzone/PopUp';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<MPC_DB/>}/>
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>}/> 
          <Route path='/LDashboard' element={<LDashboard/>}/> 
      </Routes>
      
    </Router>
  );
}

export default App;
