import { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

export type SpaceProps = {
  /**
   * 水平/垂直排列
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * 主轴对齐方式 justify-content
   * @default start
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  /**
   * 交叉轴对齐方式 align-items
   * @default stretch
   */
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  /**
   * 间距大小 gap
   * 有 3 预设可选，也可自行选择px值
   * @default middle
   */
  gap?: number | 'small' | 'middle' | 'large'
  /** 背景色 */
  bgColor?: string
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: CSSProperties
  /** 子组件 */
  children?: ReactNode
}

type SpaceStyledProps = {
  gap?: number
  bgColor?: string
}
const SpaceWrapper = styled.div`
  gap: ${({ gap }: SpaceStyledProps) => (gap ? `${gap}px` : undefined)};
  background-color: ${({ bgColor }: SpaceStyledProps) => bgColor};
`
const gapClass = {
  small: 'gap-1',
  middle: 'gap-3',
  large: 'gap-5',
}
const justifyClass = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
}
const alignClass = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
}

const Space = ({ gap, direction, justify, align, bgColor, className, style, children }: SpaceProps): JSX.Element => {
  return (
    <SpaceWrapper
      className={classNames(
        'flex flex-wrap items-center',
        { 'flex-col': direction === 'vertical' },
        justifyClass[justify ?? 'start'],
        alignClass[align ?? 'stretch'],
        typeof gap !== 'number' ? gapClass[gap ?? 'middle'] : null,
        className,
      )}
      gap={typeof gap === 'number' ? gap : undefined}
      bgColor={bgColor}
      style={style}>
      {children}
    </SpaceWrapper>
  )
}
Space.defaultProps = {}

export default Space
