import logo from './logo.svg';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Router from './Routes/Router';
import SignUp from './Pages/SignUp';
import Dashboard from './Components/Dashboard';

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
