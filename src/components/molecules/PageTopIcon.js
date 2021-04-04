import React from "react"
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow"
import styled from "styled-components"

const IconBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f04949;
  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PageTopIcon = () => {
  return (
    <IconBox>
      <DoubleArrowIcon style={{ fontSize: 56 }}></DoubleArrowIcon>
    </IconBox>
  )
}
