import React from 'react'
import styled from 'styled-components'
import Image1 from '../../images/Image.png'
import Image2 from '../../images/Image2.png'
import Online from '../online/Online'
import { Usersonline } from '../../data'
const RightBarHome = () => {
  return (
    <RightBars>
        <Wrapper>
        <SecondImage src={Image2} />
        <SecondImage src={Image1} />
        </Wrapper>

        <SpanText>Online Friends</SpanText>
        <Ul>
            {Usersonline.map((u) => (
                <Online key={u.id} onlineuser={u} />
            ))}
        </Ul>
    </RightBars>
  )
}

export default RightBarHome
const Ul = styled.ul`
    
`
const SpanText = styled.span`
    display: flex;
    margin-bottom: 20px;
`
const SecondImage = styled.img`
    width: 100%;
    height: 100px;
    margin: 10px 0;
    border-radius: 10px;
    cursor: pointer;
    object-fit: cover;
`
const RightBars = styled.div`
    
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

