import { useState } from 'react'

import React from 'react'

export default function ToDoList() {
  let [type, setType] = useState("")
  let [task, setTask] = useState([])

  let changeHandler = (a) => {
    setType(a.target.value)
  }

  let submitHandler = (b) => {
    b.preventDefault()
    let newtodo = [...task, type]
    setTask(newtodo)
    setType("")
  }

  let deleteHandler = (mapi) => {
    let filter = task.filter((val, filind) => {
      return filind !== mapi
    })
    setTask(filter)
  }

  return (

    <div className='App'>
      <center>
        <div className='typelist'>
          <h1> ADD TO DO LIST</h1>
          <form onSubmit={submitHandler}>
            <input type="text" value={type} onChange={changeHandler} /><br></br>
            <input type="submit" value="ADD TO DO" id='add' />
          </form>
        </div><br></br>


        <div className='map'>
          <h2>DO YOUR THING TO DO LIST</h2>
          {
            task.map((d, mapi) => <h2>{d}<button onClick={() => deleteHandler(mapi)}>Delete</button></h2>)
          }
        </div>

      </center>
    </div>
  );
}


