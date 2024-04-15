import React, { useContext, useEffect, useState } from 'react'
import JobFilter from '../../../layouts/dummyhome/JobFilter'
import JobCard from '../../../layouts/dummyhome/JobCard'
import CommonContext from '../../../hooks/CommonContext'
import axios from "axios";
import Logo from '../../../assets/images/company.png'

const HomeAll = () => {
    const [filter, setFilter] = useState("")
    const jobCards = ["dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy"]
    const { setApplicationRequirements,handleGetApplicationRequirements, cardArray, setCardArray, setFilterArray, setUserNavinfo, setSelectedCardData, gettingResponse, setGettingResponse, cardArrayDuplicate, setCardArrayDuplicate } = useContext(CommonContext);

    useEffect(() => {
        setGettingResponse(false)
        setCardArray([])
        setCardArrayDuplicate([])
        setSelectedCardData([])
        setApplicationRequirements([])

        const getHomeDatas = async () => {
            const token = localStorage.getItem("Token")
            try {
                await axios.get("http://secondcareers.adraproductstudio.com:5000/professional_dashboard", {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }
                )
                    .then((res) => {
                        console.log(res.data)
                        if (res.data.error_code === 0) {
                            setFilterArray(res.data.data)
                            if (res.data.data.job_details !== undefined) {
                                setCardArray(res.data.data.job_details)
                                setCardArrayDuplicate(res.data.data.job_details)
                                setSelectedCardData([res.data.data.job_details[0]])
                                setUserNavinfo(res.data.data.user_details)
                                handleGetApplicationRequirements(res.data.data.job_details[0].id)
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



    const handleSortingFilter = (sortValue) => {
        setFilter(sortValue)
        switch (sortValue) {
            case "DateLatest":
                var sorting = cardArray.sort(function (a, b) {
                    let d1 = new Date(a.created_at),
                        d2 = new Date(b.created_at)
                    if (d1 < d2) {
                        return -1;
                    }
                })
                setCardArrayDuplicate(sorting)
                break;
            case "NameAscending":
                var sorting = cardArray.sort(function (a, b) {
                    if (a.job_title.toLowerCase() < b.job_title.toLowerCase()) {
                        return -1;
                    }
                })
                setCardArrayDuplicate(sorting)
                break;
            case "NameDescending":
                var sorting = cardArray.sort(function (a, b) {
                    if (b.job_title.toLowerCase() < a.job_title.toLowerCase()) {
                        return -1;
                    }
                })
                setCardArrayDuplicate(sorting)
                break;
            default:
                break;
        }
    }


    return (
        <>
            <div className="col-lg-4 d-none d-xl-block h-100 overflow-scroll pe-3">
                <div className="card w-100 border-0 rounded-4">
                    <div className="card-body">
                        <JobFilter />
                    </div>
                </div>
            </div>


            <div className="col-12 col-xl-8 h-100 overflow-scroll">
                <div className="d-flex justify-content-between p-2 align-items-center">
                    <div className="col">
                        {
                            gettingResponse === false ? <label className=" w-100">
                                <span className="placeholder w-75 rounded py-2 pt-3"></span>
                            </label>
                                :
                                <label className="filter-results">Showing : {cardArray.length} filtered results</label>
                        }
                    </div>
                    <div className="col dropdown custom-dropdown">
                        {
                            gettingResponse === false ? <label className=" w-100">
                                <span className="placeholder w-100 rounded py-2 pt-3"></span>
                            </label>
                                :
                                <>
                                    <button className="btn btn-secondary dropdown-toggle w-100 border-0 outline-none filter-section" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        {filter === "" ? "Filter" : filter}
                                    </button>
                                    <ul className="dropdown-menu col" >
                                        <li onClick={() => handleSortingFilter("DateLatest")}><a className="dropdown-item" >Sort by Date Latest</a></li>
                                        <li onClick={() => handleSortingFilter("NameAscending")}><a className="dropdown-item" >Sort by Ascending(A-Z) </a></li>
                                        <li onClick={() => handleSortingFilter("NameDescending")}><a className="dropdown-item" >Sort by Descending(Z-A) </a></li>
                                    </ul>
                                </>
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
                                        <img src={Logo} width={52} height={52} className='placeholder rounded-circle ' />
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
                                        <span className='placeholder rounded py-2 pt-3 w-100'></span>
                                    </label>
                                    <label className="fs-7 card-inner-details col-2">
                                        <span className='placeholder rounded py-2 pt-3 w-100'></span>
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
                    cardArrayDuplicate.length > 0 ?
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
                                        cardDes={value.job_overview}
                                        cardId={value.id}
                                    />
                                </div>
                            </div>
                        })

                        :
                        <div className="row align-items-center h-100 justify-content-center">
                            <p className='text-center'>Sorry no jobs found</p>
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

export default HomeAll
