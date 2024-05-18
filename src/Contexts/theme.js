import {useContext, createContext} from "react";

export const Themecontext = createContext({
    themeMode: "light",
    lightTheme: ()=>{},
    darktheme: ()=>{},
})

export const ThemeProvider = Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}