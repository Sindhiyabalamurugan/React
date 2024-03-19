import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";
function Testing(){
    const [isMobileValid,setIsMobileValid]=useState(true);
    const [mobileError,setMobileError]=useState('*Please Enter a Mobile Number');

    const[loginArea,setLoginArea]=useState(false);
    const [loadingSendOtpButton,setLoadingSendOtpButton]=useState(false);
    const [loadingLoginButton,setLoadingLoginButton]=useState(false);

    const handleChange = (e) => {
        let value=e.target.value;
        if(value.length===0){
            setMobileError('*Please Enter a Mobile Number');
            setIsMobileValid(false);
        }
        else if(value.length<10){
            setMobileError('*Mobile number is 10 digits long');
            setIsMobileValid(false);
        }
        else
        setIsMobileValid(true);
    };

    const handleClick = (e) => {
        switch(e.target.id){
            case 'sendotp':
                let inputField=document.querySelector('.input');
                let mobileFilled=true;
                if(inputField.value.length===0 || inputField.classList.contains('is-invalid')){
                    inputField.focus();
                    mobileFilled&&=false;
                    setIsMobileValid(false);
                }
                if(mobileFilled){
                    setLoadingSendOtpButton(true);
                    e.target.disabled=true;
                    inputField.readOnly=true;
                
                    let userObj={mobile:`${document.getElementById('mobile').value}`}
                    setTimeout(async()=>{
                        const response = await axios.post('http://localhost:3001/login',userObj);
                        if(response.data.account==='found'){
                            setLoadingSendOtpButton(false);
                            e.target.disabled=false;
                            setLoginArea(true);
                        }
                        else{
                            inputField.readOnly=false;
                            setMobileError('*User not exist');
                            setIsMobileValid(false);
                            setLoadingSendOtpButton(false);
                            e.target.disabled=false;
                        }
                    },5000);   
                }
            break;
            case 'login':
                let otpFields=document.querySelectorAll('.otp');
                let otpEntered=true;
                for(let i=0;i<otpFields.length;++i){
                    if(otpFields[i].value.length===0 || otpFields[i].classList.contains('is-invalid')){
                        otpFields[i].focus();
                        break;
                    }
                }
                if(otpEntered){
                    setLoadingLoginButton(true);
                    e.target.disabled=true;

                    let otpGenerated="";
                    otpFields.forEach((otpField)=>{
                        otpGenerated+=otpField.value;
                        otpField.readOnly=true;
                    });
                    let userObj={mobile:`${document.getElementById('mobile').value}`,otpGenerated,from:"login"}
                    setTimeout(async()=>{
                        const response = await axios.post('http://localhost:3001/verifyOtp',userObj);
                        setLoadingLoginButton(false);
                        e.target.disabled=false;
                        if(response.data.loginned==='successfully')
                        alert('Loginned Successfully');
                        e.target.disabled=false;
                        setLoadingLoginButton(false);
                    },5000);
                }
            break;
            default:
        }
    };

    return (
        <>
            <div className="container-fluid" style={{margin:'20% 0% 20% 0%'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 style={{textAlign:'left'}}>LOGIN</h1>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input
                                    placeholder=""
                                    id="mobile"
                                    maxLength={10}
                                    className={`form-control ${isMobileValid?"":"is-invalid"} input`}
                                    onChange={handleChange}
                                />
                                <label style={{fontWeight:'normal'}}>Mobile</label>
                                {!isMobileValid && <div className="invalid-feedback">{mobileError}</div>}
                            </div>
                        </div>
                        {loginArea ?
                        <div>
                            <div className="col-12 alert alert-info">
                                <p>Dont refresh the page</p>
                                <p>We sent a OTP to the mobile number</p>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="row"><p style={{textAlign:'center'}}>Enter the OTP</p></div>
                                <div className="row" style={{width:'50%',margin:'auto'}}>
                                    <div className="col-2"><input className="otp" type="text" maxLength="1"/></div>
                                    <div className="col-2"><input className="otp" type="text" maxLength="1"/></div>
                                    <div className="col-2"><input className="otp" type="text" maxLength="1"/></div>
                                    <div className="col-2"><input className="otp" type="text" maxLength="1"/></div>
                                    <div className="col-2"><input className="otp" type="text" maxLength="1"/></div>
                                    <div className="col-2"><input className="otp" type="text" maxLength="1"/></div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <button id="login" onClick={handleClick} className="btn btn-primary" style={{width:"50%",marginLeft:'25%',height:"40px"}} >
                                {loadingLoginButton ?
                                <CircularProgress size={24} style={{color:'white'}}/>
                                :
                                "Login"
                                }
                                </button>
                            </div>
                        </div>
                        :
                        <div className="col-12 mt-3">
                            <button id='sendotp' style={{width:'20%',height:'40px'}} className="btn btn-primary" onClick={handleClick}>
                                {loadingSendOtpButton ?
                                    <CircularProgress size={24} style={{color:'white'}}/>
                                    :
                                    "Send Otp"
                                }
                            </button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testing;