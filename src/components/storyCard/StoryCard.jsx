import React from 'react'
import styled from 'styled-components'
const StoryCard = ({user}) => {
  return (
         <StoriesCard>
               <Overlay></Overlay>
               <Images src={user.profilePicture} alt="" />
               <ImagesBack src={user.profilePicture} alt="" />
               <Span>{user.username}</Span>
         </StoriesCard>
  )
}

export default StoryCard
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
const StoriesCard = styled.div`
  position: relative;
    flex-basis: 20%;
    margin: 5px;
    display: flex;
`
const Images= styled.img`
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
const ImagesBack= styled.img`
     width: 100%;
    height: 220px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
`