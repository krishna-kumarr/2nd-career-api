import React, { useContext, useEffect, useState } from "react";
import JobDescription from "./JobDescription";
import Logo from "../../assets/images/company.png";
import { FaSave } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import CommonContext from "../../hooks/CommonContext";
import axios from "axios";

const JobWorkSpace = () => {
  const { applicationRequirements, cardArray, selectedCardData, gettingResponse, selectedSkeleton, handleGetApplicationRequirements } = useContext(CommonContext);

  const handleSaveJob = async (value) => {
    let jobSaveParams = { job_id: value }

    const token = localStorage.getItem("Token")
    try {
      await axios.post("http://10.10.24.7:5000/professional_job_save", jobSaveParams, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }
    catch (err) {
      console.log(err)
    }
  }



  return (
    <div className="container-fluid">
      <div className="row mt-1 setting-row-height p-3 overflow-hidden">

        <div className="h-100 col-12 col-lg-6 overflow-scroll d-flex">
          <Outlet />
        </div>

        <div className="d-none d-lg-inline col-lg-6 h-100 overflow-scroll">
          <div className="card w-100 border-0 bg-transparent h-100">
            {
              selectedCardData.length > 0 && cardArray.length > 0 && gettingResponse && !selectedSkeleton ?
                <div className="card-body p-0">
                  <div className="col-12 JobDescription-sticky-top-height bg-white rounded-4">
                    <div className="d-flex align-items-center my-2">
                      <div className="flex-shrink-0 ms-2">
                        <img src={Logo} alt="..." width={52} height={52} />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h3 className="job-heading" data-testid='DataQualityManager'>{selectedCardData[0].job_title !== undefined ? selectedCardData[0].job_title : ''}</h3>
                        <p className="job-posted-on m-0">Posted on {selectedCardData[0].created_at !== undefined ? selectedCardData[0].created_at : ''}</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="me-auto ms-5 p-2">
                        <button className="btn btn-brand-color ms-3" data-testid="ApplyNow" data-bs-toggle="modal" data-bs-target="#ApplyJobModal">Apply Now</button>
                      </div>


                      <div className="p-2">
                        <button type="button" className="btn btn-outline-secondary" data-testid="Save" onClick={() => handleSaveJob(selectedCardData[0].id)}>
                          <FaSave /> Save
                        </button>
                      </div>


                      <div className="p-2">
                        <button type="button" className="btn btn-outline-secondary" data-testid="Share">
                          <FaShare /> Share
                        </button>
                      </div>
                    </div>
                  </div>

                  <JobDescription />
                </div>
                :
                null
            }

            {
              selectedCardData.length === 0 && !selectedSkeleton && gettingResponse ?
                <div className="d-flex align-items-center h-100 justify-content-center">
                  <p className="text-center">No data found</p>
                </div>
                :
                null
            }


            {gettingResponse === false || selectedSkeleton ?
              <div className="card-body p-0">
                <div className="col-12 JobDescription-sticky-top-height bg-white rounded-4">
                  <div className="d-flex align-items-center my-2">
                    <div className="flex-shrink-0 ms-2">
                      <img src={Logo} alt="..." width={52} height={52} className='placeholder rounded-circle' />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <p className="job-posted-on placeholder rounded col-5 py-3"></p>
                      <h3 className="job-heading placeholder rounded col-8"></h3>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="me-auto ms-5 p-2">
                      <button className="btn btn-brand-color ms-3 placeholder px-5"></button>
                    </div>

                    <div className="p-2">
                      <button className="btn btn-outline-secondary placeholder px-5"></button>
                    </div>


                    <div className="p-2">
                      <button className="btn btn-outline-secondary placeholder px-5"></button>
                    </div>
                  </div>
                </div>

                <JobDescription />
              </div>
              :
              null
            }
          </div>
        </div>
      </div>



      {/* apply job modal box  */}
      <div className="modal fade" id="ApplyJobModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-2">
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Apply for job</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body border-bottom-0">
              <div className="container">
                <form>
                  <div>
                    <div className="container pe-0">

                      {applicationRequirements.length > 0 ?
                        <>
                          {applicationRequirements[1].docs_status[0].required_resume==="Y" ?
                            <div className="col-12 my-3">
                              <div className="card border-0 h-100">
                                <div className="card-body d-flex align-items-center justify-content-center p-0">
                                  <div
                                    className="border rounded-4 w-100 py-3"
                                    onClick={() =>
                                      document.getElementById("input-file").click()
                                    }
                                  >
                                    <input
                                      type="file"
                                      className="form-control"
                                      id="input-file"
                                      hidden
                                      accept=".doc, .docx,.pdf, .txt"
                                    // onChange={handleResumeUpload}
                                    />
                                    <div className="text-center">
                                      <div className="fs-2">
                                        <LuUpload />
                                      </div>
                                      <p className="px-5 m-0 pt-4">Drag and drop or click here to upload resume</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            :
                            null
                          }

                          {applicationRequirements[1].docs_status[0].required_cover_letter==="Y" ?
                            <div className="col-12 my-3">
                              <div className="card border-0 h-100">
                                <div className="card-body d-flex align-items-center justify-content-center p-0">
                                  <div
                                    className="border rounded-4 w-100 py-3"
                                    onClick={() =>
                                      document.getElementById("input-file").click()
                                    }
                                  >
                                    <input
                                      type="file"
                                      className="form-control"
                                      id="input-file"
                                      hidden
                                      accept=".doc, .docx,.pdf, .txt"
                                    // onChange={handleResumeUpload}
                                    />
                                    <div className="text-center">
                                      <div className="fs-2">
                                        <LuUpload />
                                      </div>
                                      <p className="px-5 m-0 pt-4">Drag and drop or click here to upload Cover letter</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            :
                            null
                          }

                          {applicationRequirements[0].questions.map((v, i) => {
                            return <div key={i}>
                              <div className="row mb-2 ">
                                <div className="col-lg-12 d-flex justify-content-between">
                                  <div>{v.custom_pre_screen_ques}</div>
                                </div>
                              </div>
                              <div className="container">
                                <div className="row">
                                  <textarea className="p-3 rounded-3 mb-3" required minLength={25} maxLength={10000} rows={4} placeholder="Enter your text here.."></textarea>
                                </div>
                              </div>
                            </div>

                          })}
                        </>
                        :
                        null
                      }
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer border-top-0" >
              <div className="container">
                <div className="row float-end">
                  <div className="col-lg-12 ">
                    <button type="button" className="btn btn-brand-color my-2 px-5">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobWorkSpace;
