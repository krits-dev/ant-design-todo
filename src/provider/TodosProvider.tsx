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
  _id: number
  description: string
  complete: boolean
  date?: string
}

export interface ITodosContext {
  todos: ITodo[] | any
}

export const TodosContext = createContext<ITodosContext | null>(null)

function TodosProvider({ children }: IContext) {
  const [todos, setTodos] = useState<ITodo[]>(data)

  const value = useMemo(() => ({ todos }), [todos])

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export default TodosProvider
