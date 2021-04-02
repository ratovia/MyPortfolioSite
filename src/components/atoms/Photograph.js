import React from "react"
import styled from "styled-components"

const RadiusImage = styled.img`
  border-radius: 25px;
`

export const Photograph = ({ imageUrl, radius }) => {
  return (
    <>
      {(() => {
        if (radius) {
          return (
            <RadiusImage
              src={imageUrl}
              alt="アイキャッチ"
              width="100%"
              height="100%"
            ></RadiusImage>
          )
        } else {
          return (
            <img src={imageUrl} alt="アイコン" width="100%" height="100%"></img>
          )
        }
      })()}
    </>
  )
}
