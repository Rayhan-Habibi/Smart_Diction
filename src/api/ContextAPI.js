import { createContext, useState } from 'react'

const ContextAPI = createContext();

const WordContext = ({children}) => {
    const [wordData, setWordData] = useState("")

    const value = {
        wordData,
        setWordData,
    }
    return <ContextAPI.Provider value={value}>{children}</ContextAPI.Provider>
}

export default ContextAPI;
export {WordContext};
