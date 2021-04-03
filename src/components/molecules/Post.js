import React from "react"
import styled from "styled-components"
import { Photograph } from "../atoms/Photograph"
import { TypographyH5, TypographyH6 } from "../atoms/Typography"

const PostArea = styled.div`
  width: 100%;
  height: 470px;
  position: relative;
`

const PostDate = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`

const PostTitle = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
`

export const Post = ({ imageUrl, date, title }) => {
  return (
    <PostArea>
      <Photograph imageUrl={imageUrl}></Photograph>
      <PostDate>
        <TypographyH6 label={date} color="#CBCBCB"></TypographyH6>
      </PostDate>
      <PostTitle>
        <TypographyH5 label={title} color="white"></TypographyH5>
      </PostTitle>
    </PostArea>
  )
}
