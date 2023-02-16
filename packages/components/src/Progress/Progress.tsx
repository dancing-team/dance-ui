import React from 'react';

type stringKey = Record<string, string>

export interface ProgressProps {
    // 颜色 
    color?: string;
    // 文字颜色
    textColor?: string;
    // 进度
    percent?: string;
    // 显示文字
    withBadge?: boolean;
    // 文字内容
    label?: string;
}

const progressClass: stringKey = {
  '0': '0',
  '1': '1/4',
  '2': '1/2',
  '3': '3/4',
  '4': '4/4',
}

const Progress:React.FC = (props: ProgressProps): JSX.Element => {
    return (
        <div>
            <div className="block p-4 m-auto bg-white rounded-lg shadow w-72">
                {props.withBadge && (
                    <div>
                        <span
                            className={`text-xs font-light inline-block py-1 px-2 uppercase rounded-full`}
                        >
                            Task in progress
                        </span>
                    </div>
                )}
                <div className={`w-full h-2 bg-gray-400 rounded-full mt-3`}>
                    <div className={`w-${progressClass[props.percent ?? '0'] } h-full text-center text-xs text-white ${props.color} rounded-full`}>
                        {props.label}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Progress;
