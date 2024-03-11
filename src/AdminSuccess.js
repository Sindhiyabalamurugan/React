import { useNavigate } from "react-router-dom";
function AdminSuccess(){
    const navigate=useNavigate();

    setTimeout(()=>{
        navigate('/');
    },5000);
    
    return (
        <div className="container-fluid" style={{marginTop:'10%'}}>
            <div className="container">
                <div className="alert alert-success">
                    <div className="row">
                        <div className="col-lg-12">
                            <center><h4 style={{color:'black'}}>Thank you for contacting us.</h4></center><br/>
                        </div>
                        <div className="col-lg-12">
                            <p>We appreciate that you have the taken time to write us.</p>
                        </div>
                        <div className="col-lg-12">
                            <p>We will get back to you soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminSuccess;