import React from "react";
import styled from "styled-components";

const Online = ({ onlineuser }) => {
  return (
    <OnlineDIv>
      <FriendRight>
        <ProfileImage>
          <Image src={onlineuser.profilePicture} />
          <SpanOnline></SpanOnline>
        </ProfileImage>
        <span style={{ fontWeight: 500 }}>{onlineuser.username}</span>
      </FriendRight>
    </OnlineDIv>
  );
};

export default Online;
const SpanOnline = styled.span`
  position: absolute;
  background-color: limegreen;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  top: -6px;
  right: -6px;
  border: 2px solid #fff;
`;
const OnlineDIv = styled.div``;
const FriendRight = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
`;
const ProfileImage = styled.div`
  margin-right: 10px;
  position: relative;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
