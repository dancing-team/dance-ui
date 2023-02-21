import React, { useState } from 'react'
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
