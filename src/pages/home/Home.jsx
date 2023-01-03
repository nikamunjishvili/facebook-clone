import React from 'react'
import styled from 'styled-components'
import Feed from '../../components/feed/Feed'
import Navbar from '../../components/navbar/Navbar'
import RightBar from '../../components/rightbar/RightBar'
import SideBar from '../../components/sidebar/SideBar'

const Home = () => {
  return (
    <Homes>
        <Navbar />
        <HomeContainer>
          <SideBar />
          <Feed />
          <RightBar />
        </HomeContainer>
    </Homes>
  )
}

export default Home

const Homes = styled.div`
`
const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f1f1f1;
`