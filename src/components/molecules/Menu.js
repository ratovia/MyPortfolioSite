import React from "react"
import styled from "styled-components"
import { FrederickaH3 } from "../atoms/FrederickaText"
import { Link } from "gatsby"
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

const NavLink = styled(Link)`
  color: white;
  color: white;
  text-decoration: none;
`
export const Menu = () => {
  return (
    <Flex>
      <NavLink to="/">
        <li>
          <FrederickaH3 label="Top" />
        </li>
      </NavLink>
      <NavLink to="/about">
        <li>
          <FrederickaH3 label="About" />
        </li>
      </NavLink>
      <NavLink to="/work">
        <li>
          <FrederickaH3 label="Work" />
        </li>
      </NavLink>
      <NavLink to="/links">
        <li>
          <FrederickaH3 label="Links" />
        </li>
      </NavLink>
    </Flex>
  )
}
