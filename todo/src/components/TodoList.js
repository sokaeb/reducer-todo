import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const { state, dispatch } = props
    return(
        <div className="todo-list">
            {state.map((todo) => {
               return <Todo 
                    key={todo.id}
                    todo={todo}
                    dispatch={dispatch}
                />
})}
        </div>
    );
};

export default TodoList;
