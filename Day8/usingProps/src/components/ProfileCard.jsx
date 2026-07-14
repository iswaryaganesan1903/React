import React from 'react'

const ProfileCard = (props) => {
    const {Details}=props
    console.log(props);
    

  return (
      <>
    <div className='p-10 flex'>
       <div className='bg-blue-200 h-40 w-40 flex flex-col justify-center items-center'>
        <p>Name:{Details.name}</p>
        <p>Age:{Details.email}</p>
        <p>Course:{Details.city}</p>
        <p>isStatus:{Details.experience}</p>
       </div>
    </div>
   </>
  )
}

export default ProfileCard