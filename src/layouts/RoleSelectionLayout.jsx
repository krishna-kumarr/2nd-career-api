import React from "react";
import EntryLevelNavbar from "../components/Navbar/EntryLevelNavbar";
import CardWithImage from "../components/Cards/CardWithImage";
import Image from "../utils/images";
import { useNavigate } from "react-router-dom";


const RoleSelectionLayout = () => {
  const pageRender = useNavigate()
  return (
    <div className="col-12">
      <div className=" d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-11 mx-auto">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <CardWithImage
                    cardImage={Image.professional}
                    cardTitle="Professional"
                    cardText=" Empowering Experienced semi-retired or retired
                    Professionals with Fulfilling Opportunities"
                    carTextClassName="role-selection-descriptionbg"
                    cardParaTestId="professionalTestId"
                    cardButtonTestId="cardButton"
                    buttonName="Sign up"
                    pageRenderPath={()=>pageRender("/role-selector/professional")}
                    width={150}
                    height={150}
                    imageClassName={"mx-auto m-4 p-3"}
                  />
                </div>
                <div className="col">
                  <CardWithImage
                    cardImage={Image.employer}
                    cardTitle="Employer"
                    cardText="Enabling enterprises, start-ups, and NGOs to find
                    well-screened experienced talent from a pool of
                    well-qualified semi-retired or retired professionals"
                    carTextClassName="role-selection-description"
                    cardParaTestId="employerTestId"
                    cardButtonTestId="cardSignupButton"
                    buttonName="Sign up"
                    width={150}
                    height={150}
                    imageClassName={"mx-auto m-4 p-3"}
                  />
                </div>
                <div className="col">
                  <CardWithImage
                    cardImage={Image.partner}
                    cardTitle="Partner"
                    cardText=" Engaging platform for Recruiting firms, Skills Development  Firms, and Coaching Firms to partner"
                    carTextClassName="role-selection-description"
                    cardParaTestId="partnerTestId"
                    buttonName="Sign up"
                    width={150}
                    height={150}
                    imageClassName={"mx-auto m-4 p-3"}
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//  – CXOs,
// HR Professionals; Finance Professionals, Sales &
// Marketing Professionals, Tech Experts, and Board

export default RoleSelectionLayout;
