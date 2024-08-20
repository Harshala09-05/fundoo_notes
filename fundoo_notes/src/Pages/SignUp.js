import React from 'react';
import '../Style/SignUp.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleImage from '../Assets/Google.png';
import { useState } from 'react';
import { signUp } from '../Services/userService';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
  const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]{2,})\.[a-z]*$/;
const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

  const [userDetail, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    service:"advance"
  });
 
  const [showPassword, setShowPassword] = useState(false);

  const [checkError, setCheckError] = useState({
    firstNameTrue: true,
    firstNameError:"",
    lastNameTrue: false,
    lastNameError:"",
    EmailTrue: false,
    EmailError: '',
    PasswordTrue: false,
    PasswordError: '',
    confirmPasswordTrue: false,
    confirmPasswordError:"",
  })
  
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
};

    const handleChange = (e) => {
      console.log("handleChange",e,userDetail);
      // setUserDetails(e.target.value);
      const { name, value } = e.target;
      console.log(name,value);
      if (name == "firstName") {
        
      }
      setUserDetails(prevState=>({
        ...prevState,[name]: value
      }))
  }
  const navigate = useNavigate();


  const submit = async(e) => {
    console.log("submit");
    console.log(userDetail);
    // signUp(userDetail);
    e.preventDefault();
        let firstNameTest = nameRegex.test(userDetail.firstName)
        let lastNameTest = nameRegex.test(userDetail.lastName)
        let emailTest = emailRegex.test(userDetail.email)
    let passwordTest = passwordRegex.test(userDetail.password);
    let confirmPasswordTest = userDetail.password === userDetail.confirm;
        if(firstNameTest === false) {
            setCheckError({
                firstNameTrue:true,
                firstNameError: 'First name must Start with a capital letter and must be minimum length of 3'
                
            })
        } else if(lastNameTest === false) {
            setCheckError({
                lastNameTrue:true,
                lastNameError:'Last name must start with a capital letter and must be minimum length of 3'
            })
        } else if(emailTest === false) {
            setCheckError({
                EmailTrue:true,
                EmailError: 'Enter Valid Email'
            })
        }   else if(passwordTest === false) {
            setCheckError({
                PasswordTrue:true,
                PasswordError: 'The Password must contain atleast 8 characters,One UppercaseLetter,One LowercaseLetter,One number and Special Character'
            })
        } else if(confirmPasswordTest ===(passwordTest !== userDetail.confirm== false)){
            setCheckError({
                confirmPasswordTrue:true,
                confirmPasswordError: 'Password does not match'
            })
    }
    // console.log(confirmPasswordTest);
    // navigate('/')
   
    if (firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true && confirmPasswordTest === true) {
      try {

          let response = await signUp(userDetail);
          console.log(response.data);
        return navigate('/');
      } catch (err) {
          toast.error('User Already Exists');
      }
  }
  
  }
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
                <TextField require id="outlined-required" label="Required" placeholder='First Name' name="firstName" error={checkError.firstNameTrue} onChange={(e)=>handleChange(e)}></TextField>
                <TextField require id="outlined-required" label="Required" placeholder='Last Name' name="lastName" error={checkError.lastNameTrue} onChange={(e)=>handleChange(e)}></TextField>
              </div>
              <div className="Input2">
                <TextField className='user' require id="outlined-required" label="Required" placeholder='Username'error={checkError.emailTest} defaultValue="" name="email"onChange={(e)=>handleChange(e)}></TextField>
                <span className="UserText">
                  you can use letters,numbers & periods
                </span>
                <a href="#" className="EmailText">
                  Use my current email instead
                </a>
              </div>
              <div>
              <div className="Input3">
                  <TextField require id="outlined-required" label="Required" placeholder='Password*' defaultValue=""  name ="password" error={checkError.PasswordTrue} onChange={(e)=>handleChange(e)}></TextField>
              <TextField require id="outlined-required" label="Required"  placeholder='Confirm*'defaultValue="" name ="confirm" error={checkError.confirmPasswordTrue} onChange={(e)=>handleChange(e)}></TextField>
              </div>
                <span className="PasswordText">
                  Use 8 or more characters with a mix of letters, numbers & symbols
                </span>
              </div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Show Password" checked={showPassword} onChange={PasswordVisibility} />
              </FormGroup>
              <div className='Signup'>
                <a href='http://localhost:3000/'>Sign in instead</a>
              <Button variant="contained" href="#contained-buttons" onClick={submit} >Next</Button>
            
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
