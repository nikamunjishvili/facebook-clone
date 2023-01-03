import React from "react";
import {FiRss} from 'react-icons/fi';
import styled  from "styled-components";
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {BsFillCameraVideoFill} from "react-icons/bs";
import {MdGroups} from "react-icons/md";
import {BsFillBookmarkFill} from "react-icons/bs";
import {FaShoppingCart} from "react-icons/fa";
import {BsCalendarEventFill} from "react-icons/bs";
import {MdBrightnessMedium} from "react-icons/md";
import {ImExit} from "react-icons/im";
import MenuLink from "../menuLink/MenuLink";
import Profile1 from '../../images/profile1.webp'
import Profile2 from '../../images/profile2.webp'
import Profile3 from '../../images/profile3.webp'
import Profile4 from '../../images/profile4.jpg'
import Profile5 from '../../images/profile5.jpg'
const SideBar = () => {
  return (
    <SidebarContainer>
      <WrappersDiv>
        <MenuLink Icon={<FiRss />} text="Feeds"/>
        <MenuLink Icon={<BsFillChatLeftTextFill/>} text="Chats"/>
        <MenuLink Icon={<BsFillCameraVideoFill/>} text="Video"/>
        <MenuLink Icon={<MdGroups />} text="Friends"/>
        <MenuLink Icon={ <BsFillBookmarkFill/>} text="Bookmark"/>
        <MenuLink Icon={<FaShoppingCart/>} text="Marketplace"/>
        <MenuLink Icon={ <BsCalendarEventFill/>} text="Event"/>
        <MenuLink Icon={ <MdBrightnessMedium />} text="Theme"/>
        <MenuLink Icon={<ImExit />} text="Logout"/>
          <Button>Show More</Button>
          <Hr/>

          <UlList>
              <LiList>
                  <ImageList src={Profile1} />
                  <Span style={{color:"#fff"}}>Mark</Span>
              </LiList>
              <LiList>
                  <ImageList src={Profile2} />
                  <Span style={{color:"#fff"}}>Janet</Span>
              </LiList>
              <LiList>
                  <ImageList src={Profile3} />
                  <Span style={{color:"#fff"}}>Lucy</Span>
              </LiList>
              <LiList>
                  <ImageList src={Profile4} />
                  <Span style={{color:"#fff"}}>Diana</Span>
              </LiList>
              <LiList>
                  <ImageList src={Profile5} />
                  <Span style={{color:"#fff"}}>Lola</Span>
              </LiList>
          </UlList>
      </WrappersDiv>
    </SidebarContainer>
  );
};

export default SideBar;
const Hr = styled.hr`
  margin: "10px 0";
  @media only screen and (max-width:992px){
   display: none;
  }
`
const WrappersDiv = styled.div`
padding: 20px;
@media only screen and (max-width:992px){
   padding: 16px;
  }
  @media only screen and (max-width:768px){
    padding: 3px;
  }
`
const Button = styled.button`
  background-color: #011631;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  padding: 10px;
  margin: 20px;
  width: 150px;
  border: none;
  cursor: pointer;
  @media only screen and (max-width:992px){
    display: none;
  }
`
const Span = styled.span`
  font-weight: 500;
  color: #000;
  @media only screen and (max-width:992px){
    display: none;
  }
`
const ImageList = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
`
const LiList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  
`
const UlList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const SidebarContainer = styled.div`
    flex: 3;
    height: calc(100vh - 50px);
    position: sticky;
    top: 50px;
    background-color: #1c1e21;
    color: #fff;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      width: 5px;
    }
    ::-webkit-scrollbar-track{
      background-color: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb{
      background-color: grey;
    }
    @media only screen and (max-width:992px){
    flex: 1;

    ::-webkit-scrollbar{
      display: none;
    }
    ::-webkit-scrollbar-track{
      display: none;
    }
    ::-webkit-scrollbar-thumb{
      display:none;   
}
  }
  @media only screen and (max-width:768px){
    display: block;
  }
  @media only screen and (max-width:756px){
    padding: 3px;
  }
`;