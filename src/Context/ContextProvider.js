import {createContext,useContext,useState} from 'react'

const StateContext = createContext();

const inisialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,

}


export const ContextProvider =({children})=>{
    const [screenSize,setScreenSize]=useState(null)
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked,setIsClicked]=useState(inisialState)
    const [isThemeOpen,setIsThemeOpen]=useState(false)
    const [currentMode,setCurrentMode]=useState('light')
    const [currentColor,setCurrentColor]=useState('#03c9d7')
    const [currentPage,setCurrentPage]=useState(null)
    const [isLoading,setIsLoading]=useState(true)





    const handleClick=(clicked)=>{

        setIsClicked(prev=>{return {...inisialState,[clicked]:!prev[clicked]}})
        console.log(isClicked);
    }

    const setMode =(e)=>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value);
        setIsThemeOpen(false)

    }
    const setColor =(color)=>{
       
        setCurrentColor(color);
        localStorage.setItem('ColorMode',color);

        setIsThemeOpen(false)
         console.log(currentColor)
    }

    return (

<StateContext.Provider value={{activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    isThemeOpen,
    setIsThemeOpen,
    setCurrentColor,
    setCurrentMode,
    currentColor,
    currentMode,
    setMode,
    setColor,
    setCurrentPage,
    currentPage,
    isLoading,setIsLoading
    
    }}>

    {children}
</StateContext.Provider>

    )

}


export const useStateContext = ()=>useContext(StateContext)