import React from "react";
import "../Style/Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signIn } from "../Services/userService";
import { useState } from "react";
import axios from "axios";
import { useColorScheme } from "@mui/material";

export default function Login() {
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]{2,})\.[a-z]*$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
  const [userDetail, setUserDetails] = useState({
    email: "",
    password: "",
    service: "advance",
  });
  const navigate = useNavigate();
  const [checkError, setCheckError] = useState({
    EmailTrue: false,
    EmailError: "",
    PasswordTrue: false,
    PasswordError: "",
  });

  const handleChange = (e) => {
    console.log("handleChange", e, userDetail);
    // setUserDetails(e.target.value);
    const { name, value } = e.target;
    console.log(name, value);
    if (name == "userName") {
    }
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // signIn(userDetail);
    let emailTest = emailRegex.test(userDetail.email);
    let passwordTest = passwordRegex.test(userDetail.password);
    if (emailTest === false) {
      setCheckError({
        EmailTrue: true,
        EmailError: "Please Enter valid Email",
      });
    } else if (passwordTest === false) {
      setCheckError({
        PasswordTrue: true,
        PasswordError: "Incorrect Password",
      });
    }
    // navigate('/dashboard')
    if (emailTest === true && passwordTest === true) {
      try {
        let response = await signIn(userDetail);
        console.log(response.data.id);
        localStorage.setItem("token", response.data.id);
        // console.log(response.data)

        return navigate("/dashboard");
      } catch (err) {
        toast.error("Invalid credentials");
      }
    }
  };

  return (
    <div className="Login-Container">
      <div className="Login-Box">
        <div className="title">
          <div>
            <h4>
              <span>Google</span>
              <br></br>Login
            </h4>
            <p>Use Your Google Account</p>
          </div>
        </div>
        <form>
          <div className="Input">
            <div className="text">
              <TextField
                require
                id="outlined-required"
                label="Required"
                placeholder="Email or phone*"
                onChange={(e) => handleChange(e)}
                name="email"
              ></TextField>
            </div>
            <div>
              <TextField
                require
                id="outlined-required"
                label="Required"
                placeholder="Password*"
                onChange={(e) => handleChange(e)}
                name="password"
              ></TextField>
            </div>
            <div id="forgot">
              <a href="#">forgot Password</a>
            </div>
            <div>
              <div className="Login">
                <a href="http://localhost:3000/signup">Create account</a>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
