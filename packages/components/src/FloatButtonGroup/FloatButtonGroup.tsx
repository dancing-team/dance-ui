import React from 'react'
import classNames from 'classnames'

type optionItem = {
  description?: string,
  action?: {
    href?: string,
    target?: '_blank' | '_self' | '_parent' | '_top' | 'framename',
  }
}

export type FloatButtonGroupProps = {
  options: Array<optionItem>,
  shadow?: boolean,
}


//hover 字体颜色为白色，未生效（完成）
//实现页面内跳转 增加属性top或者id选择器
//实现a标签转跳 增加href属性(完成)
//实现backTop按钮，增加hasBackTop（boolen属性）
//增加阴影样式(完成)
//a标签处理href提取到外面 && 给无href的标签处理成不转跳(完成)
//des属性添加默认值失效——不能放到useEffect里面(完成)
//tailwind代替allStyle(完成)
const allClass = {
  elevatorList: "cursor-pointer w-[58px] p-0 m-0",
  elevatorItem: "relative list-none w-[58px] h-[58px] bg-white flex justify-center items-center hover:bg-[#e1251b] transition-all",
  elevatorLink: "w-full h-full flex justify-center items-center text-[#333] hover:text-white no-underline",
  elevatorLinkTxt: "text-center block text-[14px] leading-[19px] max-w-[28px]",
  directionItem: 'absolute bottom-0 w-[58px] h-[1px] bg-[linear-gradient(270deg,white,#eeeeee,#eeeeee,white)]',
  shadowStyle: 'shadow'
}

const FloatButtonGroup  =(props: FloatButtonGroupProps): JSX.Element => {

  const {
    options,
    shadow = true,
  } = props;

  /** 预处理options数组中的option对象：属性添加默认值... */
  options.map((option) => {
    if(!('description' in option)) {
      option.description = "默认"
    }
    if('action' in option) {
      if(option.action!.hasOwnProperty('href')) {
        if(option.action!.href?.indexOf('http') !== 0) {
          option.action!.href = 'http://' + option.action!.href;
        }
      }
    }
  })

  return (
    <div>
      <ul 
        className={
          classNames(
            allClass['elevatorList'],
            shadow ? allClass['shadowStyle'] : null
          )
        }
      >
        {options.map((option, index) =>
         <li 
          key={index}
          className={allClass['elevatorItem']}
         >
          <a
            className={allClass['elevatorLink']}
            {...(option.action)}
          >
            <div>
              <span 
                className={allClass['elevatorLinkTxt']}
              >
                {option.description}
              </span>
            </div>
          </a>
          {index !== (options.length - 1) && <span className={allClass['directionItem']}></span>}
         </li>
        )}
      </ul>
    </div>
  )
}
FloatButtonGroup.defaultProps = {}

export default FloatButtonGroup
