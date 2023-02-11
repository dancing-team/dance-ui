import React, { useRef, useEffect, useState, ReactNode, Fragment } from 'react';
import classNames from 'classnames';
import { judgeLinkType, judgeButtonType, judgeElevatorType, judgeBackTopType } from "./Type";
import type { configItemType, linkActionConfig, elevatorActionConfig, buttonActionConfig, backTopActionConfig } from "./Type";
import { findScrollDom } from './utils';
import { commonStyle, platformStyles } from './style';
export type FloatButtonGroupPropsType = {

  // ---- 结构相关 ----
  /** 结构对象数组，具体配置详见README */
  configs: Array<configItemType>,

  // ---- 样式相关 ----
  /** 是否添加阴影效果 */
  shadow?: boolean,
  /** 是否使用现有电商平台样式 */
  platformStyle?: "default" | "JingDong" | "TaoBao",

  // ---- 定位相关 ----
  /** 定位属性 */
  left?: string,
  top?: string,
  bottom?: string,
  right?: string
}

const FloatButtonGroup  =(props: React.PropsWithChildren<FloatButtonGroupPropsType>): JSX.Element => {

  const {
    configs,
    shadow = true,
    platformStyle = 'default',
    ...restProps
  } = props;

  // 预处理configs数组中的config对象：如给某些缺省值添加默认值 
  configs.map((config) => {
    if(!('description' in config)) {
      config.description = "默认"
    }
    // 根据type处理action
    const type = config.type;
    const action = config.action;
    if(judgeLinkType(config, action)) {
      if(action.hasOwnProperty('href')) {
        if(action.href!.indexOf('http') !== 0) {
          action.href = 'http://' + action!.href;
        }
      }
      if(!action.hasOwnProperty('target')) {
        action.target = "_blank";
      }
    } else if(judgeBackTopType(config, action)) {
      if(!action.hasOwnProperty('visibleHeight')) {
        action.visibleheight = 0;
      }
    }
  })

  return (
    <div>
      <ul 
        className={
          classNames(
            commonStyle["ulStyle"],
            shadow ? commonStyle['shadowStyle'] : null,
            platformStyles[`${platformStyle}Ul`]
          )
        }
        style={restProps}
      >
        {configs.map((config, index) =>
        <Fragment key={index}>
          {(() => {
            switch(config.type) {
              case "link" :
                return linkContent(config.action, config.description!, platformStyle);
              case "elevator":
                return elevatorContent(config.action, config.description!, platformStyle);
              case "button":
                return buttonContent(config.action, config.description!, platformStyle);
              case "backTop":
                return backTopContent(config.action, config.description!, platformStyle);
            }
          })()}
        </Fragment>
        )}
      </ul>
    </div>
  )
}

function linkContent(action: linkActionConfig, description: ReactNode, platformStyle: "default" | "JingDong" | "TaoBao") {
  return (
    <li 
      className={classNames(
        commonStyle["liStyle"],
        platformStyles[`${platformStyle}Li`]
      )}
    >
      <a
        className={classNames(
          commonStyle["aStyle"],
          platformStyles[`${platformStyle}A`]
        )}
        {...action}
      >
          {description}
      </a>
    </li>
  )
}

function elevatorContent(action: elevatorActionConfig, description: ReactNode, platformStyle: "default" | "JingDong" | "TaoBao") {

  // 寻找按钮控制的滚动元素——最近的有滚动条的父级元素（类型问题）
  const [scrollDom, setScrollDom] = useState<any>(null);
  const refToFindScroll= useRef<any>(null);
  useEffect(() => {
    setScrollDom(findScrollDom(refToFindScroll.current));
  })

  return (
    <li 
      className={classNames(
        commonStyle["liStyle"],
        platformStyles[`${platformStyle}Li`]
      )}
    >
      <a
        ref={refToFindScroll}
        className={classNames(
          commonStyle["aStyle"],
          platformStyles[`${platformStyle}A`]
        )}
        onClick={() => {
          // 滚动元素为body时需要用window对象调用scrollTo方法
          if(scrollDom === document.body) {
            window.scrollTo({
              top: action.top || 0,
              behavior: 'smooth'
            });
          } else {
            scrollDom.scrollTo({
              top: action.top || 0,
              behavior: 'smooth'
            });
          }
        }}
      >
          {description}
      </a>
    </li>
  )
}

function buttonContent(action: buttonActionConfig, description: ReactNode, platformStyle: "default" | "JingDong" | "TaoBao") {

  return (
    <li 
      className={classNames(
        commonStyle["liStyle"],
        platformStyles[`${platformStyle}Li`]
      )}
    >
      <a
        className={classNames(
          commonStyle["aStyle"],
          platformStyles[`${platformStyle}A`]
        )}
        onClick={action.onClick}
      >
          {description}
      </a>
    </li>
  )
}

function backTopContent(action: backTopActionConfig, description: ReactNode, platformStyle: "default" | "JingDong" | "TaoBao") {

  // 寻找按钮控制的滚动元素——最近的有滚动条的父级元素（类型问题）
  const [scrollDom, setScrollDom] = useState<any>(null);
  const refToFindScroll= useRef<any>(null);
  useEffect(() => {
    setScrollDom(findScrollDom(refToFindScroll.current));
  })

  // backTop可视控制相关逻辑:
  const [throttleTool, setThrottleTool] = useState<boolean>(false);
  const [visible, setvisible] = useState<boolean>(action.visibleheight === 0);
  const handleScroll = () => {
    if(throttleTool) {
      return;
    }
    setThrottleTool(false);
    setTimeout(() => {
      const scrollTop = scrollDom === document.body ? document.documentElement.scrollTop : scrollDom.scrollTop;
      action.visibleheight && setvisible(scrollTop >= action!.visibleheight);
    })
  }
  useEffect(() => {
    // 如果滚动元素为body，监听scroll事件需要用window对象调用addEventListener
    if(scrollDom === document.body) {
      window.addEventListener("scroll", handleScroll);
    }else {
      scrollDom?.addEventListener("scroll", handleScroll);
    }
    return () => {
      if(scrollDom === document.body) {
        window.removeEventListener("scroll", handleScroll);
      }else {
        scrollDom?.removeEventListener("scroll", handleScroll);
      }
    }
  }, [scrollDom])

  return (
    <li 
      style={{display: visible
        ? "block"
        : "none"
      }}
      className={classNames(
        commonStyle["liStyle"],
        platformStyles[`${platformStyle}Li`]
      )}
    >
      <a
        ref={refToFindScroll}
        className={classNames(
          commonStyle["aStyle"],
          platformStyles[`${platformStyle}A`]
        )}
        onClick={() => {
          if(scrollDom === document.body) {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } else {
            scrollDom.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }}
      >
          {description}
      </a>
    </li>
  )
}
FloatButtonGroup.defaultProps = {
  shadow: true
}

export default FloatButtonGroup
