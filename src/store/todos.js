let id = 0

const ADD_TODO = 'ADD_TODO'

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
        default:
            return state

    }

}

export const addTodo = text => ({
        type: ADD_TODO,
        text: text
      })



export default todosReducer