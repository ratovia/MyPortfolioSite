import React from "react"
import { LeftContent } from "../components/organisms/LeftContent"
import { Navigation } from "../components/organisms/Navigation"
import { TopTemplate } from "../components/templates/TopTemplate"
import ratoviaIcon from "../../static/ratovia_icon.jpg"
import { PostList } from "../components/organisms/PostList"
import backgroundImg from "../../static/bg.jpg"
import { Skills } from "../components/organisms/Skills"

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
        rightContent={
          <PostList
            posts={[
              {
                imageUrl: backgroundImg,
                date: "2020-1-1",
                title: "Hello World",
              },
              {
                imageUrl: backgroundImg,
                date: "2020-1-1",
                title: "Hello World",
              },
              {
                imageUrl: backgroundImg,
                date: "2020-1-1",
                title: "Hello World",
              },
            ]}
          ></PostList>
        }
        mainContent={
          <Skills
            skills={[
              {
                name: "Ruby on Rails",
                imageUrl: backgroundImg,
              },
              {
                name: "HTML/CSS",
                imageUrl: backgroundImg,
              },
              {
                name: "JavaScript",
                imageUrl: backgroundImg,
              },
              {
                name: "Python",
                imageUrl: backgroundImg,
              },
              {
                name: "PHP",
                imageUrl: backgroundImg,
              },
              {
                name: "AWS",
                imageUrl: backgroundImg,
              },
              {
                name: "3DCG",
                imageUrl: backgroundImg,
              },
              {
                name: "linux",
                imageUrl: backgroundImg,
              },
              {
                name: "React",
                imageUrl: backgroundImg,
              },
            ]}
          ></Skills>
        }
      ></TopTemplate>
    </div>
  )
}

export default index
