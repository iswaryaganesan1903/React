import React, { useState } from 'react'

const App = () => {
   const [datas,setDatas]=useState("")
   const [storeData,setStoreData]=useState([])
   const handleChange=(e)=>{
    setDatas(e.target.value)
   }
   const handleSubmit=(e)=>{
     e.preventDefault()
     const update=[...storeData]
     update.push(datas)
     setStoreData(update)
     setDatas("")
   }
  return (
   <>
   <form onSubmit={handleSubmit}>
    <input type="text" placeholder='enter the task' value={datas} onChange={handleChange}/>
    <input type="submit" value='register'/>
   </form>
   <div>
    {storeData.map((e,i)=>(
      <div key={i+1}>
        <p>{e}</p>
      </div>
    ))}
   </div>
   </>
  
  )
}

export default App