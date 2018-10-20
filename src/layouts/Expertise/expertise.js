import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import SectionTitle from '../../components/SectionTitle/sectionTitle'
import PrismaCard from '../../components/Card/card'

import Expertise0 from './images/icons/gear';
import Expertise1 from './images/icons/layers-icon';
import Expertise2 from './images/icons/gauge';
import Expertise3 from './images/icons/shield';
import Expertise4 from './images/icons/bug';
import Expertise5 from './images/icons/wifi';
import Expertise6 from './images/icons/lock';

import styles from './styles.module.css'

const Expertise = ({ id, data }) => {
  const icons = [
    { name: Expertise0 },
    { name: Expertise1 },
    { name: Expertise2 },
    { name: Expertise3 },
    { name: Expertise4 },
    { name: Expertise5 },
    { name: Expertise6 }
  ]
  return (
    <div className={styles.container} id={id}>
      <SectionTitle title={data.data[0].title} />
      <Container>
        <Row>
          <Col className={styles.cardContainer}>
            {
              data.data[0].content.map(card => (
                <PrismaCard key={card.id} title={card.title} text={card.text} img={icons[card.id].name} />
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Expertise
