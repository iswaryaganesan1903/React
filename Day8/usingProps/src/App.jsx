import React from 'react'
import StudentCard from './components/StudentCard'
import ProfileCard from './components/ProfileCard'

const App = () => {
  const Name="Iswarya"
  const Age=21
  const Course="Java FS"
  const isStatus="Active"
  const obj={name:"Iswarya",email:"ise@gmail.com",city:"Chennai",experience:"No"}
  return (
    <>
      <StudentCard name={Name} age={Age} course={Course} status={isStatus} />
      <ProfileCard Details={obj}/>
    </>
  )
}

export default App