import React from 'react';
import FloatButtonGroup from '../../FloatButtonGroup';
import { configItemType } from '../../FloatButtonGroup';
import { IconType } from '../../Icon';
import Icon from '../../Icon';
import './index.css';
const TBconfigs: configItemType[] = [
    {
      description: '淘宝',
      type: "link",
      action: {
        href: "www.taobao.com",
        target: '_blank'
      }
    },
    {
      description: "按钮",
      type: "button",
      action: {
        onClick: () => {
          alert("淘宝风格");
        }
      }
    },
    {
      description: "电脑",
      type: "elevator",
      action: {
        top: 1300
      }
    },
    {
      description: <>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Icon type={IconType.LOADING} style={{ fontSize: 16, color: 'black' }} href={'https://github.com/dancing-team/dance-ui'} />
          <div>回到顶部</div>
        </div>
      </>,
      type: "backTop",
      action: {
        visibleheight: 100,
      }
    }
]
const JDconfigs: configItemType[] = [
  {
    description: '京东',
    type: "link",
    action: {
      href: "www.jd.com",
      target: '_blank'
    }
  },
  {
    description: "按钮",
    type: "button",
    action: {
      onClick: () => {
        alert("京东风格");
      }
    }
  },
  {
    description: "手机",
    type: "elevator",
    action: {
      top: 1000
    }
  },
  {
    description: <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Icon type={IconType.LOADING} style={{ fontSize: 16, color: 'black' }} href={'https://github.com/dancing-team/dance-ui'} />
        <div>回到顶部</div>
      </div>
    </>,
    type: "backTop",
    action: {
      visibleheight: 300,
    }
  }
]
export default () => (
    <div style={{
      overflowY: 'auto',
      height: '500px',
      position: 'relative',
    }}>
        <div style={{
          height: '2000px',
          width: '300px',
          background: 'green'
        }}>
          <div style={{
            height: '1000px'
          }}>
            右侧悬浮按钮可操作此滚动盒子
            <div style={{
              color: '#fff'
            }}>
              欢迎点击回到顶部按钮上的icon进入我们的github
            </div>
          </div>
          <div style={{height: '300px'}}>手机</div>
          <div>电脑</div>
          <FloatButtonGroup configs={TBconfigs} right='90px' top='400px' platformStyle="TaoBao"></FloatButtonGroup>
          <FloatButtonGroup configs={JDconfigs} right='165px' top='400px' platformStyle="JingDong"></FloatButtonGroup>
        </div>
    </div>
);