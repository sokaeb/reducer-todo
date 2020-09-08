import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
// import Todo from './Todo';
import ListForm from './ListForm';

const List = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // console.log(state)
    return(
        <>
        <div className="todoList">
            <ListForm />
        </div>
        </>
    )
}

export default List;