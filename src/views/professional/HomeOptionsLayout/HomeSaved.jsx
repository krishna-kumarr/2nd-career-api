import React, { useContext, useEffect } from 'react'
import JobCard from '../../../layouts/dummyhome/JobCard'
import CommonContext from '../../../hooks/CommonContext';
import axios from "axios";
import Logo from '../../../assets/images/company.png'





const HomeSaved = () => {

    const { handleGetApplicationRequirements, cardArrayDuplicate, setCardArrayDuplicate, cardArray, setCardArray, setSelectedCardData, gettingResponse, setGettingResponse } = useContext(CommonContext);
    const jobCards = ["dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy"]

    useEffect(() => {
        setGettingResponse(false)
        setCardArray([])
        setCardArrayDuplicate([])
        setSelectedCardData([])

        const getHomeDatas = async () => {
            const token = localStorage.getItem("Token")
            try {
                await axios({
                    method: "post",
                    url: "http://10.10.24.7:5000/professional_saved_jobs",
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((res) => {
                        // console.log(res.data)
                        if (res.data.error_code === 0) {
                            setCardArray(res.data.data)
                            setCardArrayDuplicate(res.data.data)
                            if (res.data.data.length > 0) {
                                setSelectedCardData([res.data.data[0]])
                                handleGetApplicationRequirements(res.data.data[0].id)
                            }
                            else{
                                setGettingResponse(true)
                            }
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
                            <div className="card-body">
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
                                        <span className='placeholder rounded py-2 pt-3 w-100'></span>
                                    </label>
                                    <label className="fs-7 card-inner-details col-2">
                                        <span className='placeholder rounded py-2 pt-3 w-100'> </span>
                                    </label>
                                    <label className="fs-7 card-inner-details col-2">
                                        <span className='placeholder rounded py-2 pt-3 w-100'> </span>
                                    </label>
                                    <label className="fs-7 card-inner-details col-2">
                                        <span className='placeholder rounded py-2 pt-3 w-100'></span>
                                    </label>
                                </div>
                                <p className='mt-4 job-card-description placeholder rounded skeleton-jobParagraph col-12'> </p>
                            </div>
                        </div>
                    })
                    :
                    cardArray.length > 0 ?
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
                                        cardDes={value.job_desc}
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
















                {/* <div className="w-100 mt-3">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    6
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    7
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    8
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    9
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    10
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div> */}
            </div>
        </>
    )
}

export default HomeSaved
