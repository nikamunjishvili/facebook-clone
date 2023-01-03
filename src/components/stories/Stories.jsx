import React from 'react'
import styled from 'styled-components'
import Image1 from '../../images/myProfile1.jpg'
import addIcon from '../../images/addIcon.jpeg'
import StoryCard from '../storyCard/StoryCard'
import { Users } from '../../data'
const Stories = () => {
  return (
    <StoriesContainer>
         <StoriesCard>
            <Overlay></Overlay>
               <ImagesUser src={Image1} alt="" />
               <ImagesBack src={Image1} alt="" />
               <Icons src={addIcon} alt="" />
               <Span>Nika</Span>
         </StoriesCard>
         {Users.map((item) =>(
           <StoryCard key={item.id} user={item}/>
         ))}
    </StoriesContainer>
  )
}

export default Stories

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.6;
    border-radius: 10px;
`

const StoriesContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
    border-radius: 10px;
    -webkit-box-shadow:2px 4px 10px 1px rgba(0,0,0,0.57);
    box-shadow: 2px 4px 10px 1px rgba(201,201,201,0.67);
    
`
const StoriesCard = styled.div`
    position: relative;
    flex-basis: 20%;
    margin: 5px;
    display: flex;
    @media screen and (max-width:576px){
    
    }
`
const ImagesUser = styled.img`
    display: flex;
    position: absolute;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    top: 10px;
    left: 10px;
    border: 3px solid #0064e8;
    object-fit: cover;
`
const ImagesBack = styled.img`
    width: 100%;
    height: 220px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
`
const Span = styled.span`
    position: absolute;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    bottom: 10px;
    text-align: center;
    cursor: pointer;
    color: #fff;
`
const Icons = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    color: #0047a3;
    width: 43px;
    height: 46px;
    border-radius:50%;
    transform: translate(-50%);
    cursor: pointer;
`