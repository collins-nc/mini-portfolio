import React, {createContext,useState} from 'react'

export const CursorContext = createContext({
    size:"sn", /* small and normal */
    setSize:()=>{},
    
})
export default function CursorManager(props) {
    const [size,setSize] = useState("small");
  return (
    <CursorContext.Provider value={{size,setSize}}>
        {props.children}
    </CursorContext.Provider>
  )
}
