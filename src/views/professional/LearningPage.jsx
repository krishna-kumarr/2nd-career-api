import React, { useEffect, useState } from "react";
import CardWithImage from "../../components/Cards/CardWithImage";
import { FaDownload } from "react-icons/fa";

import Image from '../../utils/images.js'
import DashboardNavbar from "../../components/Navbar/DashboardNavbar.jsx";
import axios from 'axios';


const LearningPage = () => {
    const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']

    const [learningData, setLearningData] = useState([])
    const[learningLoading,setlearningLoading] = useState(false)
    const [modalApiContent, setModalApiContent] = useState([])

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNzEyOTAxNjA1LCJqdGkiOiIyNDgxMDFjMS1jZDc4LTRmY2YtOGY1MC01NTEwMTIxNGQ5YTAiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoic2l2YXBlcnNvbmFsMTIxMkBnbWFpbC5jb20iLCJuYmYiOjE3MTI5MDE2MDUsImNzcmYiOiIwMTQyNGEwYy0zMzBmLTRjZDItOWNiZi1iYzVlZWJiYWQ2YjgiLCJleHAiOjE3MTI5ODgwMDV9.A1zVfHFGv3txvswLR6SeReCWmI9ZxjtgbX4sDYwwzLk"


    const getModalData = async () => {
        
        try {
          await axios.post("http://10.10.24.2:5002/get_detailed_description_learning", { id: 1 },
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          ).then((response) => {
            console.log(response.data)
            // console.log(response.data.data[0])
            setModalApiContent(response.data.data[0].detailed_description)
          })
        } catch (err) {
          console.log(err)
        }
    
      }

    useEffect(() => {
        const getlearningDatas = async () => {

            try {
                setlearningLoading(true)

                await axios({
                    method: "post",
                    url: "http://10.10.24.2:5002/professional_learning",
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                        setlearningLoading(false)
                        console.log(response.data.data)
                        // console.log(response.data.data[1].image)
                        // modal api hit
                        getModalData();
                        // modal api hit

                        if (response.data.error_code === 0) {
                            setLearningData(response.data.data)
                        }
                    })
                    .catch((err) => console.log(err))
                
            }
            catch (err) {
                console.log(err)
            }
        }
        (async () => getlearningDatas())();
    }, [])

    return (
        <>
            <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />

            <div className="learning-page-height learning-page-bg overflow-scroll">
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-3 mt-0 mb-4">
                        

                            {learningData.map((value,index) => {
                                return (
                                   
                                    <React.Fragment>
                                        {learningLoading ? 
                                    <div className="col">
                                            <CardWithImage cardImage={Image.learningImage}
                                        cardTitle="hello"
                                        cardTitleStyle="learningTitle placeholder"
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
                                            
                                        leftLearnUrl={value.image}
                                        rightLearnUrl={value.url}
                                   /> 
                                   { modalApiContent.map((val,ind)=>{
                                        <CardWithImage key={ind} modalContent={val}/>
                                    })}
                                    </div> 
                                    :  
                                    <div className="col">
                                    <CardWithImage cardImage={Image.learningImage}
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
                            </div> }
                                    </React.Fragment>

                                  )
                            }
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


                    </div>
                </div>
            </div>
        </>
    )
}

export default LearningPage;