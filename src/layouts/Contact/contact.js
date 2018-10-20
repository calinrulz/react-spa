import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import SectionTitle from '../../components/SectionTitle/sectionTitle'
import ContactForm from '../../components/ContactForm/contact-form'

import styles from './styles.module.css'

const Contact = ({ id, data }) => {
  return (
    <div className={styles.container} id={id}>
      <SectionTitle title={data.data[3].title} />

      <Container className={styles.contactSection}>
        <Row>
          <Col xs="6">
            <ContactForm />
          </Col>

          <Col xs="6">
            Location map coming soon!
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
