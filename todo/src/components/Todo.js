import React from 'react';
// import ListForm from './ListForm';


const Todo = (props) => {
    const { item } = props

    return(
        <>
        <div>
            <p>{props.item.item}</p>
        </div>
        </>
    );
};

export default Todo;