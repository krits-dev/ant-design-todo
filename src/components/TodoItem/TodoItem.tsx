import { Checkbox, Button, Title } from 'components/UI'
import './TodoItem.scss'

interface IProps {
  _id: number
  description: string
  complete: boolean
  date: string
}

function TodoItem({ _id, description, complete, date }: IProps) {
  return (
    <div className='todo-item-wrapper'>
      <Checkbox complete={complete} />
      <Title task text={description} complete={complete} />
      <div className='button-group'>
        <div className='todo-item-date'>{date}</div>
        <Button iconIs='edit' />
        <Button iconIs='delete' danger />
      </div>
    </div>
  )
}

TodoItem.defaultProps = {
  _id: null,
  description: '',
  complete: false,
  date: '',
}

export default TodoItem
