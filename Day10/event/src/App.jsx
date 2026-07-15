import React, { useState } from 'react'

const App = () => {
   const [val,setVal]=useState(true)
   const buttonClick=()=>{
     
      setVal(!val)
   }
  return (
   <>
   <button onClick={buttonClick}>Click me</button>
   <p>{val ? 'this is true':'this is false'}</p>
   <p>{val && <p>This is my work</p>}</p>
   </>
  )
}

export default App