import React from "react"
import styled from "styled-components"
import { Layout } from "../layout"

const Nav = styled.div`
  width: 108px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

const HeroContent = styled.div`
  display: flex;
  margin-left: 108px;
  width: calc(100vw - 108px);
  min-height: 100px;
  background-color: #414141;
`
const MainContent = styled.div`
  display: flex;
  margin-left: 108px;
  width: calc(100vw - 108px);
  min-height: 100px;
  background-color: #414141;
`

const FooterContent = styled.div`
  display: flex;
  margin-left: 108px;
  width: calc(100vw - 108px);
  min-height: 200px;
  background-color: #414141;
`

export const ContentTemplate = ({
  navigation,
  heroContent,
  mainContent,
  footerContent,
}) => {
  return (
    <Layout>
      <Nav>{navigation}</Nav>
      <HeroContent>{heroContent}</HeroContent>
      <MainContent>{mainContent}</MainContent>
      <FooterContent>{footerContent}</FooterContent>
    </Layout>
  )
}
