import React from "react"
import styled from "styled-components"
import { CircleImageIcon } from "../atoms/CircleImageIcon"
import ratoviaIcon from "../../../static/ratovia_icon.jpg"

const SNSArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
`

export const SNSIcons = () => {
  return (
    <SNSArea>
      <CircleImageIcon imageUrl={ratoviaIcon} size="small"></CircleImageIcon>
      <CircleImageIcon imageUrl={ratoviaIcon} size="small"></CircleImageIcon>
      <CircleImageIcon imageUrl={ratoviaIcon} size="small"></CircleImageIcon>
      <CircleImageIcon imageUrl={ratoviaIcon} size="small"></CircleImageIcon>
    </SNSArea>
  )
}
