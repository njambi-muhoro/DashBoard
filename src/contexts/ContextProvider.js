import React,{useState, useContex, createContext} from 'react';

const stateContext = createContext();
const initialState ={
    chat:false,
    cart:false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children})=>{
    // all states we are going to use in our project
    const[activeMenu, setActiveMenu]= useState(true); // will be used to close the sidebar and open it 

return(
    <stateContext.Provider 
    value={{
       activeMenu: activeMenu, 
       setActiveMenu: setActiveMenu,
    }}
    
    >

    </stateContext.Provider>
)




}
// how to use the values
export const useStateContext = ()=> useContex
    // it return a call to the used context, we pass in 
(stateContext)

