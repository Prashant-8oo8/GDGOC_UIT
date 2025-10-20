import React, { createContext, useEffect, useState } from 'react'
import { useStore } from 'react-redux'
import { useLocation } from 'react-router-dom';

export const NavbarContext=createContext()
export const NavbarColorContext=createContext()



function Navcontext({children}) {
    const [navColor,setNavColor]=useState('white');
    const [navOpen,setNavOpen]=useState(false);

    const locate=useLocation().pathname;

    useEffect(function(){
        if(locate ==='/project' || locate === '/team') setNavColor('black');
        else setNavColor('white');
    },[locate])
    
    return (
    
        <NavbarContext.Provider value={[navOpen,setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor,setNavColor]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    
  )
}

export default Navcontext