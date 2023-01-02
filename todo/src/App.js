import React from 'react'
import './index.css'
export default function App(){
  const [Items , setItems] = React.useState('')
  const [List , setList] = React.useState([{
    id:0,
    item: 'Clean The House',
    checked: false
  },{
    id:1,
    item: 'Wash the Plate',
    checked: false
  },{
    id:2,
    item: 'Cut the grass',
    checked: false
  }])
  function setValue(){
    setList(prev => [...prev , {id: prev.length >= 1 ? prev.length : 1 , item : Items , checked : false}])
    console.log('Working')
  }
 console.log(List)
  return (
    <div className='box'>
      <div className='nav'>
        <p>To-Do List</p>
      </div>
      <div className='Todo'>
      <input
      className='items'
      onChange={(e) => setItems(e.target.value)}
      />
      <button onClick={setValue}>OK</button>
      </div>
    </div>
  )
}
