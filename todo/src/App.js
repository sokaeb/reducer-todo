import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import '../src/components/Todo.css';
import  {reducer, initialState } from '../src/reducers/reducer';


function App() {
  const [state, dispatch ] = useReducer(reducer, initialState)

    return (
      <div>
        <h1>To-Do List</h1>
        <div className="todo-container">
        <TodoForm 
          className="container container1"
          dispatch={dispatch} 
          state={state} 
        />
         <TodoList  
          dispatch={dispatch} 
          state={state}
          className="container container2"
        />
        </div>
      </div>
    );
}

export default App;
