import React from 'react'
import {
  Card,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap'

import styles from './styles.module.css'

const PrismaCard = ({ title, text, img }) => {
  const Icon = img;

  return (
    <Card className={styles.container}>
      <CardBody className={styles.cardContainer}>
        <Icon className={styles.icon} />
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <span className={styles.underline}></span>
      </CardBody>
    </Card>
  )
}

export default PrismaCard
