import React from 'react'
import './index.css'
import List from './List'
export default function App(){
  const [Items , setItems] = React.useState('')
  const [Lists , setList] = React.useState([{
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
  }
  const [Search , setSearch] = React.useState('')
  
  function check(id){
    setList( prev => prev.map( list => list.id === id? {...list , checked: !list.checked} : list))
    console.log('Working')
    
  }
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
      <div className='Todo'>
      <input
      className='search'
      onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <>
      <List 
      lists={Lists.filter(item => (item.item.toLowerCase()).includes(Search.toLowerCase()))}
      check = {check}
      />
      </>
    </div>
  )
}
