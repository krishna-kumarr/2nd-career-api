import React, { useContext, useEffect } from 'react'
import JobCard from '../../../layouts/dummyhome/JobCard'
import CommonContext from '../../../hooks/CommonContext';
import axios from "axios";

const HomeRecommended = () => {
    const {cardArray,setCardArray} = useContext(CommonContext);

    // useEffect(() => {
    //     const getHomeDatas = async () => {
    //         const token = localStorage.getItem("Token")
    //         try {
    //             await axios.get("http://10.10.24.2:5000/professional_dashboard", {
    //                 headers: {
    //                     authorization: `Bearer ${token}`
    //                 }
    //             })
    //                 .then((res) => {
    //                     console.log(res.data)

    //                     if (res.data.error_code === 0) {
    //                         setCardArray(res.data.data)
    //                     }
    //                 })
    //                 .catch((err) => console.log(err))
    //         }
    //         catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     (async () => getHomeDatas())();
    // }, [])

  return (
    <>
        <div className="col-lg-12 h-100 overflow-scroll">
                <div className="d-flex justify-content-between p-2 align-items-center">
                    <div className="col">
                        <label className="filter-results">Showing : {cardArray.length} filtered results</label>
                    </div>
                    <div className="col">
                        <select className="form-select border-0 outline-none filter-section" aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                    </div>
                </div>
                {cardArray.length > 0 ?
                    cardArray.map((value, index) => {
                        return index<15 ? <div className="card w-100 mt-2 rounded-4 border-0">
                                                <div className="card-body">
                                                    <JobCard 
                                                        cardHeading={value.job_title} 
                                                        cardPostedOn={value.created_at} 
                                                        cardWorkplace ={value.workplace_type}
                                                        cardState ={value.country}
                                                        cardSchedule ={value.work_schedule}
                                                        cardJobType ={value.job_type}
                                                        cardPayment ={value.is_paid==="Y" ? "Paid" : "Volunteer"}
                                                        applicationStatus="ai"
                                                        cardType = "recommended"
                                                    />
                                                </div>
                                            </div>
                                        :
                                            null
                    })

                    : null
                }
            </div>
    </>
  )
}

export default HomeRecommended
