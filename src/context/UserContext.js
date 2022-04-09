import {createContext, useState} from "react";

export const UserContext = createContext();
export const UserProvider = (props) =>{
    const [shop,setShop] = useState()
    return<UserContext.Provider value={{shop}}></UserContext.Provider>
}