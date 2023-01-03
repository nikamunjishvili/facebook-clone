import React from "react";
import styled from "styled-components";
import { Users } from "../../data";
import { FiMoreVertical } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { BsFillHandThumbsUpFill, BsFillChatLeftFill } from "react-icons/bs";
import { FaRegThumbsUp, FaShare } from "react-icons/fa";

const Post = ({ post }) => {
  return (
    <PostDiv>
      <Wrapper>
        <Top>
          <TopLeft>
            <Image
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
            />
            <SpanName style={{color:"#fff"}}>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </SpanName>
            <SpanDate style={{color:"#fff"}}>{post.date}</SpanDate>
          </TopLeft>
          <TopRight>
            <FiMoreVertical
              style={{ fontSize: "24px", color: "#fff", cursor: "pointer" }}
            />
          </TopRight>
        </Top>
        <Center>
          <Text style={{color:"#fff"}}>{post.body}</Text>
          <Images src={post.photo} />
        </Center>
        <Bottom>
          <BottomLeft>
            <MdFavorite
              style={{ cursor: "pointer", fontSize: "30px", color: "red" }}
            />
            <BsFillHandThumbsUpFill
              style={{ cursor: "pointer", fontSize: "30px", color: "blue" }}
            />
            <Span style={{color:"#fff"}}>{post.like}</Span>
          </BottomLeft>
          <Right>
            <span style={spanStyle}>{post.comment} . comments . share</span>
          </Right>
        </Bottom>
        <hr style={{ margin: "10px 0" }} />
        <Footer>
          <FooterItem>
            <FaRegThumbsUp
              style={{ marginRight: 10, color: "#fff", fontSize: "30px" }}
            />
            <span style={{ fontWeight: 500 }}>Like</span>
          </FooterItem>
          <FooterItem>
            <BsFillChatLeftFill
              style={{ marginRight: 10, color: "#fff", fontSize: "30px" }}
            />
            <span style={{ fontWeight: 500 }}>Comment</span>
          </FooterItem>
          <FooterItem>
            <FaShare
              style={{ marginRight: 10, color: "#fff", fontSize: "30px" }}
            />
            <span style={{ fontWeight: 500 }}>Share</span>
          </FooterItem>
        </Footer>
      </Wrapper>
    </PostDiv>
  );
};

export default Post;
const FooterItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  cursor: pointer;
  color: #fff;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const spanStyle = {
  fontSize: 15,
  cursor: "pointer",
  color:"#fff"
};
const Right = styled.div``;
const Span = styled.span``;
const BottomLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Images = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  margin-top: 20px;
  cursor: pointer;
`;
const Text = styled.span``;
const PostDiv = styled.div`
  width: 100%;
  margin: 30px 0;
  border-radius: 10px;
  color: #fff;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  @media screen and (max-width: 576px) {
    margin: 10px 0;
  }
`;
const Wrapper = styled.div`
  color: #000;
  padding: 20px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Center = styled.div`
  margin: 20px 0;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.div`
  display: flex;
  align-items: center;
`;
const TopRight = styled.div``;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const SpanName = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
  cursor: pointer;
`;
const SpanDate = styled.span`
  font-size: 14px;
`;
