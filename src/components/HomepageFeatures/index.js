import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Thing 1',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We do thing 1. This is some very long text so that this box looks somewhat normal.
        This is some very long text so that this box looks somewhat normal.
      </>
    ),
  },
  {
    title: 'Thing 2',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We do thing 2. This is some very long text so that this box looks somewhat normal.
        This is some very long text so that this box looks somewhat normal.
      </>
    ),
  },
  {
    title: 'Thing 3',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We do thing 3. This is some very long text so that this box looks somewhat normal.
        This is some very long text so that this box looks somewhat normal.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
  );
}

export default function HomepageFeatures() {
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
  );
}
