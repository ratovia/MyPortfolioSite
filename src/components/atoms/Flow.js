import React from "react"
import styled from "styled-components"
import BusinessIcon from "@material-ui/icons/Business"

const FlowArea = styled.div`
  position: relative;
`

const Line = styled.div`
  position: absolute;
  left: 50%;
  border: 1px solid #c4c4c4;
  width: 0;
  height: 420px;
`

const Circle = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;
  color: #323232;
`

export const Flow = () => {
  return (
    <FlowArea>
      <Line></Line>
      <Circle>
        <BusinessIcon style={{ fontSize: 24 }}></BusinessIcon>
      </Circle>
    </FlowArea>
  )
}
