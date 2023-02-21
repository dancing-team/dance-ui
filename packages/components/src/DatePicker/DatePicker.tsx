import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useCallback, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import Icon, { IconType } from '../Icon'
import DayPanel from './DayPanel'
import MonthPanel from './MonthPanel'
import YearPanel from './YearPanel'

export type DatePickerProps = {
  /** 日期变化时的回调函数 */
  onChange?: (date: dayjs.Dayjs, dateString?: string) => void
  /**
   * 默认日期
   * @default nowDate
   */
  defaultDate?: Date
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}
// TODO: 封装Input、Modal组件
const DatePicker = ({ defaultDate, onChange, className, style }: DatePickerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [curDate, setCurDate] = useState(() => (dayjs(defaultDate).isValid() ? dayjs(defaultDate) : dayjs()))
  const [dateString, setDateString] = useState(curDate.format('YYYY-MM-DD'))
  const [open, setOpen] = useState(false)
  const [panelType, setPanelType] = useState('Date')

  useClickAway(containerRef, () => {
    setOpen(false)
  })

  const changeDate = (date: dayjs.Dayjs) => {
    setCurDate(date)
    setDateString(date.format('YYYY-MM-DD'))
    onChange?.(date, date.format('YYYY-MM-DD'))
    setOpen(false)
  }

  const openPanel = useCallback(
    (type = 'Date') => {
      setOpen(true)
      setPanelType(type ?? 'Date')
    },
    [setOpen, setPanelType],
  )

  const openDatePanel = useCallback(() => {
    openPanel('Date')
  }, [openPanel])

  const openMonthPanel = useCallback(() => {
    openPanel('Month')
  }, [openPanel])

  const openYearPanel = useCallback(() => {
    openPanel('Year')
  }, [openPanel])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nowValue = e?.target?.value
    setDateString(nowValue)
    const newDate = dayjs(nowValue)
    if (newDate.isValid()) changeDate(newDate)
  }

  return (
    <div
      className={classNames(
        'group relative inline-flex items-center rounded border border-solid border-gray-400 bg-white px-2 py-1 hover:border-blue-500 focus:border-blue-500',
        className,
      )}
      style={style}
      ref={containerRef}>
      <input
        className="border-none bg-white text-base text-gray-400 outline-none group-hover:text-blue-500"
        placeholder="请输入日期"
        onFocus={openDatePanel}
        value={dateString}
        onChange={onInputChange}
      />
      <Icon type={IconType.DATE_PICKER} className="text-xl text-gray-400 group-hover:text-blue-500" />
      <DayPanel
        close={() => {
          setOpen(false)
        }}
        className="min-h-[300px] min-w-[300px]"
        active={open && panelType === 'Date'}
        curDate={curDate}
        changeDate={changeDate}
        handleYear={openYearPanel}
        handleMonth={openMonthPanel}
      />
      <YearPanel
        className="min-h-[300px] min-w-[300px]"
        active={open && panelType === 'Year'}
        curDate={curDate}
        onChange={changeDate}
        openDayPanel={openDatePanel}
      />
      <MonthPanel
        className="min-h-[300px] min-w-[300px]"
        active={open && panelType === 'Month'}
        curDate={curDate}
        onChange={changeDate}
        openDayPanel={openDatePanel}
      />
    </div>
  )
}
export default DatePicker
