
import React, { useEffect, useState } from 'react';
import '../Style/Register.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleImage from '../Assets/Google.png';

export default function Register() {
  const NameRegex = "/^[A-ZÀ-ÿ][-,a-z. ']+[ ]*)+";
  // const userName = "[A-Za-z][A-Za-z0-9_]{7,29}$";
  // const Password = "[a-zA-Z0-9!@#$%^&*]{6,16}$";
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirm: "",
  });
  const [showPassword, setPassword] = useState(false);
  const [formErrors, setformErrors] = React.useState({
    firstNameTrue: false,
    firstNameError: "Required firstName",
  });
}

const handleChange = (e) => {
  setformData({
    ...formData,
    [e.target.name]: value
  })
}
const submit = (e) => {
  e.preventDefault();
  let firstNameCheck = NameRegex.test(formData.firstName);
  // let lastNameCheck = NameRegex.test(formData.lastName);
  // let userNameCheck = NameRegex.test(formData.userName);
  // let passwordCheck = NameRegex.test(formData.password);
  // let confirmCheck = NameRegex.test(formData.confirm);
  if (firstNameCheck == false) {
    setformErrors({
      firstNameTrue: true,
      firstNameError:"It's not valid"
    })
  }


  //  const {abc, childToParent} = props
  // const [userDetails, setUserDetails] = useState({ name: "", lname: "" })
  
  // useEffect(() => {
  //   console.log("Data", abc)
  //   childToParent("Data from child")
  // },[])
  return (
    <div className="Register-container">
      <div className="Register-box">
        <div className="Filled">
          <div className="title">
            <h3>
              <span className="Logo">Google</span>
              <br></br>Create your Google Account
            </h3>
          </div>
          <div className="Input1">
            <TextField require id="outlined-required" label="Required" placeholder='First Name' name="firstName" value={formData.firstName} onChange={(e)=>handleChange(handleChange)}></TextField>
            <TextField require id="outlined-required" label="Required" placeholder='Last Name' value={formData.lastName} onChange={handleChange}></TextField>
          </div>
          <div className="Input2">
            <TextField className='user' require id="outlined-required" label="Required" placeholder='Username' defaultValue="" value={formData.userName} onChange={handleChange}></TextField>
            <span className="UserText">
              you can use letters,numbers & periods
            </span>
            <a href="#" className="EmailText">
              Use my current email instead
            </a>
          </div>
          <div>
          <div className="Input3">
              <TextField require id="outlined-required" label="Required" placeholder='Password*' defaultValue="" value={formData.password} onChange={handleChange}></TextField>
          <TextField require id="outlined-required" label="Required"  placeholder='Confirm*'defaultValue=""value={formData.confirm} onChange={handleChange}></TextField>
          </div>
            <span className="PasswordText">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>
          </div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Show Password" />
          </FormGroup>
          <div className='Signup'>
            <a href='#'>Sign in instead</a>
            <Button  variant="contained" href="#contained-buttons" onClick={submit} >Next</Button>
          </div>
        </div>
        <div className="Pic">
          <div><img src={GoogleImage} alt='Google'></img></div>
          <div><p>One account.All of Google working for you.</p></div>

          </div>
      </div>
    </div>
  );
}