import React from 'react'
import styled from 'styled-components'
import RightBarHome from '../rightBarHome/RightBarHome'

const RightBar = () => {
  return (
    <RightBarContainer>
          <Wrapper>
            <RightBarHome />
          </Wrapper>
    </RightBarContainer>
  )
}

export default RightBar

const RightBarContainer = styled.div`
    flex: 3.5;
    background-color: #1c1e21;
    @media screen and (max-width:768px){
      display: none;
    }
    
`
const Wrapper = styled.div`
  padding: 20px 20px 0 0;
  color: #fff;
  display: flex;
  flex-direction: column;
`
