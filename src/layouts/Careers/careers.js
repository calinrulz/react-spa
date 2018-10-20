import React from 'react'

import SectionTitle from '../../components/SectionTitle/sectionTitle'
import ListWithImage from '../../components/ListWithImage/listWithImage';

import styles from './styles.module.css'

const Careers = ({ id, data }) => {
  return (
    <div className={styles.container} id={id}>
      <SectionTitle title={data.data[1].title} subtitle={data.data[1].subtitle} />
      <ListWithImage data={data} />
    </div>
  )
}

export default Careers
