import React, { useRef, useState } from "react";
import FormInput from "../Input/FormInput";
import Input from "../Input/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import DateofBirth from "../Input/DateofBirth";
import toast from "react-hot-toast";
import axios from "axios";

const ProfessionalSignUpForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false)

  const [professionalSignupInputValues, setProfessionalSignupInputValues] =
    useState({
      firstName: "",
      lastName: "",
      emailID: "",
      countryCode: "",
      mobileNumber: "",
      dateOfBirth: "",
      country: "",
      city: "",
      password: "",
      confirmPassword: "",
    });

  const formRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const professionalSignupInputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      errorMessage: "Min 3-30 characters and avoid symbols",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      className: "form-control",
      dataTestid: "firstName",
      role: "firstName",
      alt: "firstName",
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Lastname",
      label: "Last Name",
      errorMessage: "Min 3-30 characters and avoid symbols",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      className: "form-control",
      dataTestid: "lastName",
      alt: "lastName",
    },
    {
      id: 3,
      name: "emailID",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "Please enter a valid email address",
      required: true,
      pattern: "^[a-z0-9]+@[a-z]+.[a-z]{2,3}$",
      className: "form-control",
      alt: "emailID",
      dataTestid: "emailID",
    },
    {
      id: 4,
      name: "mobileNumber",
      type: "number",
      placeholder: "Mobile Number",
      label: "Mobile Number",
      required: true,
      className: "form-control",
      errorMessage: "Mobile number should be entered",
      alt: "mobileNumber",
      pattern: "^([+]d{2})?d{10}$",
      dataTestid: "mobileNumber",
    },
    {
      id: 5,
      name: "dateOfBirth",
      type: "date",
      placeholder: "Date of Birth",
      label: "Date of Birth",
      required: true,
      className: "form-control",
      alt: "dateOfBirth",
      dataTestid: "dateOfBirth",
      errorMessage: "Date of Birth should be selected",
    },
    {
      id: 6,
      name: "country",
      type: "text",
      placeholder: "Country",
      label: "Country",
      required: true,
      className: "form-control",
      errorMessage: "Type atleast 4 characters",
      alt: "country",
      pattern: "^[A-Za-z0-9]{4,30}$",
      dataTestid: "country",
    },
    {
      id: 7,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City",
      required: true,
      className: "form-control",
      errorMessage: "Type atleast 4 characters",
      pattern: "^[A-Za-z0-9]{4,30}$",
      alt: "city",
      dataTestid: "city",
    },
    {
      id: 8,
      name: "password",
      type: showPassword ? "text" : "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      className: "form-control",
      errorMessage:
        "Password should contain 8-20 characters and it should have 1 letter,1 number and 1 special character",
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      alt: "password",
      dataTestid: "password",
    },
    {
      id: 9,
      name: "confirmPassword",
      type: showConfirmPassword ? "text" : "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      className: "form-control",
      errorMessage: "Confirm Password should match with Password",
      pattern: professionalSignupInputValues.password,
      alt: "confirmPassword",
    },
  ];

  const handlePhoneInput = (e, phone, contactno) => {
    setProfessionalSignupInputValues({
      ...professionalSignupInputValues,
      mobileNumber: e.slice(phone.dialCode.length),
      countryCode: phone.dialCode,
    });
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setLoading(true)    
    const profileRegisterParameters = {
      first_name: professionalSignupInputValues.firstName,
      last_name: professionalSignupInputValues.lastName,
      contact_number: professionalSignupInputValues.mobileNumber,
      country: professionalSignupInputValues.country,
      city: professionalSignupInputValues.city,
      dob: professionalSignupInputValues.dateOfBirth,
      email_id: professionalSignupInputValues.emailID,
      user_pwd: professionalSignupInputValues.confirmPassword,
    };

    try {
      await axios
        .post(
          "http://10.10.24.2:5000/professional_register",
          profileRegisterParameters
        )
        .then((response) => {
          console.log(response.data);
          setLoading(false)
          if (response.data.error_code === 0) {
            setSubmitted(true);
            formRef.current.reset();
            toast.success(response.data.message);
          } else {
            // toast(response.data.message, {
            //   icon: "👏",
            //   style: {
            //     borderRadius: "10px",
            //     background: "#333",
            //     color: "#fff",
            //   },
            // });
            toast.error(response.data.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setProfessionalSignupInputValues({
      ...professionalSignupInputValues,
      [e.target.name]: e.target.value,
    });
  };

  const onClickOne = () => {
    setShowPassword(!showPassword);
  };

  const onClickTwo = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const notify = () => toast("Here is your toast.");

  return (
    <form
      className="row signup-forms"
      ref={formRef}
      onSubmit={handleCreateAccount}
    >
      {professionalSignupInputs.map((professionalSignupInput) => {
        return (
          <React.Fragment key={professionalSignupInput.id}>
            {professionalSignupInput.name === "mobileNumber" ? (
              <div className="col-md-6 mt-2  ">
                <div className="form-floating">
                  <PhoneInput
                    id="floatingInput"
                    specialLabel="Mobile Number"
                    country={"in"}
                    dataTestid="mobileNumber"
                    countryCodeEditable={false}
                    enableSearch
                    onChange={(e, phone) =>
                      handlePhoneInput(e, phone, "contactno")
                    }
                    inputProps={{
                      alt: "mobileNumber",
                      type: "tel",
                      placeholder: "Mobile Number",
                    }}
                  />
                </div>

                <div
                  id="signup-error-message"
                  className="text-danger mt-2 signup-error-message professional-signup-error-message"
                >
                  {professionalSignupInput.errorMessage}
                </div>
              </div>
            ) : professionalSignupInput.name === "dateOfBirth" ? (
              <div className="col-md-6 mt-2 ">
                <DateofBirth
                  professionalSignupInputValues={professionalSignupInputValues}
                  setProfessionalSignupInputValues={
                    setProfessionalSignupInputValues
                  }
                />
              </div>
            ) : (
              <FormInput
                formInputDivClassName={
                  professionalSignupInput.name === "emailID"
                    ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-2"
                    : "col-md-6 mt-2"
                }
                formInputType={professionalSignupInput.type}
                formInputId={professionalSignupInput.name}
                formAriaLabel={professionalSignupInput.name}
                formFieldName={professionalSignupInput.label}
                formInputFieldError={professionalSignupInput.errorMessage}
                formFieldRequired={true}
                nameFromProfessionalSignup={professionalSignupInput.name}
                valueFromProfessionalSignup={
                  professionalSignupInputValues[professionalSignupInput.name]
                }
                onChange={onChange}
                errorMessage={professionalSignupInput.errorMessage}
                pattern={professionalSignupInput.pattern}
                dataTestid={professionalSignupInput.dataTestid}
                role={professionalSignupInput.role}
                alt={professionalSignupInput.alt}
                handleEyeClick={
                  professionalSignupInput.name === "password"
                    ? onClickOne
                    : null || professionalSignupInput.name === "confirmPassword"
                    ? onClickTwo
                    : null
                }
                showPassword={
                  professionalSignupInput.name === "password"
                    ? showPassword
                    : null || professionalSignupInput.name === "confirmPassword"
                    ? showConfirmPassword
                    : null
                }
                submitted={submitted}
                setSubmitted={setSubmitted}
              />
            )}
          </React.Fragment>
        );
      })}

      <div className="col-12 mt-2">
        <div className="form-check">
          <Input
            className="form-check-input"
            type="checkbox"
            id="termsAndCondition"
            required={true}
            alt="checkbox"
          />

          <label className="form-check-label" htmlFor="invalidCheck">
            I agree to all the <a href="#">Terms</a> and
            <a href="#"> Privacy policy</a>
          </label>
          {/* <div className="text-danger signup-error-message">You must agree before submitting.</div> */}
        </div>
      </div>

      <div className="d-grid mt-2">
        <button type="submit" className="btn btn-brand-color" disabled={loading}>
          {loading ? 'Loading...' : 'Create Account'}
        </button>
      </div>
    </form>
  );
};

export default ProfessionalSignUpForm;
