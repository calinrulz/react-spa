import React from 'react'

import SectionTitle from '../../components/SectionTitle/sectionTitle'
import QuoteImage from '../../components/QuoteImage/quote-image';

import styles from './styles.module.css'

const AboutUs = ({ id, data }) => {
  return (
    <div className={styles.container} id={id}>
      <SectionTitle title={data.data[2].title} subtitle={data.data[2].subtitle} />
      <QuoteImage />
    </div>
  )
}

export default AboutUs
