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
    setItems('')
  }
  const [Search , setSearch] = React.useState('')
  
  function check(id){
    setList( prev => prev.map( list => list.id === id? {...list , checked: !list.checked} : list))
    console.log('Working')
    
  }
  function deleteitem(id){
    setList(prev => prev.filter(item => item.id !== id))
  }
  function submit(e){
    e.preventDefault()
  
  }
  return (
    <div className='box'>
      <div className='nav'>
        <p>To-Do List</p>
      </div>
      <form className='Todo' onSubmit={submit}>
      <input
      className='items'
      value={Items}
      onChange={(e) => setItems(e.target.value)}
      />
      <button onClick={setValue}>OK</button>
      </form>
      <div className='Todo'>
      <input
      className='search'
      onChange={(e) => setSearch(e.target.value)}
      value={Search}
      />
      </div>
      <div className='lists'>
      <List 
      lists={Lists.filter(item => (item.item.toLowerCase()).includes(Search.toLowerCase()))}
      check = {check}
      delete = {deleteitem}
      />
      </div>
      <footer>Copyright {new Date().getFullYear()}</footer>
    </div>
  )
}
