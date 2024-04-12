import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import CardWithImage from "../../components/Cards/CardWithImage";
import Image from '../../utils/images.js'
import axios from 'axios';


const CommunityPage = () => {
    const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']

    const [communityData, setCommunityData] = useState([])
    const [modalApiContent, setModalApiContent] = useState([])

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNzEyOTAxNjA1LCJqdGkiOiIyNDgxMDFjMS1jZDc4LTRmY2YtOGY1MC01NTEwMTIxNGQ5YTAiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoic2l2YXBlcnNvbmFsMTIxMkBnbWFpbC5jb20iLCJuYmYiOjE3MTI5MDE2MDUsImNzcmYiOiIwMTQyNGEwYy0zMzBmLTRjZDItOWNiZi1iYzVlZWJiYWQ2YjgiLCJleHAiOjE3MTI5ODgwMDV9.A1zVfHFGv3txvswLR6SeReCWmI9ZxjtgbX4sDYwwzLk"

    const getModalData = async () => {

        try {
            await axios.post("http://10.10.24.2:5002/get_detailed_description_learning", { id: 2 },
                {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }
            ).then((response) => {
                console.log(response.data)
                console.log(response.data.data[0])
                setModalApiContent(response.data.data[0].detailed_description)
            })
        } catch (err) {
            console.log(err)
        }

    }


    useEffect(() => {
        const getcommunityDatas = async () => {
            try {
                await axios({
                    method: "post",
                    url: "http://10.10.24.2:5002/professional_community",
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                        console.log(response.data.data)

                        getModalData()

                        if (response.data.error_code === 0) {
                            setCommunityData(response.data.data)
                        }
                    })
                    .catch((err) => console.log(err))
            }
            catch (err) {
                console.log(err)
            }
        }
        (async () => getcommunityDatas())();
    }, [])



    return (
        <>
            <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />

            <div className="community-page-height community-page-bg overflow-scroll">
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-0 mb-4">

                            {communityData.map((value, index) => {
                                return (
                                    <div className="col">
                                    <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                        cardTitle={value.title}
                                        cardTitleStyle="communityTitle"
                                        imageClassName="rounded-4 community-img-height"
                                        cardText={value.short_description}
                                        cardKey={index}
                                        carTextClassName="role-selection-description"
                                        cardParaTestId="professionalTestId"
                                        cardButtonTestId="cardButton"
                                        role="learningAndCommunity"
                                        firstButton_Name="Join Community"
                                        secondButton_Name="Share"
                                        firstCardColor="brand-color"
                                        secondCardColor="outline-secondary"
                                        leftCommUrl={value.join_url}
                                        rightCommUrl={value.share_url}
                                    />
                                    { modalApiContent.map((val,ind)=>{
                                        <CardWithImage key={ind} modalContent={val}/>
                                    })}
                                    </div>
                                )
                            })}

                    </div>
                    {/* <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle={title}
                                cardTitleStyle="communityTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText={description}
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary" />
                        </div>
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle={title}
                                cardTitleStyle="communityTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText={description}
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary"
                            />

                        </div>

                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle={title}
                                cardTitleStyle="communityTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText={description}
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary" />
                        </div>
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle={title}
                                cardTitleStyle="communityTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText={description}
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary" />
                        </div>
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle={title}
                                cardTitleStyle="communityTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText={description}
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary"
                            />

                        </div> */}
                </div>
            </div>
        </>
    )
}

export default CommunityPage