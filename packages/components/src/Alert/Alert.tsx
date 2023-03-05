import React, { createRef, LegacyRef } from 'react'
export interface AlertProps {
  /* alert 类型 */
  type?: 'alert' | 'success' | 'danger'
  /* alert 标题 */
  title?: string
  /* alert 文本 */
  text?: string
  /* alert 是否可以关闭 */
  closable?: boolean
  /* 关闭的回调函数 */
  onClose?: () => void
}

const Alert: React.FC<AlertProps> = (props: AlertProps): JSX.Element => {
  const { type, closable, onClose } = props
  const alert: LegacyRef<HTMLDivElement> | undefined = createRef()
  let cssClasses = 'bg-yellow-200 border-yellow-600 text-yellow-600'
  const handleClose: () => void = () => {
    if (onClose) onClose()
    if (alert.current?.style) alert.current.style.display = 'none'
  }
  if (type !== 'alert') {
    cssClasses =
      props.type === 'success' ? 'bg-green-200 border-green-600 text-green-600' : 'bg-red-200 border-red-600 text-red-600'
  }

  return (
    <div className={`${cssClasses} border-l-4 p-4 relative`} role="alert" ref={alert}>
      <p className="font-bold">{props.title}</p>
      {closable && (
        <span className="absolute right-2 top-0 cursor-pointer leading-0" onClick={handleClose}>
          x
        </span>
      )}
      <p>{props.text}</p>
    </div>
  )
}
Alert.defaultProps = {
    /* 默认的类型 */
    type: 'alert',
    /* 是否可以关闭 */
    closable: false,
  }

export default Alert
