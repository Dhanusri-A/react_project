import React from 'react'

export default function NameError({studentName}) {
    if(studentName==="DHANU"){
        throw new Error("DHANU name is Not acceptable")
    }
  return (
    <div>
      <h1>My name is {studentName}</h1>
    </div>
  )
}