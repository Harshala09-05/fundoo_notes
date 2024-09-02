import React, { useState } from 'react';
import '../Style/SignUp.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleImage from '../Assets/Google.png';
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
    service: "advance"
  });

  const [showPassword, setShowPassword] = useState(false);

  const [checkError, setCheckError] = useState({
    firstNameTrue: false,
    firstNameError: "",
    lastNameTrue: false,
    lastNameError: "",
    EmailTrue: false,
    EmailError: '',
    PasswordTrue: false,
    PasswordError: '',
    confirmPasswordTrue: false,
    confirmPasswordError: "",
  });

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState, [name]: value
    }));

    // Real-time validation
    if (name === "firstName") {
      if (nameRegex.test(value)) {
        setCheckError(prevState => ({
          ...prevState,
          firstNameTrue: false,
          firstNameError: ""
        }));
      } else {
        setCheckError(prevState => ({
          ...prevState,
          firstNameTrue: true,
          firstNameError: "First name must start with a capital letter and have at least 3 characters"
        }));
      }
    }

    if (name === "lastName") {
      if (nameRegex.test(value)) {
        setCheckError(prevState => ({
          ...prevState,
          lastNameTrue: false,
          lastNameError: ""
        }));
      } else {
        setCheckError(prevState => ({
          ...prevState,
          lastNameTrue: true,
          lastNameError: "Last name must start with a capital letter and have at least 3 characters"
        }));
      }
    }

    if (name === "email") {
      if (emailRegex.test(value)) {
        setCheckError(prevState => ({
          ...prevState,
          EmailTrue: false,
          EmailError: ""
        }));
      } else {
        setCheckError(prevState => ({
          ...prevState,
          EmailTrue: true,
          EmailError: "Enter a valid email"
        }));
      }
    }

    if (name === "password") {
      if (passwordRegex.test(value)) {
        setCheckError(prevState => ({
          ...prevState,
          PasswordTrue: false,
          PasswordError: ""
        }));
      } else {
        setCheckError(prevState => ({
          ...prevState,
          PasswordTrue: true,
          PasswordError: "Password must contain at least 8 characters, including an uppercase letter, a number, and a special character"
        }));
      }
    }

    if (name === "confirm") {
      if (value === userDetail.password) {
        setCheckError(prevState => ({
          ...prevState,
          confirmPasswordTrue: false,
          confirmPasswordError: ""
        }));
      } else {
        setCheckError(prevState => ({
          ...prevState,
          confirmPasswordTrue: true,
          confirmPasswordError: "Passwords do not match"
        }));
      }
    }
  };

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    let firstNameTest = nameRegex.test(userDetail.firstName);
    let lastNameTest = nameRegex.test(userDetail.lastName);
    let emailTest = emailRegex.test(userDetail.email);
    let passwordTest = passwordRegex.test(userDetail.password);
    let confirmPasswordTest = userDetail.password === userDetail.confirm;

    if (firstNameTest && lastNameTest && emailTest && passwordTest && confirmPasswordTest) {
      try {
        let response = await signUp(userDetail);
        console.log(response.data);
        navigate('/');
      } catch (err) {
        toast.error('User already exists');
      }
    } else {
      toast.error('Please correct the errors before submitting');
    }
  };

  return (
    <div className="Register-container">
      <div className="Register-box">
        <div className="Filled">
          <div className="title">
            <h3>
              <span className="Logo">Google</span>
              <br />Create your Google Account
            </h3>
          </div>
          <div className="Input1">
            <TextField
              required
              id="outlined-required"
              label="First Name"
              placeholder='First Name'
              name="firstName"
              error={checkError.firstNameTrue}
              helperText={checkError.firstNameError}
              onChange={handleChange}
              value={userDetail.firstName}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              placeholder='Last Name'
              name="lastName"
              error={checkError.lastNameTrue}
              helperText={checkError.lastNameError}
              onChange={handleChange}
              value={userDetail.lastName}
            />
          </div>
          <div className="Input2">
            <TextField
              className='user'
              required
              id="outlined-required"
              label="Username"
              placeholder='Username'
              name="email"
              error={checkError.EmailTrue}
              helperText={checkError.EmailError}
              onChange={handleChange}
              value={userDetail.email}
            />
            <span className="UserText">
              You can use letters, numbers & periods
            </span>
            <a href="#" className="EmailText">
              Use my current email instead
            </a>
          </div>
          <div className="Input3">
            <TextField
              required
              id="outlined-required"
              label="Password"
              placeholder='Password*'
              type={showPassword ? "text" : "password"}
              name="password"
              error={checkError.PasswordTrue}
              helperText={checkError.PasswordError}
              onChange={handleChange}
              value={userDetail.password}
            />
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              placeholder='Confirm*'
              type={showPassword ? "text" : "password"}
              name="confirm"
              error={checkError.confirmPasswordTrue}
              helperText={checkError.confirmPasswordError}
              onChange={handleChange}
              value={userDetail.confirm}
            />
          </div>
          <span className="PasswordText">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </span>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Show Password"
              checked={showPassword}
              onChange={PasswordVisibility}
            />
          </FormGroup>
          <div className='Signup'>
            <a href='http://localhost:3000/'>Sign in instead</a>
            <Button variant="contained" onClick={submit}>Next</Button>
          </div>
        </div>
        <div className="Pic">
          <img src={GoogleImage} alt='Google' />
          <p>One account. All of Google working for you.</p>
        </div>
      </div>
    </div>
  );
}
