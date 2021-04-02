import React from "react"
import styled from "styled-components"
import { FrederickaH1 } from "../atoms/FrederickaText"
import { Layout } from "../layout"
const Header = styled.header`
  width: 400px;
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
`

const Nav = styled.div`
  width: 108px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

const Container = styled.div`
  display: flex;
  margin-left: 108px;
  width: calc(100vw - 108px);
  height: 100vh;
`

const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #f04949;
  padding-top: 100px;
`

const RightContent = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: #414141;
`

const MainContent = styled.div`
  display: flex;
  margin-left: 108px;
  width: calc(100vw - 108px);
  min-height: 100px;
  background-color: #414141;
`

export const TopTemplate = ({
  headerText,
  navigation,
  leftContent,
  rightContent,
  mainContent,
}) => {
  return (
    <Layout>
      <Header>
        <FrederickaH1 label={headerText} color="white"></FrederickaH1>
      </Header>
      <Nav>{navigation}</Nav>
      <Container>
        <LeftContent>{leftContent}</LeftContent>
        <RightContent>{rightContent}</RightContent>
      </Container>
      <MainContent>{mainContent}</MainContent>
    </Layout>
  )
}
