
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
const INCREMENT_COUNTER =  'INCREMENT_COUNTER'



export const inc = () => ({
    type: INCREMENT_COUNTER
})

export const dec = () => ({
    type: DECREMENT_COUNTER
})



const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT_COUNTER:
    return state +1
    case DECREMENT_COUNTER:
    return state -1
    default:
    return state
  }
}

export default counterReducer