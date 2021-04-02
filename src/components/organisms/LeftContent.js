import React from "react"
import styled from "styled-components"
import { Profile } from "../molecules/Profile"

const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LeftContent = ({ profileText, skillText, imageUrl }) => {
  return (
    <ContentArea>
      <Profile
        profileText={profileText}
        skillText={skillText}
        imageUrl={imageUrl}
      ></Profile>
    </ContentArea>
  )
}
