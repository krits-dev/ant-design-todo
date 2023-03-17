import { useContext, Fragment } from 'react'
import { TodoItem } from 'components'
import { TodosContext, ITodosContext, ITodo } from 'provider/TodosProvider'

function TodoList() {
  const { todos } = useContext(TodosContext) as ITodosContext
  return (
    <div className='todo-list-wrapper'>
      {todos?.map(({ _id, description, complete, date }: ITodo) => {
        const todo = (
          <Fragment key={_id}>
            <TodoItem
              id={_id}
              description={description}
              complete={complete}
              date={date}
            />
          </Fragment>
        )
        return todo
      })}
    </div>
  )
}

export default TodoList
