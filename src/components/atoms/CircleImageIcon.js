import React from "react"
import styled from "styled-components"

const CircleImage = styled.img`
  border-radius: 50%;
  background-color: white;
`
export const CircleImageIcon = ({ imageUrl, size }) => {
  return (
    <>
      {(() => {
        if (size === "large") {
          return (
            <CircleImage
              src={imageUrl}
              alt="アイコン"
              width="240px"
              height="240px"
            ></CircleImage>
          )
        } else if (size === "small") {
          return (
            <CircleImage
              src={imageUrl}
              alt="アイコン"
              width="48px"
              height="48px"
            ></CircleImage>
          )
        } else {
          return (
            <CircleImage
              src={imageUrl}
              alt="アイコン"
              width="200px"
              height="200px"
            ></CircleImage>
          )
        }
      })()}
    </>
  )
}
