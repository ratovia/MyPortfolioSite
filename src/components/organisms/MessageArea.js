import React from "react"
import styled from "styled-components"
import { TypographyH5, TypographyH4 } from "../atoms/Typography"
import { SNSIcons } from "../molecules/SNSIcons"
import { Photograph } from "../atoms/Photograph"
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-basis: 100px;
  padding: 100px;
`

const PhotoArea = styled.div`
  width: 465px;
  margim-right: 100px;
`

const TextArea = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
`

const MessageItem = styled.div`
  margin-bottom: 60px;
`

export const MessageArea = ({ imageUrl, visionText }) => {
  return (
    <Container>
      <PhotoArea>
        <Photograph imageUrl={imageUrl} radius></Photograph>
      </PhotoArea>
      <TextArea>
        <MessageItem>
          <TypographyH4
            label="昨日の自分より今日の自分を意識して日々学んでいます。"
            color="white"
          ></TypographyH4>
        </MessageItem>
        <MessageItem>
          <TypographyH5
            label="この先やってみたいこと"
            color="white"
          ></TypographyH5>
          <TypographyH5 label={visionText} color="white"></TypographyH5>
        </MessageItem>
        <MessageItem>
          <SNSIcons></SNSIcons>
        </MessageItem>
      </TextArea>
    </Container>
  )
}
