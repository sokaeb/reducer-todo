import React, { useReducer, useState } from 'react';
import  {reducer, initialState, ACTIONS } from '../reducers/reducer';


const TodoForm = (props) => {
  const {state, dispatch} = props;
 
  const [newToDo, setNewToDo] = useState("")
  
  const handleChange = e => {
       setNewToDo(e.target.value)
    };

  
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: newToDo}})
  }

        return(
          <>
            <form className="form-input" onSubmit={handleSubmit}>  
                <input 
                    value ={newToDo}
                    type='text'
                    placeholder='Enter ToDo'
                    onChange={handleChange}
                    name='item'
                />
              
                <button className="addTodo">
                  Add Todo</button>
            </form>
            </>
        )
}

export default TodoForm;