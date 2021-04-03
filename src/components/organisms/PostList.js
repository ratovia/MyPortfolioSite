import React from "react"
import { Post } from "../molecules/Post"
import styled from "styled-components"

const ListArea = styled.ul`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  list-style: none;
`

const PostItem = styled.li`
  width: 100%;
`
export const PostList = ({ posts }) => {
  return (
    <ListArea>
      {posts.map(post => {
        return (
          <PostItem key={post.date}>
            <Post
              imageUrl={post.imageUrl}
              date={post.date}
              title={post.title}
            ></Post>
          </PostItem>
        )
      })}
    </ListArea>
  )
}
