import { Children, createContext, useState } from "react";

const CommonContext = createContext();

export const DataProvider = ({ children }) => {
    // home page states 
    const [FilterArray, setFilterArray] = useState([]);
    const [cardArray, setCardArray] = useState([]);
    const [selectedCardData, setSelectedCardData] = useState([])
    const [homepageAxiosUrl,setHomePAgeAxiosUrl] = useState("http://10.10.24.2:5000/professional_dashboard")

    return (
        <CommonContext.Provider value={{
            cardArray,
            setCardArray,
            FilterArray,
            setFilterArray,
            selectedCardData,
            setSelectedCardData,
            homepageAxiosUrl,
            setHomePAgeAxiosUrl
        }}
        >

            
            {children}
        </CommonContext.Provider>
    )
}


export default CommonContext;