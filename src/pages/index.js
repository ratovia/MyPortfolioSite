import React from "react"
import { LeftContent } from "../components/organisms/LeftContent"
import { Navigation } from "../components/organisms/Navigation"
import { TopTemplate } from "../components/templates/TopTemplate"
import ratoviaIcon from "../../static/ratovia_icon.jpg"

const index = () => {
  return (
    <div>
      <TopTemplate
        headerText="ryuji furukido"
        navigation={<Navigation></Navigation>}
        leftContent={
          <LeftContent
            imageUrl={ratoviaIcon}
            profileText="インフラエンジニア→プログラミング講師→フロントエンジニア。スキル：HTML/CSS, Rails, React, Atcoder 茶 趣味：ワイン 人生最終目標：ワインとプログラミングを掛け合わせる。"
            skillText="MainSkills: HTML/CSS, Ruby, Ruby on Rails, Scss, JavaScript, AWS, linux
Other: Python, React, Vue.js, PHP, Three.js, Blender,  C, Java, and so on"
          ></LeftContent>
        }
        rightContent={<div></div>}
        mainContent={<div></div>}
      ></TopTemplate>
    </div>
  )
}

export default index
