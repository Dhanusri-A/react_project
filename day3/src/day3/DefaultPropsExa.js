import React from 'react'

export default function DefaultPropsExa(props) {
  return (
    <div>
        <h1>My name is {props.name} and I am studying in {props.college}</h1>
    </div>
  )
}
DefaultPropsExa.defaultProps={name:"Dhanu",college:"Skcet"}
