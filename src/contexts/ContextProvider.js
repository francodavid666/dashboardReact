import React,{createContext,useContext,useState} from "react";
import { GiFlashGrenade } from "react-icons/gi";


const StateContext =  createContext()

const initialState = {
    chat: false,
    cart:false,
    userProfile : false,
    notification:false,
}
/*proveedor del componente*/ 
export const ContextProvider = ({children})=>{

    const [activeMenu, setActiveMenu] =useState(true);
    const [isClicked, setIsClicked] =useState(initialState);
    const [screenSize, setScreenSize] =useState(undefined);
    const [currentColor,setCurrentColor] = useState('#03C9D7');
    const [currentMode,setCurrentMode] = useState('Light');

    const [themeSettings,setThemeSettings] = useState(false);


    const setMode = (e) =>{
        setCurrentMode(e.target.value)
        
        setThemeSettings(false)

        localStorage.setItem('themeMode',e.target.value );
    }

    const setColor = (color) =>{
        setCurrentColor(color)

        setThemeSettings(false)

        localStorage.setItem('colorMode', color);
    }


    const handleClick =(clicked) =>{
        setIsClicked({...initialState,[clicked]:true});
    }

 

    return (
        <StateContext.Provider
            value={{activeMenu,
            setActiveMenu,
        isClicked, 
        setIsClicked,
        handleClick,

        screenSize,
         setScreenSize,
        
         currentMode,
         setCurrentMode,

         currentColor,
         setCurrentColor,

         themeSettings,
         setThemeSettings,

         setMode,
         setColor

         
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext =()=> useContext (StateContext);