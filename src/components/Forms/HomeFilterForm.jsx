import React, { useContext, useEffect, useState } from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import FilterLabel from '../Label/FilterLabel';
import CommonContext from '../../hooks/CommonContext';

const HomeFilterForm = () => {
    const { FilterArray } = useContext(CommonContext);
    const [skills, setSkills] = useState("");
    const [sectors, setSectors] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [location, setLocation] = useState("");

    return (
        <form>
            <div className="mb-3 dropdown custom-dropdown">
                <FilterLabel spanContent={"Skills"} spanClassName={"job-filter-sub-headings"} labelHtmlFor={"skills"} lableClassName={"form-label fs-4 mb-2"} />
                <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {skills === "" ? "Select your Skill Level" : skills}
                </button>
                <ul className="dropdown-menu" >
                    {
                        FilterArray.length !== 0 ? <>
                            {FilterArray[14][0].skill_name.map((value, index) => {
                                return <li onClick={() => setSkills(value)} key={index}><a className="dropdown-item" >{value}</a></li>
                            })}
                        </>
                            :
                            <li><a className="dropdown-item disabled">No Datas Found</a></li>
                    }
                </ul>
            </div>

            <div className="mb-3 dropdown custom-dropdown">
                <FilterLabel spanContent={"Sectors"} spanClassName={"job-filter-sub-headings"} labelHtmlFor={"selectors"} lableClassName={"form-label fs-4 mb-2"} />
                <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {sectors === "" ? "Select your Sector" : sectors}
                </button>
                <ul className="dropdown-menu" >
                    {
                        FilterArray.length !== 0 ? <>
                            {FilterArray[14][1].sector_name.map((value, index) => {
                                return <li onClick={() => setSectors(value)} key={index}><a className="dropdown-item" >{value}</a></li>
                            })}
                        </>
                            :
                            <li><a className="dropdown-item disabled">No Datas Found</a></li>
                    }
                </ul>
            </div>

            <div className="mb-3 dropdown custom-dropdown">
                <FilterLabel spanContent={"Specialization"} spanClassName={"job-filter-sub-headings"} labelHtmlFor={"Specialization"} lableClassName={"form-label fs-4 mb-2"} />
                <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {specialization === "" ? "Select" : specialization}
                </button>
                <ul className="dropdown-menu" >
                    {
                        FilterArray.length !== 0 ? <>
                            {FilterArray[14][2].specialisation_name.map((value, index) => {
                                return <li onClick={() => setSpecialization(value)} key={index}><a className="dropdown-item" >{value}</a></li>
                            })}
                        </>
                            :
                            <li><a className="dropdown-item disabled">No Datas Found</a></li>
                    }
                </ul>
            </div>

            <div className="mb-3">
                <h5 className="job-filter-sub-headings">Workplace Type</h5>
                {
                    FilterArray.length !== 0 ? <>
                        {FilterArray[14][3].workplace_type.map((value, index) => {
                            return <div className="form-check" key={index}>
                                <Input className={"form-check-input"} type={"checkbox"} testId={value} id={`workplace_${value}`} formFieldName={value} formLableFor={`workplace_${value}`} formLableClass={"form-check-label"} />
                            </div>
                        })}
                    </>
                        :
                        null
                }
            </div>

            {/* <div className="mb-3 dropdown custom-dropdown">
                <FilterLabel spanContent={"Location"} spanClassName={"job-filter-sub-headings"} labelHtmlFor={"location"} lableClassName={"form-label fs-4 mb-2"} />
                <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {location === "" ? "Select your Location" : location}
                </button>
                <ul className="dropdown-menu" >
                    {
                        FilterArray.length !== 0 ? <>
                            {FilterArray[14][4].specialisation_name.map((value, index) => {
                                return <li onClick={() => setLocation(value)} key={index}><a className="dropdown-item" >{value}</a></li>
                            })}
                        </>
                            :
                            <li><a className="dropdown-item disabled">No Datas Found</a></li>
                    }
                </ul>
            </div> */}

            <div className="mb-3">
                <h5 className="job-filter-sub-headings">Job Type</h5>
                {
                    FilterArray.length !== 0 ? <>
                        {FilterArray[14][4].job_type.map((value, index) => {
                            return <div className="form-check" key={index}>
                                <Input className={"form-check-input"} type={"checkbox"} testId={value} id={`workplace_${value}`} formFieldName={value} formLableFor={`workplace_${value}`} formLableClass={"form-check-label"} />
                            </div>
                        })}
                    </>
                        :
                        null
                }
            </div>

            <div className="mb-3">
                <h5 className="job-filter-sub-headings">Schedule</h5>
                {
                    FilterArray.length !== 0 ? <>
                        {FilterArray[14][5].schedule.map((value, index) => {
                            return <div className="form-check" key={index}>
                                <Input className={"form-check-input"} type={"checkbox"} testId={value} id={`workplace_${value}`} formFieldName={value} formLableFor={`workplace_${value}`} formLableClass={"form-check-label"} />
                            </div>
                        })}
                    </>
                        :
                        null
                }
            </div>

            <div>
                <Button buttonType={"button"} className={"btn btn-brand-color w-100"} title={"Apply Filter"} />
            </div>
        </form>
    )
}

export default HomeFilterForm
