import React from "react";
import styled from "styled-components";
import LogoFacebook from "../../images/Logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillChatLeftFill } from "react-icons/bs";
import { RiNotification2Fill } from "react-icons/ri";
import MyImage from '../../images/myProfile1.jpg'
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <ImageLogo src={LogoFacebook} alt="facebook-logo" />
      </NavbarLeft>
      <NavbarCenter>
        <SearchBar>
          <AiOutlineSearch
            style={{
              fontSize: 20,
              marginLeft: 10,
              color: "darkgray",
              cursor: "pointer",
            }}
          />
          <Input type="text" placeholder="ძიება Facebook-ზე" />
        </SearchBar>
      </NavbarCenter>
      <NavbarRight>
            <NavbarLinks>
                <NavbarLink1>HomePage</NavbarLink1>
                <NavbarLink2>TimeLine</NavbarLink2>
            </NavbarLinks>
            <NavbarIcons>
                    <NavbarIconItem>
                        <BsFillPersonFill />
                        <Span>2</Span>
                    </NavbarIconItem>
                    <NavbarIconItem>
                        <BsFillChatLeftFill />
                        <Span>10</Span>
                    </NavbarIconItem>
                    <NavbarIconItem>
                        <RiNotification2Fill />
                        <Span>8</Span>
                    </NavbarIconItem>
            </NavbarIcons>
            <MyImages src={MyImage} alt="Myprofile/Images" />
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
const MyImages = styled.img`
    display: flex;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fff;
    object-fit: cover;
    cursor: pointer;
    @media only screen and (max-width: 992px) {
    margin-right: 20px;
}
`
const Span = styled.span`
    width: 16px;
    height: 16px;
    background-color: red;
    position: absolute;
    font-size:12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -5px;
    right: -5px;
`
const NavbarIconItem = styled.div`
    display: flex;
    margin-right: 15px;
    position: relative;
`
const NavbarIcons = styled.div`
    display: flex;
    font-size: 20px;
    gap: 10px;
`
const NavbarLinks = styled.div`
    
`
const NavbarLink1 = styled.span`
    margin-left: 20px;
    font-size: 15px;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
    display: none;
}
`
const NavbarLink2 = styled.span`
    margin-left: 20px;
    font-size: 15px;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
    display: none;
}
`
const SearchBar = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  background-color: #fff;
  @media only screen and (max-width: 992px) {
    width: 95%;
}
`;
const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #011631;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  @media only screen and (max-width: 576px) {
    justify-content: space-between;
}
`;
const ImageLogo = styled.img`
  width: 40px;
  margin-left: 20px;
  cursor: pointer;
`;
const Input = styled.input`
color: #000;
border:none;
width: 90%;
height: 26px;
background-color: #fff;
@media only screen and (max-width: 992px) {
    width: 70%;
}
&:focus{
    outline: none;
}
&::placeholder{
    color: darkgray;
}
`

const NavbarLeft = styled.div`
  flex: 3;
  @media only screen and (max-width: 992px) {
    flex: 2;
}
@media only screen and (max-width: 768px) {
    flex: 3;
}
@media only screen and (max-width: 576px) {
    flex: 1;
}
`;
const NavbarCenter = styled.div`
  flex: 5;
  @media only screen and (max-width: 992px) {
    flex: 4;
}
@media only screen and (max-width: 576px) {
    flex: 1;
    display: none;
}
`;
const NavbarRight = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  @media only screen and (max-width: 576px) {
    flex: 1;
}
`;
