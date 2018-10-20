import React from 'react'

import styles from './styles.module.css'

const SectionTitle = ({title, subtitle}) => (
  <div className={styles.titleContainer}>
    <h1 className={styles.title}>
      { title }
      <span className={styles.underline}></span>
    </h1>

    {
      subtitle ? <h3 className={styles.subtitle}>{subtitle}</h3> : ''
    }
  </div>
)

export default SectionTitle
