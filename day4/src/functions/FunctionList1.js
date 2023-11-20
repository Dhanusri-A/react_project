import React from 'react'

function Demo(props) {
  return (
    <>
    my name is {props.name}
    </>
  )
}
export default function FunctionList1(){
    const list=["mango","apple","orange"]
    return(
        <div>
            {list.map((item)=><Demo name={item}></Demo>)}
        </div>
    )
}