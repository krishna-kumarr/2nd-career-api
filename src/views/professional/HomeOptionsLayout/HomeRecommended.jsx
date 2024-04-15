import React, { useContext, useEffect } from 'react'
import JobCard from '../../../layouts/dummyhome/JobCard'
import CommonContext from '../../../hooks/CommonContext';
import axios from "axios";
import Logo from '../../../assets/images/company.png'


const HomeRecommended = () => {
    const jobCards = ["dummy", "dummy", "dummy"]
    const { cardArray, setCardArray, cardArrayDuplicate, setCardArrayDuplicate, setSelectedCardData, gettingResponse, setGettingResponse } = useContext(CommonContext);

    useEffect(() => {
        setGettingResponse(false)
        setCardArray([])
        setCardArrayDuplicate([])
        setSelectedCardData([])
        
        const getHomeDatas = async () => {
            const token = localStorage.getItem("Token")
            try {
                await axios({
                    method: "get",
                    url: "http://secondcareers.adraproductstudio.com:5000/professional_dashboard",
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((res) => {
                        console.log(res.data)

                        if (res.data.error_code === 0) {
                            console.log(res.data.data.job_details)
                            setCardArray(res.data.data.job_details)
                            setCardArrayDuplicate(res.data.data.job_details)
                            setSelectedCardData([res.data.data.job_details[0]])
  
                            setGettingResponse(true)
                        }
                    })
                    .catch((err) => console.log(err))
            }
            catch (err) {
                console.log(err)
            }
        }
        (async () => getHomeDatas())();
    }, [])

    return (
        <>
            <div className="col-lg-12 h-100 overflow-scroll">
                <div className="d-flex justify-content-between p-2 align-items-center">
                    <div className="col">
                        {
                            gettingResponse === false ? <label className="filter-results placeholder rounded py-3 w-50"></label>
                                :
                                <label className="filter-results">Showing : {cardArray.length} filtered results</label>
                        }

                    </div>
                    <div className="col">
                        {
                            gettingResponse === false ?
                                <label className="filter-results placeholder rounded col-12 py-3"></label>
                                :
                                <select className="form-select border-0 outline-none filter-section" aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                        }
                    </div>
                </div>


                {/* job card skeleton  */}
                {gettingResponse === false ?
                    jobCards.map((value, index) => {
                        return <div className="card w-100 mt-2 rounded-4 border-0" key={index}>
                            <div className="card-body ">
                                <div className="d-flex align-items-center my-2">
                                    <div className="flex-shrink-0">
                                        <img src={Logo} width={52} height={52} className='placeholder rounded-circle' />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className='job-card-posted-time placeholder col-5 rounded py-3'></p>
                                        <h6 className='job-card-component-heading placeholder col-8 rounded py-2 pt-3'></h6>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between card-company-details-icon mt-4">
                                    <label className="fs-7 card-inner-details col-3">
                                        <span className='placeholder rounded py-2 pt-3 w-100'>

                                        </span>
                                    </label>
                                    <label className="fs-7 card-inner-details col-2">
                                        <span className='placeholder rounded py-2 pt-3 w-100'>

                                        </span>
                                    </label>
                                    <label className="fs-7 card-inner-details col-2">
                                        <span className='placeholder rounded py-2 pt-3 w-100'>

                                        </span>
                                    </label>
                                    <label className="fs-7 card-inner-details col-2">
                                        <span className='placeholder rounded py-2 pt-3 w-100'>

                                        </span>
                                    </label>
                                </div>
                                <p className='mt-4 job-card-description placeholder rounded skeleton-jobParagraph col-12'> </p>
                            </div>
                        </div>
                    })
                    :
                    null
                }

                {
                    cardArray.length > 0 && gettingResponse ?
                        cardArrayDuplicate.map((value, index) => {
                            return <div className="card w-100 mt-2 rounded-4 border-0">
                                <div className="card-body">
                                    <JobCard
                                        cardHeading={value.job_title}
                                        cardPostedOn={value.created_at}
                                        cardWorkplace={value.workplace_type}
                                        cardState={value.country}
                                        cardSchedule={value.work_schedule}
                                        cardJobType={value.job_type}
                                        cardPayment={value.is_paid === "Y" ? "Paid" : "Volunteer"}
                                        applicationStatus="ai"
                                        cardType="recommended"
                                        cardId={value.id}
                                    />
                                </div>
                            </div>

                        })

                        :
                        <div className="row align-items-center h-100 justify-content-center">
                            <p className='text-center'>hii</p>
                        </div>
                }
            </div>
        </>
    )
}

export default HomeRecommended
