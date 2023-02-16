import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type DemoBlockProps = {
  children: JSX.Element
}
const DemoBlock = ({ children }: DemoBlockProps): JSX.Element => {
  return (
    <section className={styles.container}>
      <div>{}</div>
      <div className={styles.demo}>{children}</div>
    </section>
  )
}
export default DemoBlock
