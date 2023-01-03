import React from 'react'
import styled from 'styled-components'
import MyProfile from '../../images/myProfile1.jpg'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {MdPermMedia} from 'react-icons/md'
import {BsFillEmojiSmileFill} from 'react-icons/bs'
const Share = () => {
  return (
    <ShareDiv>
        <ShareWrapper>
            <ShareTop>
                <Image src={MyProfile} />
                <Input type="text" placeholder="what's on your mind Nika? " />
            </ShareTop>
            <hr style={{margin:20}}></hr> 
            <ShareBottom>
                <Options>
                    <Optionlast>
                        <BsFillCameraVideoFill style={{fontSize:"30px",marginRight:"10px",color:"#bb0000f2",}}/>
                        <Span>Live Video</Span>
                    </Optionlast>
                    <Option>
                        <MdPermMedia  style={{fontSize:"30px",marginRight:"10px",color:"#2e0196f1"}}/>
                        <Span>Photo/Video</Span>
                    </Option>
                    <Option>
                        <BsFillEmojiSmileFill  style={{fontSize:"30px",marginRight:"10px",color:"#bfc600ec"}}/>
                        <Span>Feelings/Activity</Span>
                    </Option>
                </Options>
            </ShareBottom>
        </ShareWrapper>
    </ShareDiv>
  )
}

export default Share
const Span = styled.span`
color: #fff;
font-size: 14px;
font-weight: 600;
`
const ShareDiv = styled.div`
    width: 100%;
    height: 170%;
    border-radius: 10px;
    -webkit-box-shadow:2px 4px 10px 1px rgba(0,0,0,0.47);
    box-shadow:2px 4px 10px 1px rgba(0,0,0,0.47) ;
    
`
const ShareWrapper= styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width:576px){
        padding: 10px;
    }
`
const ShareTop = styled.div`
    display: flex;
    align-items: center;
`
const ShareBottom= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    font-size: 18px;
    width: 80%;
    &:focus{
        outline: none;
    }
`
const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`
const Option = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    @media screen and (max-width:576px){
        display: none;
    }
`
const Optionlast = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;

`