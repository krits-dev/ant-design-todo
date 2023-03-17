import { createContext, useState, ReactNode, useMemo } from 'react'

export const today = new Date().toLocaleDateString('en-GB')

const data = [
  {
    _id: Math.random(),
    description: 'Visit David',
    complete: false,
    date: today,
  },
  {
    _id: Math.random(),
    description: 'Fix Dads iPad',
    complete: false,
    date: today,
  },
  {
    _id: Math.random(),
    description: 'Goceries For Dinner',
    complete: true,
    date: today,
  },
]

interface IContext {
  children: ReactNode
}

export interface ITodo {
  _id?: number
  description: string
  complete?: boolean
  date?: string
}

export interface ITodosContext {
  todos: ITodo[] | any
  saveTodo: (description: string) => void
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

export const TodosContext = createContext<ITodosContext | null>(null)

function TodosProvider({ children }: IContext) {
  const [todos, setTodos] = useState<ITodo[]>(data)

  const saveTodo = (description: string) => {
    const newTodo: ITodo = {
      _id: Math.random(),
      description,
      complete: false,
      date: today,
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(({ _id }) => _id !== id))
  }

  const toggleTodo = (id: number) => {
    todos.filter((todo) => {
      if (id === todo._id) {
        todo.complete = !todo.complete
      }
      return setTodos([...todos])
    })
  }

  const value = useMemo(
    () => ({ todos, saveTodo, removeTodo, toggleTodo }),
    [todos]
  )

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export default TodosProvider
