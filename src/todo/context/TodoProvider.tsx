import { useReducer } from 'react'
import { Todo, TodoState } from '../interfaces/interfaces'
import { TodoContext } from './TodoContext'
import { todoReducer } from './todoReducer'

interface props {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'test task 1',
      completed: false
    },
    {
      id: '2',
      desc: 'test task 2',
      completed: false
    },
  ],
  completed: 0,
  pending: 2,
}

export const TodoProvider = ({ children }: props) => {

  const [ todoState, dispatch ] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = ( id: string ) => {
    dispatch({ type: 'toggleTodo', payload: { id } })
  }

  return (
    <TodoContext.Provider value={{
      todoState,
      toggleTodo
    }}>
        { children }
    </TodoContext.Provider>
  )
}