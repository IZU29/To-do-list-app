import React from 'react'

export default function List(props){
    return (
        props.lists.map(item =>
        <div key={item.id}><hr/><div className='list'><h3>{item.item}</h3><input type='checkbox' checked={item.checked} onChange={() => props.check(item.id)} className='checker'/></div></div>)
    )
}