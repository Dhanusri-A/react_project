import React from 'react';
function Demo(props){
    return(
        <div>
            my Name is {props.name}
        </div>
    )
}

export default function ListFunct(){
    const list=["mango","apple","orange"]
    return(
        <div className='dhanu '>
            {list.map((item)=><Demo name={item}></Demo>)}
        </div>
    )
}