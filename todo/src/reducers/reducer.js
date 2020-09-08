import React, { useReducer } from 'react';

export initialState = [
    {
        item: 'Create to-do list',
        completed: false,
        id: 1234
    },
    {
        item: 'Read React docs',
        completed: false,
        id: 5678
    },
    {
        item: 'Take notes',
        completed: false,
        id: 9101
    }
]


export function reducer(state, action){
    switch(action.type){
        // case 'add':
        //     return { };
        // case 'edit':
        //     return {};
        // case 'delete':
        //     return {};
        default: 
            return state
    }
}