import React, { useContext, useEffect, useState } from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Dashboard from '../../layouts/Dashboard'
import axios from "axios";
import CommonContext from '../../hooks/CommonContext';

const Home = () => {
    const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']
    const { setCardArray, setFilterArray, setSelectedCardData } = useContext(CommonContext);

    useEffect(() => {
        const getHomeDatas = async () => {
            const token = localStorage.getItem("Token")
            try {
                await axios({
                    method: "get",
                    url: "http://10.10.24.2:5000/professional_dashboard",
                    headers: {
                        authorization: `Bearer ${token}`
                    }                   
                })
                    .then((res) => {
                        console.log(res.data)

                        if (res.data.error_code === 0) {
                            setCardArray(res.data.data)
                            setFilterArray(res.data.data)
                            setSelectedCardData(res.data.data[0])
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
            <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />

            <Dashboard />
        </>
    )
}

export default Home
