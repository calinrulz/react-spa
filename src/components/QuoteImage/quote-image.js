import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import styles from './styles.module.css'

const QuoteImage = () => {
  return (
    <div className={styles.quoteContainer}>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <p className={styles.quote}><span>"</span>The heart and soul of the company is creativity and innovation<span>"</span></p>
            <p className={styles.author}>Bob Iger</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default QuoteImage
