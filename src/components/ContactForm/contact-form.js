import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

import styles from './styles.module.css'

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <Form>
        <Container>
          <Row>
            <Col xs="6">
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="name" id="name" placeholder="Your Name" />
              </FormGroup>

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="phone" id="phone" placeholder="Phone" />
              </FormGroup>
            </Col>

            <Col xs="6">
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="email" name="email" id="email" placeholder="Your Email" />
              </FormGroup>

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="website" id="website" placeholder="Website" />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <Input type="textarea" name="message" id="message" placeholder="Message" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button color="primary">Send Message</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  )
}

export default ContactForm
