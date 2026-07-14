import React from 'react'

const StudentCard = ({name,age,course,status}) => {
   
  return (
   <>
    <div className='p-10 flex'>
       <div className='bg-blue-200 h-40 w-40 flex flex-col justify-center items-center'>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Course:{course}</p>
        <p>isStatus:{status}</p>
       </div>
    </div>
   </>
  )
}

export default StudentCard