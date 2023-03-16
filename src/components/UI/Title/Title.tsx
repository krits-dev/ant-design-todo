import { memo } from 'react'
import './Title.scss'

interface IProps {
  text: string
  page?: boolean
  task?: boolean
  complete?: boolean
}

function Title({ text, page, task, complete }: IProps) {
  let isComplete = complete ? 'complete' : ''
  return (
    <div className='title-wrapper complete'>
      {page && <h1>{text}</h1>}
      {task && <h2 className={isComplete}>{text}</h2>}
    </div>
  )
}

Title.defaultProps = {
  text: '',
  page: false,
  task: false,
  complete: false,
}

export default memo(Title)
