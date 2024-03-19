
import {useState} from 'react';
import Testing from "./Testing";
import Testing2 from "./Testing2";
import { hover } from '@testing-library/user-event/dist/hover';
function ReferralIndex(){
    const [loginHovered,setLoginHovered]=useState(false);
    const [signupHovered,setSignupHovered]=useState(false);
    const [showingTab,setShowingTab]=useState(true);
    return (
        <>
            <div className="container-fluid" style={{marginTop:'15%'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4">
                                    <h4 onClick={()=>setShowingTab(true)} style={loginHovered?{textAlign:'center',cursor:'pointer',color:"blue"}:{textAlign:'center'}} onMouseEnter={()=>setLoginHovered(true)} onMouseLeave={()=>setLoginHovered(false)}>Login</h4>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4">
                                    <h4 onClick={()=>setShowingTab(false)} style={signupHovered?{textAlign:'center',cursor:'pointer',color:"blue"}:{textAlign:'center'}} onMouseEnter={()=>setSignupHovered(true)} onMouseLeave={()=>setSignupHovered(false)}>Signup</h4>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                        </div>
                        {
                            showingTab ?
                            <div className="col-lg-12">
                                <Testing/>
                            </div>
                            :
                            <div className="col-lg-12">
                                <Testing2/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReferralIndex;