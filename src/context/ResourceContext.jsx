import { createContext, useContext, useEffect, useState } from "react";
// import { getItemByPost, getItemFunc, getTimeTable } from "../components/utils/getApi";
import { AuthenticationContext } from "./AuthenticationContext";
import { getItemFunc, getUpdatedUser, getDetailFunc } from "../utils/getApi";

export const ResourceContext = createContext();

export function ResourceContextProvider({ children }) {

    const { authDetails } = useContext(AuthenticationContext);
    const token = authDetails?.token ? authDetails.token : null;
    const [checker, setChecker] = useState(false);
    const [errorMesage, setErrorMessage] = useState('');

    const [getInstructors, setGetInstructors] = useState({
        data: null,
        isDataNeeded: false,
    });

    //Users Resource useEffect
    useEffect(() => {
        setErrorMessage('');
        if (getInstructors.isDataNeeded) {
            const endPoint = `/instructor/get`
            const dataArray = "instructors"
            getItemFunc(token, setGetInstructors, setErrorMessage, endPoint, dataArray, setChecker)
        }
    }, [getInstructors.isDataNeeded]);


    return (
        <ResourceContext.Provider
            value={{
                checker,
                setChecker,
                errorMesage,
                setGetInstructors,
                getInstructors
            }}
        >
            {children}
        </ResourceContext.Provider>
    )
}

export default ResourceContextProvider
