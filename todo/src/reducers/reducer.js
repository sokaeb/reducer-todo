export const initialState = {
    todo: [
        {
        item: '',
        completed: false,
        id: '' 
    },
    {
        item: 'Clean room',
        completed: false,
        id: '' 
    },
    {
        item: 'Study',
        completed: false,
        id: '' 
    }
] 
};

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
               item: action.payload,
               completed: false,
               id: new Date()
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                completed: !state.completed
            };
        // case 'CLEAR_TODO':
        //     return {
        //         ...state,
        //     };
        default: 
            return state;
    }
};

