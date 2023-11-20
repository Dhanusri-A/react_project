import React from 'react'

export default function Parent() {
  return (
    <div>
        <Child name="Nivedhitha" name2="Arjun"></Child>
    </div>
  )
}
function Child (props)
{
    return(
        <div>
            <h1>My daughter name is {props.name}</h1>
            <h1>My son's name is {props.name2}</h1>
        </div>
    )
}
