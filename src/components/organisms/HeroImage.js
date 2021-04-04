import React from "react"
import styled from "styled-components"
import { Photograph } from "../atoms/Photograph"

const HeroArea = styled.div`
  padding: 100px 132px;
  height: 100vh;
`
export const HeroImage = ({ imageUrl }) => {
  return (
    <HeroArea>
      <Photograph imageUrl={imageUrl} radius></Photograph>
    </HeroArea>
  )
}
