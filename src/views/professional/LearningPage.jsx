import React, { useContext, useEffect, useState } from "react";
import CardWithImage from "../../components/Cards/CardWithImage";
import { FaDownload } from "react-icons/fa";

import Image from "../../utils/images.js";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar.jsx";
import axios from "axios";
import CommonContext from "../../hooks/CommonContext.jsx";

const LearningPage = () => {
  const professionalPageDashboardMenu = ["Home", "Learning", "Community"];
  const learningCards = ["dummy", "dummy"];

  const [learningData, setLearningData] = useState([]);
  const [learningLoading, setlearningLoading] = useState(false);
  const [modalApiContent, setModalApiContent] = useState([]);
  const {
    gettingResponse,
    setGettingResponse,
    setUserNavinfo
  } = useContext(CommonContext);


  const token = localStorage.getItem("Token")


    useEffect(() => {
      setGettingResponse(false);
      const getlearningDatas = async () => {
        try {
          // setlearningLoading(true);
  
          await axios({
            method: "post",
            url: "http://secondcareers.adraproductstudio.com:5000/professional_learning",
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              // setlearningLoading(false);
              console.log(response.data.data);
              // console.log(response.data.data[1].image)
              // modal api hit
              getModalData();
              // modal api hit
  
              if (response.data.error_code === 0) {
                setLearningData(response.data.data);
              }
            })
            .catch((err) => console.log(err));
        } catch (err) {
          console.log(err);
        }
      };
      (async () => getlearningDatas())();
    }, []);

    
  const getModalData = async () => {
    try {
      await axios
        .post(
          "http://secondcareers.adraproductstudio.com:5000/get_detailed_description_learning",
          { id: 1 },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          // console.log(response.data.data[0])
          setGettingResponse(true);
          setModalApiContent(response.data.data[0].detailed_description);
        });
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <DashboardNavbar
        profileImage="https://github.com/mdo.png"
        profileName="George Martin"
        dashboadMenus={professionalPageDashboardMenu}
      />

      {gettingResponse ? (
        <div className="learning-page-height learning-page-bg overflow-scroll">
          <div className="container pt-5">
            <div className="row row-cols-1 row-cols-md-3 mt-0 mb-4">
              {learningData.map((value, index) => {
                return (
                  <React.Fragment>
                    {learningLoading ? (
                      <div className="col">
                        <CardWithImage
                          cardImage={Image.learningImage}
                          cardTitle="hello"
                          cardTitleStyle="learningTitle placeholder"
                          imageClassName="rounded-top  img-fluid learning-img-height"
                          cardText={value.short_description}
                          cardKey={index}
                          cardParaTestId="professionalTestId"
                          cardButtonTestId="cardButton"
                          role="learningAndCommunity"
                          firstButton_Name="Download"
                          secondButton_Name="Learn"
                          icon={<FaDownload className="me-2" />}
                          firstCardColor="outline-secondary"
                          secondCardColor="brand-color"
                          leftLearnUrl={value.image}
                          rightLearnUrl={value.url}
                        />
                        {modalApiContent.map((val, ind) => {
                          <CardWithImage key={ind} modalContent={val} />;
                        })}
                      </div>
                    ) : (
                      <div className="col">
                        <CardWithImage
                          cardImage={Image.learningImage}
                          cardTitle={value.title}
                          cardTitleStyle="learningTitle"
                          imageClassName="rounded-4 img-fluid learning-img-height"
                          cardText={value.short_description}
                          cardKey={index}
                          cardParaTestId="professionalTestId"
                          cardButtonTestId="cardButton"
                          role="learningAndCommunity"
                          firstButton_Name="Download"
                          secondButton_Name="Learn"
                          icon={<FaDownload className="me-2" />}
                          firstCardColor="outline-secondary"
                          secondCardColor="brand-color"
                          modalContent={modalApiContent}
                          leftLearnUrl={value.image}
                          rightLearnUrl={value.url}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="learning-page-bg py-5 learning-page-height overflow-scroll">
        <div className="container">
        <div className="row col-12 g-3">
          {learningCards.map((v, i) => {
            return (
                <div className="col-12 col-md-6 col-lg-4">
              <div
                class="card border-0 p-0 rounded-3 overflow-hidden placeholder-glow"
                aria-hidden="true"
                key={i}
              >
                <div className="col-12">
                  <span class="placeholder col-12 py-4 rounded-top"></span>
                  <span class="placeholder col-12 py-4"></span>
                  <span class="placeholder col-12 py-4"></span>
                  <span class="placeholder col-12 py-4 rounded-bottom"></span>
                </div>
                <div class="card-body p-0">
                  <div className="p-3 py-5">
                    <h5 class="card-title ">
                      <span class="placeholder col-6 py-3 rounded-3"></span>
                    </h5>
                    <p class="card-text">
                      <span class="placeholder col-12 py-2 rounded "></span>
                      <span class="placeholder col-12 py-2 rounded"></span>
                      <span class="placeholder col-12 py-2 rounded"></span>
                      <span class="placeholder col-8 py-2 rounded"></span>
                    </p>
                  </div>
                  <div class="card-footer d-flex justify-content-between">
                    <button className="btn btn-outline-secondary placeholder col-5"></button>
                    <button className="btn btn-outline-secondary placeholder col-5"></button>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
        </div>
        </div>
      )}

      {/* <div className="col">
                            <CardWithImage cardImage={Image.learningTwo}
                                cardTitle="hello"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="content"

                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color learning"
                            />

                        </div> */}

      {/* <div className="col">
                            <CardWithImage cardImage={Image.learningThree}
                                cardTitle={title}
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText={description}
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color" />

                        </div> */}
      {/* 
                        <div className="col">
                            <CardWithImage cardImage={Image.learningImage}
                                cardTitle={title}
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText={description}
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color"

                            />
                        </div> */}

      {/* <div className="col">
                            <CardWithImage cardImage={Image.learningTwo}
                                cardTitle={title}
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText={description}

                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color learning"
                            />

                        </div> */}

      {/* <div className="col">
                            <CardWithImage cardImage={Image.learningThree}
                                cardTitle={title}
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText={description}
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color" />

                        </div> */}
    </>
  );
};

export default LearningPage;
