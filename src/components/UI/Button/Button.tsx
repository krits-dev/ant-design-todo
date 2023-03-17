import { memo, SyntheticEvent } from 'react'
import { Button } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
interface IProps {
  text?: string
  danger?: boolean
  iconIs?: 'edit' | 'delete'
  onClickAction?: (e: SyntheticEvent) => void
}

function ButtonComponent({
  text,
  danger,
  iconIs,
  onClickAction,
}: IProps) {
  let buttonIcon =
    iconIs === 'edit' ? (
      <EditFilled />
    ) : iconIs === 'delete' ? (
      <DeleteFilled />
    ) : null

  return (
    <div className='button-wrapper'>
      <Button
        onClick={onClickAction}
        size='large'
        type='primary'
        danger={danger}
        icon={buttonIcon}
      >
        {text}
      </Button>
    </div>
  )
}

ButtonComponent.defaultProps = {
  text: '',
  danger: false,
  iconIs: '',
  onClickAction: () => null,
}

export default memo(ButtonComponent)
