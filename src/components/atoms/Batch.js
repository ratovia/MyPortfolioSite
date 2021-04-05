import React from "react"
import styled from "styled-components"
import { Typography } from "./Typography"

const BatchArea = styled.div`
  padding: 5px 15px;
  border-radius: 15px;
  background-color: #f2cc69;
  display: inline-block;
`
export const Batch = ({ label }) => {
  return (
    <BatchArea>
      <Typography label={label} color="#424242"></Typography>
    </BatchArea>
  )
}
