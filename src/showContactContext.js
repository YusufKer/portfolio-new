import React,{useState} from "react"
const ShowContactContext = React.createContext()

function ShowContactProvider({children}){
    const [on, setOn] = useState(false)
    
    const toggleOn = () =>{
        setOn(!on)
        console.log("...from ShowContextProvider")
    }

    return(
        <ShowContactContext.Provider value={{on,toggleOn}}>
            {children}
        </ShowContactContext.Provider>
    )
}
export { ShowContactProvider, ShowContactContext}