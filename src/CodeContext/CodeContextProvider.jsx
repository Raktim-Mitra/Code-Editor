import React, { createContext,useState,useRef } from 'react'



export const CodeContext=createContext()
const CodeContextProvider = (props) => {
    const [value, setValue] = useState("")
    const[language,setLanguage]=useState("javascript");
    const editorRef = useRef(null);
    const contextValue={
        value,setValue,
        language,setLanguage,editorRef
    }
  return (
    <CodeContext.Provider value={contextValue}>
        {props.children}
    </CodeContext.Provider>
  )
}

export default CodeContextProvider