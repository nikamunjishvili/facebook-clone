import React from 'react'
import styled from 'styled-components'

const MenuLink = ({Icon,text}) => {
  return (
    <MenuLinkContainer>
        {Icon}
        <MenuLinkText>{text}</MenuLinkText>
        <MenuLinkTextName>{text === "Logout" && "(Nika)"}</MenuLinkTextName>
    </MenuLinkContainer>
  )
}

export default MenuLink

const MenuLinkContainer = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-color: #011631;
        color: #fff;
    }
    @media only screen and (max-width:992px){
        display: block;
        &:hover{
            display: block;
            background-color: #011631;
            color: #fff;
        }
    }
`
const MenuLinkText = styled.span`
    margin-left: 10px;
    margin-right: 5px;
    @media only screen and (max-width:992px){
        display: none;
    }
`
const MenuLinkTextName = styled.span`
    font-weight: 700;
    font-size: 18px;
    @media only screen and (max-width:992px){
        display: none;
    }
`