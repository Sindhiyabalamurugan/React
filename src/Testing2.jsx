import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from 'axios';
function Testing2(){
    const [isNameValid,setIsNameValid]=useState(true);

    const [isMobileValid,setIsMobileValid]=useState(true);
    const [mobileError,setMobileError]=useState('*Please Enter a Mobile Number');

    const [isEmailValid,setIsEmailValid]=useState(true);
    const [emailError,setEmailError]=useState('*Please Enter a Email id');

    const [isDesinationValid,setIsDesignationValid]=useState(true);
    
    const [isInstituteValid,setIsInstituteValid]=useState(true);
    

    const [loadingSendOtpButton,setLoadingSendOtpButton]=useState(false);
    const [signupArea,setSignupArea]=useState(false);

    const [loadingSignupButton,setLoadingSignupButton]=useState(false);

    useEffect(()=>{
        let otpFields=document.querySelectorAll('.otp');
        const say_no_to_nonNumerics = (element) => element.target.value=element.target.value.replace(/\D/g,'');
        const handlePasteData = (element) => {
            let clipboardData = element.clipboardData.getData('text');
            let list=clipboardData.split('');
            for(let i=0;i<otpFields.length;++i){
                if(list[i]!=='' && !isNaN(list[i]))
                otpFields[i].value=list[i];
            }
            otpFields[otpFields.length-1].focus();
        }
        const moveToNext = (element) => {
            let currentElement=element.target;
            if(currentElement.value!=='' && !isNaN(element.target.value)){
                let nextElement=currentElement.parentElement.nextElementSibling;
                if(nextElement)
                nextElement.querySelector('input').focus();
            }
        }
        for(let i=0;i<otpFields.length;++i){
            if(i===0)
            otpFields[i].addEventListener('paste',handlePasteData);

            otpFields[i].addEventListener('input',say_no_to_nonNumerics);
            otpFields[i].addEventListener('input',moveToNext);
        }
        return () =>{
            for(let i=0;i<otpFields.length;++i){
                if(i===0)
                otpFields[i].removeEventListener('paste',handlePasteData);
    
                otpFields[i].removeEventListener('input',say_no_to_nonNumerics);
                otpFields[i].removeEventListener('input',moveToNext);
            }
        }
    }

    );

    const handleChange = (e) => {
        switch(e.target.id){
            case 'name':
                if(e.target.value!=='')
                setIsNameValid(true);
                else
                setIsNameValid(false);
            break;
            case 'mobile':
                if(e.target.value.length===0){
                    setMobileError('*Please Enter a Mobile Number');
                    setIsMobileValid(false);
                }
                else if(e.target.value.length<10){
                    setMobileError('*Mobile Number is 10 digits long');
                    setIsMobileValid(false);
                }
                else
                setIsMobileValid(true);
            break;
            case 'email':
                let email=e.target.value;   
                if(email.length===0){
                    setIsEmailValid(false);
                    setEmailError('*Please Enter a Email id');
                }
                else if(!email.endsWith('@gmail.com') && !email.endsWith('@outlook.com') && !email.endsWith('@yahoo.com')){
                    setIsEmailValid(false);
                    setEmailError('*Please Enter a Valid Email');
                }
                else
                setIsEmailValid(true);
            break;
            case 'designation':
                if(e.target.value.length!==0)
                setIsDesignationValid(true);
                else
                setIsDesignationValid(false);
            break;
            case 'institute':
                if(e.target.value.length!==0)
                setIsInstituteValid(true);
                else
                setIsInstituteValid(false);
            break;
            default:
        }
    };
    const setInputFieldsReadonly = (nodelist, boolstate) => {
        nodelist.forEach(field=>field.readOnly=boolstate);
    }
    const handleClick = (e) => {
        switch(e.target.id){
            case 'sendotp':
                let inputFields=document.querySelectorAll('.input');
                let everyInputFilled=true;
                for(let i=0;i<inputFields.length;++i){
                    if(inputFields[i].value.length===0 || inputFields[i].classList.contains('is-invalid')){
                        inputFields[i].focus();
                            switch(inputFields[i].id){
                                case 'name':
                                    setIsNameValid(false);
                                break;
                                case 'mobile':
                                    setIsMobileValid(false);
                                break;
                                case 'email':
                                    setIsEmailValid(false);
                                break;
                                case 'designation':
                                    setIsDesignationValid(false);
                                break;
                                case 'institute':
                                    setIsInstituteValid(false);
                                break;
                                default :
                            }
                        everyInputFilled&&=false;
                        break;
                    }
                }
                if(everyInputFilled){
                    setLoadingSendOtpButton(true);
                    e.target.disabled=true;
                    setInputFieldsReadonly(inputFields,true);
                    let userObj={
                        name : `${document.getElementById('name').value}`,
                        mobile : `${document.getElementById('mobile').value}`,
                        email : `${document.getElementById('email').value}`,
                        designation : `${document.getElementById('designation').value}`,
                        instituteName : `${document.getElementById('institute').value}`,
                    }
                   
                    setTimeout(async()=>{
                        const response = await axios.post('http://localhost:3001/signup',userObj);
                        if(response.data.added==='failure'){
                            setInputFieldsReadonly(inputFields,false);
                            setMobileError('User Already Exists');
                            setIsMobileValid(false);
                            document.getElementById('mobile').focus();
                            e.target.disabled=false;
                            setLoadingSendOtpButton(false);
                        }
                        else{
                            setInputFieldsReadonly(inputFields,true);
                            setSignupArea(true);
                            setTimeout(()=>document.querySelector('.otp').focus(),1);
                        }
                    },5000);
                }
            break;
            case 'signup':
                let otpFields=document.querySelectorAll('.otp');
                let everyOtpFilled=true;
                for(let i=0;i<otpFields.length;++i){
                    if(otpFields[i].value.length===0){
                        otpFields[i].focus();
                        everyOtpFilled&&=false;
                        break;
                    }
                }
                if(everyOtpFilled){
                    setInputFieldsReadonly(otpFields,true);
                    setLoadingSignupButton(true);
                    e.target.disabled=true;
                    let otp="";
                    otpFields.forEach(field=>otp+=field.value);
                    let userObj={
                        mobile:`${document.getElementById('mobile').value}`,
                        otpGenerated:otp,
                        from:'signup'
                    };
                    setTimeout(async()=>{
                        const response = await axios.post('http://localhost:3001/verifyOtp',userObj);
                        if(response.data.added==='success'){
                            alert('Account Created Successfully');
                            window.location.reload();
                        }
                        else{
                            e.target.disabled=false;
                            setLoadingSignupButton(false);
                            setInputFieldsReadonly(otpFields,false)
                        }
                    },5000);
                }                
            break;
            default:
        }
    };

    return(
        <>
            <div className="container-fluid" style={{margin:'20% 0% 20% 0%'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 style={{textAlign:'left'}}>SignUp</h1>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className={`form-control ${isNameValid?"":"is-invalid"} input`}
                                    placeholder=""
                                    id="name"
                                    onChange={handleChange}
                                />
                                <label style={{fontWeight:'normal'}}>Full Name</label>
                                {!isNameValid && (<div className="invalid-feedback">*Please Enter a Name</div>)}
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className={`form-control ${isMobileValid?"":"is-invalid"} input`}
                                    placeholder=""
                                    id="mobile"
                                    maxLength={10}
                                    onChange={handleChange}
                                />
                                <label style={{fontWeight:'normal'}}>Mobile</label>
                                {!isMobileValid && (<div className="invalid-feedback">{mobileError}</div>)}
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className={`form-control ${isEmailValid?"":"is-invalid"} input`}
                                    placeholder=""
                                    id="email"
                                    onChange={handleChange}
                                />
                                <label style={{fontWeight:'normal'}}>Email</label>
                                {!isEmailValid && (<div className="invalid-feedback">{emailError}</div>)}
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className={`form-control ${isDesinationValid?"":"is-invalid"} input`}
                                    placeholder=""
                                    id="designation"
                                    onChange={handleChange}
                                />
                                <label style={{fontWeight:'normal'}}>Designation</label>
                                {!isDesinationValid && (<div className="invalid-feedback">*Please Enter your Designation</div>)}
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className={`form-control ${isInstituteValid?"":"is-invalid"} input`}
                                    placeholder=""
                                    id="institute"
                                    onChange={handleChange}
                                />
                                <label style={{fontWeight:'normal'}}>Institute Name</label>
                                {!isInstituteValid && (<div className="invalid-feedback">*Please Enter your Institute Name</div>)}
                            </div>
                        </div>
                        {
                        signupArea ? 
                        <div className="col-12 mt-3">
                            <div className="row">
                                <div className="col-12 alert alert-info">
                                    <p>Dont refresh the page</p>
                                    <p>We sent a OTP to the mobile number</p>
                                </div>
                                <div className="col-12">
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
                                <div className="col-12 mt-3" style={{margin:'auto',width:'50%'}}>
                                    <button onClick={handleClick} id="signup" style={{width:'100%',height:'40px'}}className="btn btn-primary">
                                        {loadingSignupButton?<CircularProgress size={24} style={{color:"white"}}/>:"Signup"}
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="col-12 mt-4">
                            <button style={{width:'100%',height:'40px'}} id="sendotp" onClick={handleClick} className="btn btn-primary">
                                {loadingSendOtpButton ? 
                                    <CircularProgress size={24} style={{color:'white'}}/>
                                    :
                                    "Send OTP"
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

export default Testing2;