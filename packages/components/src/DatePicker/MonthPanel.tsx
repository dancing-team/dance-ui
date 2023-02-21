import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useEffect, useMemo, useState } from 'react'
import Icon, { IconType } from '../Icon'

export type MonthListItemProps = {
  /** 显示的月份 */
  month: number
  /** 当前月份，传入 0-11 */
  curMonth: number
  /** 点击事件 */
  changeMonth: (m: number) => void
}
const MonthListItem = ({ curMonth, month, changeMonth }: MonthListItemProps) => {
  const choose = curMonth === month
  return (
    <div
      className={classNames('flex cursor-pointer items-center justify-center rounded-lg', {
        'bg-blue-500 text-white hover:bg-blue-500 hover:text-white': choose,
      })}
      onClick={() => {
        changeMonth(month)
      }}>
      {month + 1} 月
    </div>
  )
}

export type MonthListProps = {
  /** 当前月份，传入 0-11 */
  curMonth: number
  /** 点击事件 */
  changeMonth: (m: number) => void
}

export const MonthList = ({ curMonth, changeMonth }: MonthListProps) => {
  const months = useMemo(() => {
    const months = []
    for (let i = 0; i < 12; ++i) months.push(<MonthListItem key={i} curMonth={curMonth} month={i} changeMonth={changeMonth} />)
    return months
  }, [curMonth, changeMonth])

  return <div className="grid flex-grow grid-cols-3 grid-rows-4 gap-1 px-2 py-1">{months.concat()}</div>
}

export type MonthHeaderProps = {
  curYear: number
  changeYear: (y: number) => void
  iconClass?: string
}

export const MonthHeader = ({ curYear, changeYear, iconClass }: MonthHeaderProps) => {
  const iconClassName = classNames('cursor-pointer text-2xl text-gray-300 hover:text-blue-500', iconClass)

  return (
    <div className="flex items-center justify-between gap-1 border-b border-gray-300 px-1 py-2">
      <Icon
        type={IconType.ARROW}
        className={classNames('rotate-180', iconClassName)}
        onClick={() => {
          changeYear(curYear - 1)
        }}
      />
      <div className="flex flex-grow items-center justify-center gap-2 text-black hover:text-blue-500">{curYear}年</div>
      <Icon
        type={IconType.ARROW}
        className={iconClassName}
        onClick={() => {
          changeYear(curYear + 1)
        }}
      />
    </div>
  )
}

export type MonthPanelProps = {
  /** 是否显示 */
  active?: boolean
  /** 当前日期对象 */
  curDate: dayjs.Dayjs
  /** 改变日期的函数 */
  onChange: (date: dayjs.Dayjs) => void
  /** 打开day面板的函数 */
  openDayPanel: () => void
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}

// TODO: 与年面板合并
const MonthPanel = ({ active, curDate, onChange, openDayPanel, className, style }: MonthPanelProps) => {
  const [curMonth, setCurMonth] = useState(dayjs(curDate))
  const changeMonth = (m: number) => {
    const newDate = dayjs(curDate).month(m)
    setCurMonth(newDate)
    onChange(newDate)
    openDayPanel()
  }

  const changeYear = (y: number) => {
    const newDate = dayjs(curDate).year(y)
    setCurMonth(newDate)
    onChange(newDate)
    openDayPanel()
  }

  useEffect(() => {
    setCurMonth(curDate)
  }, [curDate])

  return (
    <div
      style={style}
      className={classNames(
        'absolute top-full left-0 z-10 mt-1 flex origin-top flex-col rounded border border-gray-100 bg-white py-1 px-3 shadow transition-all',
        active ? 'scale-y-100' : ' scale-y-0',
        className,
      )}>
      <MonthHeader curYear={curMonth.year()} changeYear={changeYear} />
      <MonthList changeMonth={changeMonth} curMonth={curMonth.month()} />
    </div>
  )
}
export default MonthPanel
