import {useState,createContext, useContext} from 'react'

const themeContext = createContext ()

const ThemeProvider =({children})=>{
    const [theme, setTheme]= useState('light')

    return(
        <themeContext.Provider value={[theme, setTheme]}>
            {children}
        </themeContext.Provider>
    );
};

//custom hook

const useTheme = () => useContext(themeContext);

export{useTheme, ThemeProvider};