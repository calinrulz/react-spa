import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import businessPeople from '../../assets/images/business-people.jpg'
import styles from './styles.module.css'

const ListWithImage = ({ data }) => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col xs="6">
          <figure className={styles.leftImage}>
            <img src={businessPeople} alt="Business People" />
          </figure>
        </Col>

        <Col xs="6">
          <ul>
            {
              data.data[1].content.map(career => (
                <li key={career.id}>{career.text}</li>
              ))
            }
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default ListWithImage
