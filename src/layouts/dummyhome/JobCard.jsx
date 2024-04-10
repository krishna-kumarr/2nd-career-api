import React from 'react'
import Logo from '../../assets/images/company.png'
import { FaRegCalendarAlt, FaShoppingBag, FaWallet } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";



const JobCard = ({ cardType,applicationStatus,cardHeading,cardPostedOn,cardWorkplace,cardState,cardSchedule,cardJobType,cardPayment  }) => {
  return (
    <>
      <div className="d-flex align-items-center my-2">
        <div className="flex-shrink-0">
          <img src={Logo} alt="..." width={52} height={52} />
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className='job-card-component-heading'>{cardHeading}</h6>
          <p className='job-card-posted-time m-0'>Posted on {cardPostedOn}</p>
        </div>

        {/* Applied job cards  */}
        {
          cardType === "applied" ?
            <div className='flex-shrink-0'>
              <div
                className={`py-1 px-3 rounded-1 
                ${applicationStatus === "reviewed" ? 'job-reviewed' : null ||
                    applicationStatus === "shortlisted" ? 'job-shortlisted' : null ||
                      applicationStatus === "contacted" ? 'job-contacted' : null ||
                        applicationStatus === "rejected" ? 'job-rejected' : null
                  }`
                }
              >

                <p className='m-0'>{applicationStatus === "reviewed" ? 'reviewed' : null ||
                  applicationStatus === "shortlisted" ? 'shortlisted' : null ||
                    applicationStatus === "contacted" ? 'contacted' : null ||
                      applicationStatus === "rejected" ? 'Not selected by Employer' : null
                }</p>
              </div>
            </div>
            :
            null
        }


        {/* recommended job cards  */}
        {
          cardType === "recommended" ?
            <div className='flex-shrink-0'>
              <div
                className={`py-1 px-3 rounded-1 
                ${applicationStatus === "ai" ? 'job-reviewed' : null ||
                    applicationStatus === "manual" ? 'job-shortlisted' : null
                  }`
                }
              >

                <p className='m-0'>{applicationStatus === "manual" ? 'Manual Recommendation' : null ||
                  applicationStatus === "ai" ? 'AI Recommendation' : null
                }</p>
              </div>
            </div>
            :
            null
        }


      </div>
      <div className="d-flex justify-content-around card-company-details-icon mt-4">
        <label className="fs-7 card-inner-details">
          <FaLocationDot className="me-2 text-success" />
          {cardWorkplace}-{cardState}
        </label>
        <label className="fs-7 card-inner-details">
          <FaShoppingBag className="me-2 text-warning" />
          {cardSchedule}
        </label>
        <label className="fs-7 card-inner-details">
          <IoTimeSharp className="me-2 text-primary" />
          {cardJobType}
        </label>
        <label className="fs-7 card-inner-details">
          <FaWallet className="me-2 text-warning" />
          {cardPayment}
        </label>
      </div>
      <p className='mt-4 job-card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore inventore nobis! Molestiae mollitia laboriosam accusamus eligendi </p>
    </>
  )
}

export default JobCard