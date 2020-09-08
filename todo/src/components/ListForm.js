import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const ListForm = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // addTodo = (todoItem) => {
    //     const newTodo = { // new item home and what 'rooms' it has
    //       item: todoItem,
    //       id: new Date(),
    //       completed: false
    //     };
    //     // using the setState func to update the state with the newTodo item
    //     this.setState({
    //       list: [...this.state.list, newTodo]
    //     });
    //   };

const handleChanges = evt => {
    console.log(evt.target.value)

};

// const toggleTodo = () => {
//     dispatch({ type: 'TOGGLE_TODO'});
// };

    return(
        <div>
        <form onSubmit={dispatch}>
            <label>ToDo: &nbsp;</label>
            <input
                type='text'
                name='item'
                value={state.item}
                onChange={handleChanges}
            />
            <button 
                onClick={() =>
                    dispatch({type: 'ADD_TODO'}) 
                }
            >Add Todo</button>
        </form>
        <button>Clear Completed</button>
        </div>
    );
}


export default ListForm;


