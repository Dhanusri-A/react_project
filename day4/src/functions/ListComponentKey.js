import React from 'react'

export default function ListComponentKey() {
    const listItems=myList.map((item)=><li key={item.id}>
        {item.value}
    </li>
    );
  return (
    <ul>{listItems}</ul>
  );
}
const myList=[{id:'a',value:'apple'},
{id:'a',value:'orange'},
{id:'a',value:'mango'},
{id:'a',value:'cherry'}];