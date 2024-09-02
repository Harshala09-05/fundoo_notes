import logo from './logo.svg';
import './App.css';

import Login from './Pages/Login';
import Router from './Routes/Router';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import EditLabel from './Components/EditLabel';


function App() {
  // const name = "Hello"

  // const childToParent = (data) => {
  //   console.log("Child data", data)
  
  return (
  
    <div className="App">
      <Router/>
      
{/*     
      <Login></Login> */}
      {/* <SignUp/> */}
      
      {/* <Dashboard/> */}
    
    </div>
  );
}

export default App;
