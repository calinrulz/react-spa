import React from 'react'
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import styles from './styles.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Container>
        <Row>
          <Col className={styles.footerLinks}>
            <p>Copyright &copy; 2018 - <span>Prisma</span></p>

            <Nav>
              <NavItem>
                <NavLink to=''>Privacy Policy</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to=''>FAQ</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to=''>Support</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
