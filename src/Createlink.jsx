import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './SignUpForm.css';
import { TextField, Button } from "@mui/material";

const Icondata = () => {
  return (
    <div className="pe-2">
      <img
        src="https://flagcdn.com/w20/in.png"
        alt=""
        srcSet="https://flagcdn.com/w40/in.png"
      />
    </div>
  );
};

const Createlink = () => {
  const { referrerId } = useParams();
  const [mobile, setMobile] = useState("");
  const [referralLink, setReferralLink] = useState("");

  const handleSubmit = () => {
    if (mobile.length >= 10 && mobile !== "") {
      axios({
        method: "post",
        data: {
          mobile: mobile,
          referrer_id: referrerId
        },
        url: "http://inde.physioplustech.in/r/new"
      })
        .then((res) => {
          setReferralLink(res.data.link);
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }
  };

  const shareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "Referral Link",
        text: "Check out this referral link",
        url: `http://inde.physioplustech.in/c/register/${referralLink}`
      })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Web Share API not supported');
    }
  };

  return (
    <div className="container-2">
      <div className="row">
        <div className="col">
          <h2>Generate new referral link</h2>
          <div>
            <label htmlFor="mobile">Mobile</label>
          </div>
          <div className="text-center">
            <TextField
              InputProps={{
                startAdornment: <Icondata />,
                style: { color: "white" }
              }}
              id="mobile"
              className="input-login px-10"
              label="Mobile"
              variant="outlined"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              style={{ color: "white", width: "100%" }}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Generate link
          </button>
          {referralLink && (
            <div>
              <p>
                Generated referral link:{" "}
                <a
                  href={`/register/${referralLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://inde.physioplustech.in/c/register/{referralLink}
                </a>
              </p>
              <button className="btn btn-secondary" onClick={shareLink}>
                Share link
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Createlink;
