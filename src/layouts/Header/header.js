import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import animationDesign from '../../assets/images/prisma-animatie.jpg'
import ArrowDown from './images/arrowDown'

import styled from 'styled-components'
import styles from './styles.module.css'

const AnimationContainer = styled.section`
  background: url(${animationDesign}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
`

const Header = ({ id }) => (
  <div id={id}>
    <AnimationContainer>
      <div className={styles.bounceArrowContainer}>
        <div className={styles.bounceArrow}>
          <AnchorLink offset='160' href="#expertise">
            <ArrowDown />
          </AnchorLink>
        </div>
      </div>
    </AnimationContainer>
  </div>
)

export default Header
