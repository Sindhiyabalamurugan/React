import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";
import './SignUpForm.css';


const Register = () => {
  const [fullName, setfullName] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [btnClicked, setbtnClicked] = useState(false);
 ;
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [otp, setotp] = useState("");
  const [sentOtp, setsentOtp] = useState("");
  const [snackbarContent, setsnackbarContent] = useState("");
  const [referrer_id, setreferrer_id] = useState(0);
  const [link_id, setlink_id]=useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    getmobileNumber();
  }, []);

  const getmobileNumber = () => {
    axios({
      method: "post",
      url: "http://localhost:3002/c/getlinkreferral",
      data: {
        link: id
      }
    })
      .then((res) => {
        console.log(res.data);
        setmobile(res.data.mobile);
        setreferrer_id(res.data.referrer_id);
        setlink_id(res.data.link_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSendOTP = () => {
    setbtnClicked(true);

    let digits = "0123456789";
    let generatedOtp = "";
    for (let i = 0; i < 6; i++) {
      generatedOtp += digits[Math.floor(Math.random() * 10)];
    }

    setsentOtp(generatedOtp);
    setsnackbarContent(
      `OTP has been sent to your whatsapp mobile number ${mobile}`
    );

    handleClick();
    const obj = {
      fullname: fullName,
      mobile: mobile,
      email: email,
      password: password,
      otp: generatedOtp,
      
      candidateotp: true
    };

    axios({
      method: "post",
      url: "http://localhost:3002/c/otp",
      data: obj
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(obj);
  };

  const handleSubmit = () => {
    if (otp == sentOtp) {
      const obj = {
        fullname: fullName,
        mobile: mobile,
        email: email,
        password: password,
        otp: sentOtp,
        candidateotp: true,
        referrer_id: referrer_id,
        link_id:link_id
      };

      axios({
        method: "post",
        url: "http://localhost:3002/c/signup",
        data: obj
      })
        .then((res) => {
          console.log("message sent ", res.data);
          if (res.data.id) {
            alert("account created successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Entered OTP is incorrect ");
    }
  };

  return (
    <>
    <div className="container-2">
      <div className="login-parent">
        <div className="login-left">
          <div className="login-left-child"></div>
        </div>
        <div className="login-outline login-right">
          <div className="logo-img">
          <h1>Signup as </h1>
          </div>
          
          {!btnClicked && (
            <>
              <div className="login-outer-input w-100 input-container">
                <TextField
                  id="outlined-basic"
                  className="input-login"
                  label="Full Name"
                  variant="outlined"
                  onChange={(e) => {
                    setfullName(e.target.value);
                  }}
                />
              </div>
              <div className="login-outer-input w-100 input-container">
                <TextField
                  id="outlined-controlled"
                  className="input-login"
                  label="Mobile number"
                  InputProps={{
                    readOnly: true
                  }}
                  value={mobile}
                  onChange={(event) => {
                    setmobile(event.target.value);
                  }}
                />
              </div>
              <div className="login-outer-input w-100 input-container">
                <TextField
                  id="outlined-basic"
                  className="input-login"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>
              <div className="login-outer-input w-100 input-container">
                <TextField
                  id="outlined-basic"
                  className="input-login"
                  label="Password"
                  variant="outlined"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>
              <div className="login-outer-input input-container">
                <Button
                  onClick={handleSendOTP}
                  variant="contained"
                  className="input-login"
                  size="large"
                  disableElevation
                >
                  Send OTP
                </Button>
              </div>
            </>
          )}
          {btnClicked && (
            <>
              <div className="login-outer-input w-100 input-container">
                <TextField
                  id="outlined-basic"
                  className="input-login"
                  label="OTP"
                  variant="outlined"
                  onChange={(e) => {
                    setotp(e.target.value);
                  }}
                />
              </div>
              <div className="login-outer-input">
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  className="input-login"
                  size="large"
                  disableElevation
                >
                  Create account
                </Button>
              </div>
            </>
          )}
          <div className="w-100 d-flex justify-content-center align-items-center">
            <div className="w-50 ">
              <div className="d-flex justify-content-end align-items-center">
                Already have an account? &nbsp;{" "}
                <Link to ="/c/login">Login</Link>
            </div>
        </div>
      </div>
  </div>
</div>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
<Alert
onClose={handleClose}
severity="success"
variant="filled"
sx={{ width: "100%" }}
> 
{snackbarContent}
</Alert>
</Snackbar>
</div>
</>
);
};

export default Register;
