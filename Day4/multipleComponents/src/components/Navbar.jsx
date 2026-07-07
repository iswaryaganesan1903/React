import React from 'react'

const Navbar = () => {
  return (
   <>
    <div className='flex justify-between p-5 bg-amber-100'>
        <div>
           <p>logo</p>
        </div>
        <div className='flex gap-5'>
            <a href="">home</a>
            <a href="">about</a>
            <a href="">contact</a>
            <a href="">help</a>
        </div>
    </div>
   </>
  )
}

export default Navbar