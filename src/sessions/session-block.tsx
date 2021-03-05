import React from "react"
import "twin.macro"

import SessionLink from "./../sessions/upcoming-session"
import ThreeDBlueButton from "../components/core/three-d-blue-button"
import VideoEmbed from "./../components/video-embed"

type SessionBlockProps = {
  description: string
  title: string
  links?: typeof SessionLink[]
  video: string
}

const SessionBlock = (sessionBlockProps: SessionBlockProps) => {
  return (
    <div tw="flex xl:flex-row flex-col items-center lg:w-2/3 w-5/6 m-4">
      <div tw="xl:w-2/3 w-full m-4 ">
        <div tw="text-center xl:w-4/5 rounded-lg shadow-md p-2">
          {sessionBlockProps.description}
        </div>
      </div>
      <div tw="xl:w-1/3 w-full rounded-lg shadow-md p-1 m-2">
        <VideoEmbed
          title={sessionBlockProps.title}
          video={sessionBlockProps.video}
        />
        {sessionBlockProps.links && (
          <div tw="m-4 sm:space-x-4 space-y-2 sm:space-y-0 flex flex-col sm:flex-row items-center justify-center">
            {sessionBlockProps.links.map((link) => {
              return (
                <ThreeDBlueButton tw="text-xs " href={link.url}>
                  {link.label}
                </ThreeDBlueButton>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default SessionBlock
