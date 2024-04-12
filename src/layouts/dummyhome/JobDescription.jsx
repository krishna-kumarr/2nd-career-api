import React, { useContext } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import CommonContext from "../../hooks/CommonContext";

const JobDescription = () => {
  const { gettingResponse,selectedSkeleton,selectedCardData } = useContext(CommonContext);

  console.log("selectedCardData",selectedCardData)
  return (
    <>
      <div className="p-4 pb-0 bg-white rounded-4 jobDescription-height overflow-scroll">
        <div>
          {
            gettingResponse === false || selectedSkeleton? <>
              <h5 className="job-title-weight placeholder rounded col-4 py-3"></h5>
              <p className="job-description placeholder rounded skeleton-jobParagraph-medium col-12"></p>
            </>
              :
              <>
                <h5 className="job-title-weight">About Company</h5>
                <p className="job-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                  labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
                  explicabo sequi, fugiat doloremque consequuntur obcaecati officia
                  harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
                  temporibus mollitia quas totam, quisquam quis recusandae iusto odit
                  magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
                  enim in! Delectus.
                </p>
              </>
          }

        </div>
        <div className="d-flex justify-content-around mt-4">
          {
            gettingResponse === false || selectedSkeleton ? <>
              <label className="company-details-icon placeholder rounded col-2 py-2 pt-3"></label>
              <label className="company-details-icon placeholder rounded col-2 py-2 pt-3"></label>
            </>
              :
              <>
                <label className="company-details-icon ">
                  <FaRegCalendarAlt className="me-2 text-success" />
                  Non-for-Profit / NGO
                </label>
                <label className="company-details-icon">
                  <FaRegCalendarAlt className="me-2 text-warning" />
                  Social Sector
                </label>
              </>
          }

        </div>



        {
          gettingResponse === false || selectedSkeleton ?
            <div className="mt-4">
              <h1 className="job-title-weight placeholder rounded col-4 py-3"></h1>
              <p className="job-description placeholder rounded col-12 skeleton-jobParagraph-medium"></p>
              <p className="job-description placeholder rounded col-12 skeleton-jobParagraph-medium"></p>
            </div>

            :
            <>
              <div className="mt-4">
                <h5 className="job-title-weight">Job Summary</h5>
                <p className="job-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                  labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
                  explicabo sequi, fugiat doloremque consequuntur obcaecati officia
                  harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
                  temporibus mollitia quas totam, quisquam quis recusandae iusto odit
                  magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
                  enim in! Delectus.
                </p>
                <p className="job-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                  labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
                  explicabo sequi, fugiat doloremque consequuntur obcaecati officia
                  harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
                  temporibus mollitia quas totam, quisquam quis recusandae iusto odit
                  magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
                  enim in! Delectus.
                </p>
              </div>
              <div className="mt-4">
                <h5 className="job-title-weight">Responsibilities</h5>
                <ul className="dashboard-responsibility-ul">
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
              <div className="mt-4">
                <h5 className="job-title-weight">Skills / Competencies</h5>
                <p className="job-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                  labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
                  explicabo sequi, fugiat doloremque consequuntur obcaecati officia
                  harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
                  temporibus mollitia quas totam, quisquam quis recusandae iusto odit
                  magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
                  enim in! Delectus.
                </p>
                <ul className="ms-5 dashboard-skills-ul">
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
                <div className="d-flex justify-content-around mt-4 dashboard-job-post-icons">
                  <label className="company-details-icon">
                    <FaRegCalendarAlt className="me-2 text-success" />
                    Volunteer
                  </label>
                  <label className="company-details-icon">
                    <FaRegCalendarAlt className="me-2 text-warning" />
                    Full Time
                  </label>
                  <label className="company-details-icon">
                    <FaRegCalendarAlt className="me-2 text-primary" />
                    12hrs/week
                  </label>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="job-title-weight">Additional Informations</h5>
                <ul className="ms-5 dashboard-additional-information-ul mt-4">
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
                <p className="job-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                  labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
                  explicabo sequi, fugiat doloremque consequuntur obcaecati officia
                  harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
                  temporibus mollitia quas totam, quisquam quis recusandae iusto odit
                  magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
                  enim in! Delectus.
                </p>

              </div>
            </>
        }
      </div>
    </>
  );
};

export default JobDescription;
