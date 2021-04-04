import React from "react"
import styled from "styled-components"
import { FrederickaText } from "../atoms/FrederickaText"
import { PageTopIcon } from "../molecules/PageTopIcon"

const FooterArea = styled.div`
  width: 100%;
  height: 200px;
`

const IconArea = styled.div`
  float: right;
`

const TextArea = styled.div`
  background-color: #f04949;
  width: 100%;
  height: 100px;
  padding: 0 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Footer = () => {
  return (
    <FooterArea>
      <IconArea>
        <PageTopIcon></PageTopIcon>
      </IconArea>
      <TextArea>
        <FrederickaText
          label="© Copyright 2021 RyuCoding. All rights reserved."
          color="black"
        ></FrederickaText>
      </TextArea>
    </FooterArea>
  )
}
