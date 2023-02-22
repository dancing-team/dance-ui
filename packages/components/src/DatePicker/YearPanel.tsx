import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useEffect, useMemo, useState } from 'react'
import Icon, { IconType } from '../Icon'

export type YearListItemProps = {
  /** 当前显示的年份 */
  year: number
  /** 当前年份，传入 */
  curYear: number
  /** 点击事件 */
  changeYear: (y: number) => void
}
export const YearListItem = ({ year, curYear, changeYear }: YearListItemProps) => {
  const indexYear = Math.floor(year / 10) % 10
  const nowYear = Math.floor(curYear / 10) % 10
  const muted = nowYear !== indexYear
  const choose = curYear === year
  return (
    <div
      className={classNames('flex cursor-pointer items-center justify-center rounded-lg', {
        'bg-blue-500 text-white hover:bg-blue-500 hover:text-white': choose,
        'text-black/40 hover:bg-gray-100': muted,
        'text-black hover:bg-gray-100 hover:text-black': !muted && !choose,
      })}
      onClick={() => {
        changeYear(year)
      }}>
      {year}年
    </div>
  )
}

export type YearListProps = {
  curYear: number
  changeYear: (y: number) => void
}
export const YearList = ({ curYear, changeYear }: YearListProps) => {
  const startYear = Math.floor(curYear / 10) * 10
  const endYear = startYear + 9

  const years = useMemo(() => {
    const years = []
    years.push(<YearListItem key={startYear - 1} changeYear={changeYear} curYear={curYear} year={startYear - 1} />)
    for (let i = 0; i < 10; ++i) {
      years.push(<YearListItem key={startYear + i} changeYear={changeYear} curYear={curYear} year={startYear + i} />)
    }
    years.push(<YearListItem key={endYear + 1} changeYear={changeYear} curYear={curYear} year={endYear + 1} />)
    return years
  }, [startYear, changeYear, curYear, endYear])

  return <div className="grid flex-grow grid-cols-3 grid-rows-4 gap-1 px-2 py-1">{years.concat()}</div>
}

export type YearHeaderProps = {
  curYear: number
  changeYear: (y: number) => void
  iconClass?: string
}
export const YearHeader = ({ curYear, changeYear, iconClass }: YearHeaderProps) => {
  const startYear = Math.floor(curYear / 10) * 10
  const endYear = startYear + 9
  const iconClassName = classNames('cursor-pointer text-2xl text-gray-300 hover:text-blue-500', iconClass)

  return (
    <div className="flex items-center justify-between gap-1 border-b border-gray-300 px-1 py-2">
      <Icon
        type={IconType.ARROW_2}
        className={classNames('rotate-180', iconClassName)}
        onClick={() => {
          changeYear(startYear - 10)
        }}
      />
      <div className="flex flex-grow items-center justify-center gap-2 text-black hover:text-blue-500">
        {startYear}年——{endYear}年
      </div>
      <Icon
        type={IconType.ARROW_2}
        className={iconClassName}
        onClick={() => {
          changeYear(startYear + 10)
        }}
      />
    </div>
  )
}

export type YearPanelProps = {
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
const YearPanel = ({ active, curDate, onChange, openDayPanel, className, style }: YearPanelProps) => {
  const [curYear, setCurYear] = useState(dayjs(curDate))
  const changeYear = (y: number) => {
    const newDate = dayjs(curDate).year(y)
    setCurYear(newDate)
    onChange(newDate)
    openDayPanel()
  }

  useEffect(() => {
    setCurYear(curDate)
  }, [curDate])

  return (
    <div
      style={style}
      className={classNames(
        'absolute top-full left-0 z-10 mt-1 flex origin-top flex-col rounded border border-gray-100 bg-white py-1 px-3 shadow transition-all',
        active ? 'scale-y-100' : ' scale-y-0',
        className,
      )}>
      <YearHeader curYear={curYear.year()} changeYear={changeYear} />
      <YearList changeYear={changeYear} curYear={curYear.year()} />
    </div>
  )
}
export default YearPanel
