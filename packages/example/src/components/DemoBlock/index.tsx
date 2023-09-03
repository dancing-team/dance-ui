import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import CodeBlock from '@theme/CodeBlock'

type DemoBlockProps = {
  title?: string
  children: JSX.Element
  src?: string
  codeExpand?: boolean
}

const DemoBlock = ({ children, title, src, codeExpand = true }: DemoBlockProps): JSX.Element => {
  const [showCode, setShowCode] = useState(codeExpand)

  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // 初始设置
    const theme = document.documentElement.getAttribute('data-theme')
    setIsDark(theme === 'dark')

    // 使用 MutationObserver 监听 data-theme 的变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const htmlEle = document.documentElement
          const newTheme = htmlEle.getAttribute('data-theme')
          setIsDark(newTheme === 'dark')
          console.log('newTheme! ', newTheme)
          newTheme === 'dark' ? htmlEle.classList.add('dark') : htmlEle.classList.remove('dark')
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
    })

    // 清理函数
    return () => {
      observer.disconnect()
    }
  }, [])

  const renderCode = () => {
    if (!src || !showCode) return null
    return (
      <CodeBlock language={'tsx'} showLineNumbers>
        {src}
      </CodeBlock>
    )
  }

  return (
    <div className={styles.container}>
      {children ? <div className={styles.demo}>{children}</div> : null}
      {src || title ? (
        <div className={styles.bar}>
          {title && <div className={styles.title}>{title}</div>}
          {src ? (
            <div className={styles.toolbar} onClick={() => setShowCode(!showCode)}>
              {showCode ? '收起源代码' : '展开源代码'}
            </div>
          ) : null}
        </div>
      ) : null}
      {renderCode()}
    </div>
  )
}
export default DemoBlock
