import React from "react"
import { LeftContent } from "../components/organisms/LeftContent"
import { Navigation } from "../components/organisms/Navigation"
import { TopTemplate } from "../components/templates/TopTemplate"
import { PostList } from "../components/organisms/PostList"
import { Skills } from "../components/organisms/Skills"
import { Footer } from "../components/organisms/Footer"
import { data } from "../store/data"

const index = () => {
  return (
    <div>
      <TopTemplate
        headerText={data.headerText}
        navigation={<Navigation></Navigation>}
        leftContent={
          <LeftContent
            imageUrl={data.profileIcon}
            profileText={data.profileText}
            skillText={data.profileSkills}
          ></LeftContent>
        }
        rightContent={<PostList posts={data.posts}></PostList>}
        mainContent={<Skills skills={data.skills}></Skills>}
        footerContent={<Footer></Footer>}
      ></TopTemplate>
    </div>
  )
}

export default index
