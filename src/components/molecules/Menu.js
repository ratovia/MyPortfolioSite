import React from "react"
import styled from "styled-components"
import { FrederickaH3 } from "../atoms/FrederickaText"

const Flex = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 50%;
  align-items: center;
`

export const Menu = () => {
  return (
    <Flex>
      <li>
        <FrederickaH3 label="Top" />
      </li>
      <li>
        <FrederickaH3 label="About" />
      </li>
      <li>
        <FrederickaH3 label="Work" />
      </li>
      <li>
        <FrederickaH3 label="Links" />
      </li>
    </Flex>
  )
}
