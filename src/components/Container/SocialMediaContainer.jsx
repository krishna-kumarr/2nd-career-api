import React from "react";
import Image from "../Image/Image";
import Images from "../../utils/images";
import { Link } from "react-router-dom";
import axios from "axios";

const SocialMediaContainer = ({ formVia }) => {
  
  const signUpWithGoogle = async (form) => {
    switch (form) {
      case "signup":
        window.location.href = "http://secondcareers.adraproductstudio.com:5000/google_signin?&user_role=professional";
        break;
      case "login":
        console.log(form);
        break;
      default:
        break;
    }
  };

  const getSignUpDetailsFromGoogle = async () => {
    window.location.href = "http://10.10.24.2:5000/google_signup?&user_role=professional";
      
  };

  return (
    <>
      <div className="card my-4 position-relative">
        <span className="position-absolute top-0 start-50 translate-middle bg-white px-2">
          OR
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>
      <div className="d-flex justify-content-evenly social-signup">
        <div className="card px-4 ">
          <div
            className="card-body text-center"
            onClick={() => signUpWithGoogle(formVia)}
          >
            <Link
              to="/role-selector/professional/google-signup"
              data-testid="google-link"
            >
              <Image
                src={Images.googleIcon}
                width={30}
                height={30}
                className="img-responsive"
                altText="google icon"
              />
            </Link>
          </div>
        </div>
        <div className="card px-4 ">
          <div className="card-body text-center">
            <Link
              to="/role-selector/professional/linkedIn-signup"
              data-testid="linkedIn-link"
            >
              <Image
                src={Images.linkedIcon}
                width={30}
                height={30}
                className="img-responsive"
                altText="LinkedIn Icon"
              />
            </Link>
          </div>
        </div>
        <div className="card px-4 ">
          <div className="card-body text-center">
            <Link
              to="/role-selector/professional/apple-signup"
              data-testid="apple-link"
            >
              <Image
                src={Images.appleIcon}
                width={30}
                height={30}
                className="img-responsive"
                altText="apple Icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaContainer;
