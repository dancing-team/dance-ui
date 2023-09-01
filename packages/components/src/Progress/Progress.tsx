import React from 'react'

type stringKey = Record<string, string>

export type ProgressProps = {
  // 颜色
  color?: string
  // 文字颜色
  textColor?: string
  // 进度
  percent?: string
  // 显示文字
  withBadge?: boolean
  // 文字内容
  label?: string
}

const progressClass: stringKey = {
  '0': '0',
  '1': '1/4',
  '2': '1/2',
  '3': '3/4',
  '4': '4/4',
}

const Progress: React.FC = (props: ProgressProps): JSX.Element => {
  return (
    <div>
      <div className="m-auto block w-72 rounded-lg bg-white p-4 shadow">
        {props.withBadge && (
          <div>
            <span className={`inline-block rounded-full py-1 px-2 text-xs font-light uppercase`}>Task in progress</span>
          </div>
        )}
        <div className={`mt-3 h-2 w-full rounded-full bg-gray-400`}>
          <div
            className={`w-${progressClass[props.percent ?? '0']} h-full text-center text-xs text-white ${
              props.color
            } rounded-full`}>
            {props.label}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Progress
