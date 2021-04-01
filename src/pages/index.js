import React from "react"
import { Navigation } from "../components/organisms/Navigation"
import { TopTemplate } from "../components/templates/TopTemplate"

const index = () => {
  return (
    <div>
      <TopTemplate
        headerText="ryuji furukido"
        navigation={<Navigation></Navigation>}
        leftContent={<div></div>}
        rightContent={<div></div>}
        mainContent={<div></div>}
      ></TopTemplate>
    </div>
  )
}

export default index
