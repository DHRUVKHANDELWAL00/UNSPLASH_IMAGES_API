import {useContext,createContext,useState,useEffect} from 'react';
const AppContext=createContext();

export const AppProvider=({children})=>{
  // const greeting='hello';
  const [isDarkTheme,setIsDarkTheme]=useState(false);
  const [searchTerm,setSearchTerm]=useState('cat');
  const toggleDarkTheme=()=>{
    const newDarkTheme= !isDarkTheme;
    setIsDarkTheme(newDarkTheme)
    const body=document.querySelector('body')
    body.classList.toggle('dark-theme',newDarkTheme);
  }
  const access=()=>{
    const getInput=document.getElementsByClassName('form-input');
  console.log(getInput);
  }
  
  return(
    <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext=()=> useContext(AppContext);
