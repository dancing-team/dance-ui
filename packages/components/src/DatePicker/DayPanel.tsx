import classNames from 'classnames'
import dayjs from 'dayjs'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Icon, { IconType } from '../Icon'

export type DayListItemProps = {
  day: dayjs.Dayjs
  curDate: dayjs.Dayjs
  changeDay: (date: dayjs.Dayjs) => void
}
export const DayListItem = ({ day, curDate, changeDay }: DayListItemProps) => {
  const muted = !day.isSame(curDate, 'month')
  const choose = curDate.isSame(day)
  return (
    <div
      key={day.date()}
      className={classNames('flex cursor-pointer items-center justify-center rounded-lg', {
        'bg-blue-500 text-white hover:bg-blue-500 hover:text-white': choose,
        'text-black/40 hover:bg-gray-100': muted,
        'text-black hover:bg-gray-100 hover:text-black': !muted && !choose,
      })}
      onClick={() => {
        changeDay(day)
      }}>
      {day.date()}
    </div>
  )
}

export type DayListProps = {
  curDate: dayjs.Dayjs
  changeDay: (day: dayjs.Dayjs) => void
}
export const DayList = ({ curDate, changeDay }: DayListProps) => {
  const nowMonthDays = dayjs(curDate).daysInMonth()
  const firstDayDate = dayjs(curDate).startOf('month')
  const preMonth = dayjs(curDate).subtract(1, 'month')
  const preMonthDays = preMonth.daysInMonth()
  const nextMonth = dayjs(curDate).add(1, 'month')
  const labels = useMemo(() => {
    const labels = []
    for (let i = 0; i <= 6; i++) {
      labels.push(
        <div
          key={dayjs().day(i).format('ddd')}
          className="text-md flex items-center justify-center text-center font-semibold leading-9 text-black/60">
          {dayjs().day(i).format('ddd')}
        </div>,
      )
    }
    return labels
  }, []) // 星期显示

  const days = useMemo(() => {
    const days = []
    for (let i = firstDayDate.day(); i >= 0; i--) {
      const preDay = dayjs(preMonth.date(preMonthDays - i))
      days.push(<DayListItem key={preDay.format('DD MM YYYY')} changeDay={changeDay} curDate={curDate} day={preDay} />)
    }
    for (let i = 1; i <= nowMonthDays; i++) {
      const day = dayjs(curDate.date(i))
      days.push(<DayListItem key={day.format('DD MM YYYY')} changeDay={changeDay} curDate={curDate} day={day} />)
    }
    const daysCount = days.length
    for (let i = 1; i <= 42 - daysCount; i++) {
      const nextDay = nextMonth.date(i)
      days.push(<DayListItem key={nextDay.format('DD MM YYYY')} changeDay={changeDay} curDate={curDate} day={nextDay} />)
    }
    return days
  }, [changeDay, curDate, firstDayDate, nextMonth, nowMonthDays, preMonth, preMonthDays]) // 日期显示

  return (
    <div className={'flex flex-grow flex-col px-2 py-1'}>
      <div className="grid h-7 flex-grow-0 grid-cols-7 grid-rows-1">{labels.concat()}</div>

      <div className="grid flex-grow grid-cols-7 grid-rows-6">{days.concat()}</div>
    </div>
  )
}

export type DayHeaderProps = {
  curDate: dayjs.Dayjs
  /** 改变当前月份的函数 */
  changeMonth: (month: number) => void
  /** 改变当前年份的函数 */
  changeYear: (year: number) => void
  /** 跳转年面板 */
  handleYear: () => void
  /** 跳转月面板 */
  handleMonth: () => void
  iconClass?: string
}
export const DayHeader = ({ curDate, changeMonth, changeYear, handleYear, handleMonth, iconClass }: DayHeaderProps) => {
  const iconClassName = classNames('cursor-pointer text-2xl text-gray-300 hover:text-blue-500', iconClass)
  return (
    <div className="flex items-center justify-between gap-1 border-b border-gray-300 px-1 py-2">
      <Icon
        type={IconType.ARROW_2}
        className={classNames('rotate-180', iconClassName)}
        onClick={() => {
          changeYear(curDate.year() - 1)
        }}
      />
      <Icon
        type={IconType.ARROW}
        className={classNames('rotate-180', iconClassName)}
        onClick={() => {
          changeMonth(curDate.month() - 1)
        }}
      />
      <div className="flex flex-grow items-center justify-center gap-2 text-black">
        <div
          className="cursor-pointer hover:text-blue-500"
          onClick={() => {
            handleYear()
          }}>
          {curDate.format('YYYY')}年
        </div>
        <div
          className="cursor-pointer hover:text-blue-500"
          onClick={() => {
            handleMonth()
          }}>
          {curDate.format('M')}月
        </div>
      </div>
      <Icon
        type={IconType.ARROW}
        className={iconClassName}
        onClick={() => {
          changeMonth(curDate.month() + 1)
        }}
      />
      <Icon
        type={IconType.ARROW_2}
        className={iconClassName}
        onClick={() => {
          changeYear(curDate.year() + 1)
        }}
      />
    </div>
  )
}

export type DayPanelProps = {
  /** 面板是否显示  */
  active: boolean
  /** 当前日期 */
  curDate: dayjs.Dayjs
  /** 改变当前日期 */
  changeDate: (date: dayjs.Dayjs) => void
  /** 关闭当前面板 */
  close: () => void
  /** 跳转年面板 */
  handleYear: () => void
  /** 跳转月面板 */
  handleMonth: () => void
  className?: string
}
const DayPanel = ({ active, curDate, close, changeDate, handleYear, handleMonth, className }: DayPanelProps) => {
  const [nowDate, setNowDate] = useState(dayjs(curDate))

  const changeDay = useCallback(
    (day: dayjs.Dayjs) => {
      setNowDate(day)
      changeDate(day)
      close()
    },
    [changeDate, close],
  )

  const changeMonth = useCallback(
    (month: number) => {
      setNowDate(dayjs(nowDate.month(month)))
      changeDate(dayjs(nowDate.month(month)))
    },
    [changeDate, nowDate],
  )

  const changeYear = useCallback(
    (year: number) => {
      setNowDate(dayjs(nowDate.year(year)))
      changeDate(dayjs(nowDate.year(year)))
    },
    [changeDate, nowDate],
  )

  useEffect(() => {
    setNowDate(curDate)
  }, [curDate])

  return (
    <div
      className={classNames(
        'absolute top-full left-0 z-10 mt-1 flex origin-top flex-col rounded border border-gray-100 bg-white py-1 px-3 shadow transition-all',
        active ? 'scale-y-100' : ' scale-y-0',
        className,
      )}>
      <DayHeader
        curDate={nowDate}
        changeMonth={changeMonth}
        changeYear={changeYear}
        handleYear={handleYear}
        handleMonth={handleMonth}
      />
      <DayList changeDay={changeDay} curDate={nowDate} />
    </div>
  )
}

export default DayPanel
