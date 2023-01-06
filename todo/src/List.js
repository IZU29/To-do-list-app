import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
export default function List(props){
    return (
        props.lists.map(item =>
        <div key={item.id}><hr/><div className='list'><h3>{item.item}</h3><div className='checker'><input type='checkbox' checked={item.checked} onChange={() => props.check(item.id)} /><FaTrashAlt className='delete' onClick={() => props.delete(item.id)}/></div></div></div>)
    )
}