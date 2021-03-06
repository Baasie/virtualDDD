import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

import ContentGallery from "../components/content-gallery"
import Video, { VideoContent } from "./video"

const VideosOverview = (props: { levelFilter: string[] }) => {
  const { levelFilter } = props
  const [offset, setOffset] = useState(0)
  const pageLimit = 3
  const allVideos = useStaticQuery<{
    allContentYaml: { nodes: { videos: VideoContent[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { videos: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          videos {
            level
            tags
            title
            video
          }
        }
      }
    }
  `)
    .allContentYaml.nodes.map((node) => node.videos)
    .flat()

  const filteredVideos = allVideos.filter((video) =>
    levelFilter.includes(video.level)
  )
  let filteredOffSet = offset
  if (filteredOffSet > filteredVideos.length) {
    filteredOffSet = Math.floor(filteredVideos.length / pageLimit) * pageLimit
  }

  const currentVideos = filteredVideos.slice(
    filteredOffSet,
    filteredOffSet + pageLimit
  )

  return (
    <ContentGallery
      filteredOffSet={filteredOffSet}
      itemsLength={filteredVideos.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="Videos"
      allTo="/learning-ddd/videos"
    >
      {currentVideos.map((video) => {
        return <Video key={video.title} video={video} />
      })}
    </ContentGallery>
  )
}

export default VideosOverview
