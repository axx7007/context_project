import React, { Children, createContext, useState } from "react";


export const ThemeContext = createContext();


const Mode=({children})=>{
    const [data, setData]=useState({
        title: 'black',
        icon: 'black',
        background: 'white'
    })
    return(
        <ThemeContext.Provider value={[data, setData]}>
            {children}
        </ThemeContext.Provider>
    )
}
export default Mode