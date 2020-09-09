export const ACTIONS = {
    ADD_TODO : 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

export const initialState = [
    {
       name: 'Clean room',
       id: 123,
       completed: false 
    },
    {
        name: 'Laundry',
        id: 456,
        completed: false
    },
    {
        name: 'Study',
        id: 789,
        completed: false
    }
];

function newTodo(name){
    return { id: Date.now(), name: name, complete: false }
}

export const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    return { ...todo, completed: !todo.completed}
                }
                return todo;
            })
            case ACTIONS.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id)
        default:
            return state;
    }
}