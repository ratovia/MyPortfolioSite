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
export const LeftContent = ({ label, imageUrl }) => {
  return (
    <ContentArea>
      <Profile label={label} imageUrl={imageUrl}></Profile>
    </ContentArea>
  )
}
