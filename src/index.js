import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux'

import counterReducer, {inc, dec, } from './store/counter'
import todosReducer, {addTodo, toggleTodo} from './store/todos'


const store = createStore(
    combineReducers({
      counter: counterReducer,
      todos: todosReducer
    }),
 window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__()
 )
window.addTodo = (text) => store.dispatch(addTodo(text))

window.toggleTodo = (id) => store.dispatch(toggleTodo(id))

window.inc = () => store.dispatch(inc())

window.dec = () => store.dispatch(dec())


ReactDOM.render(<App />, document.getElementById('root'));

