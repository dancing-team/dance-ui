import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Tailwind JIT mode ',
    Svg: require('@site/static/svg/tailwindcss.svg').default,
    description: <>使用 Tailwind JIT mode 开发，无需引入全量tailwind css</>,
  },
  {
    title: 'Easy to Override',
    Svg: require('@site/static/svg/override.svg').default,
    description: <>样式可轻易覆盖</>,
  },
  {
    title: 'React + TypeScript',
    Svg: require('@site/static/svg/react.svg').default,
    description: <>使用React + TypeScript开发，拥有严格的类型检查</>,
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
