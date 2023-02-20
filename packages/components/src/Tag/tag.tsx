/*
 * @Author: rykerFeng 2279549769@qq.com
 * @Date: 2023-01-23 18:39:13
 * @LastEditors: rykerFeng 2279549769@qq.com
 * @LastEditTime: 2023-02-07 19:36:46
 * @FilePath: /dance-ui/packages/components/src/Tag/tag.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import classnames from 'classnames'
import React, { createRef, LegacyRef } from 'react'

/**
 * 标签组件
 * @param {closable} boolean 是否可关闭
 * @param {onClose} func 标签关闭时的回调
 * @param {color} string 标签的颜色,不设置则为默认颜色
 */

export type TagProps = {
  /* 子元素 */
  children?: string
  /* 关闭 */
  onClose?: () => void
  /* 是否可以关闭 */
  closable: boolean
  /* 用户传入的颜色 */
  color: string
}

const defaultStyle =
  'inline-block rounded border border-solid border-slate-200 py-0 px-2 text-xs whitespace-nowrap bg-[#fafafa] h-6 leading-6'
const colorStyle = 'border-transparent text-white'

const Tag: React.FC<TagProps> = function TagInner({ children, onClose, closable, color }: React.PropsWithChildren<TagProps>) {
  const tag: LegacyRef<HTMLDivElement> | undefined = createRef()
  const handleClose: () => void = () => {
    if (onClose) onClose()
    if (tag.current?.style) tag.current.style.display = 'none'
  }
  return (
    <div className={classnames(defaultStyle, color ? colorStyle : '')} style={{ backgroundColor: color }} ref={tag}>
      {children}
      {closable && (
        <span className="text-black-50 ml-2 cursor-pointer" onClick={handleClose}>
          x
        </span>
      )}
    </div>
  )
}
Tag.defaultProps = {
  /* 是否可以关闭 */
  closable: false,
}

export default Tag
