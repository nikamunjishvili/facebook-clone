import React from 'react'
import styled from 'styled-components'
import { Posts } from '../../data'
import Post from '../posts/Post'
import Share from '../share/Share'
import Stories from '../stories/Stories'

const Feed = () => {
  return (
    <FeedContainer>
        <FeedWrapper>
          <Stories />
          <Share />
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </FeedWrapper>
    </FeedContainer>
  )
}

export default Feed
const FeedContainer = styled.div`
    flex: 6;
    background-color: #1c1e21;
    color: #fff;
`
const FeedWrapper = styled.div`
  padding: 20px;
  
  @media screen and (max-width:576px){
        padding: 10px;
      }
`