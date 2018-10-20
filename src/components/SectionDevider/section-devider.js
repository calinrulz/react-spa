import React from 'react'

import styled from 'styled-components'

const DeviderBackground = styled.section`
  background: ${props => `url(${props.image}) no-repeat top center`};
  background-size: cover;
  height: 165px;
`

const SectionDevider = ({ image }) => {
  return (
    <div>
      <DeviderBackground image={image} />
    </div>
  )
}

export default SectionDevider
