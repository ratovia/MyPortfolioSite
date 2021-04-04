import React from "react"
import { CircleImageIcon } from "../atoms/CircleImageIcon"
import { FrederickaH2 } from "../atoms/FrederickaText"
import styled from "styled-components"

const LinkArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
`

const TitleText = styled.div`
  align-self: flex-start;
  margin-bottom: 60px;
`

const LinkListTop = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-around;
`
const LinkListMiddle = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
`
const LinkListBottom = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: space-around;
`

const Container = styled.div`
  padding: 10px 40px;
`

export const Link = ({ links }) => {
  return (
    <LinkArea>
      <TitleText>
        <FrederickaH2 label="Links" color="white"></FrederickaH2>
      </TitleText>
      <LinkListTop>
        {links.slice(0, 3).map(link => {
          return (
            <Container key={link.name}>
              <CircleImageIcon
                imageUrl={link.imageUrl}
                size="medium"
              ></CircleImageIcon>
            </Container>
          )
        })}
      </LinkListTop>
      <LinkListMiddle>
        {links.slice(3, 6).map(link => {
          return (
            <Container key={link.name}>
              <CircleImageIcon
                imageUrl={link.imageUrl}
                size="medium"
              ></CircleImageIcon>
            </Container>
          )
        })}
      </LinkListMiddle>
      <LinkListBottom>
        {links.slice(6, 9).map(Link => {
          return (
            <Container key={Link.name}>
              <CircleImageIcon
                imageUrl={Link.imageUrl}
                size="medium"
              ></CircleImageIcon>
            </Container>
          )
        })}
      </LinkListBottom>
    </LinkArea>
  )
}
