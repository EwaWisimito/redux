let id = 0

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            id++
            return [{
                text: action.text,
                isCompleted: false,
                id
            },
            ...state
            ]
        case TOGGLE_TODO: 
        return state.map(todo => {
            const isSameId = todo.id === action.id
            return isSameId
                ? [{
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
                ]
                : todo
        })
        default:
            return state

    }

}

export const addTodo = text => ({
    type: ADD_TODO,
    text: text
})

export const toggleTodo = id =>({
    type: TOGGLE_TODO,
    id: id
})


export default todosReducer