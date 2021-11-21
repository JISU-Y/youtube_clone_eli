import React from "react"
import VideoItem from "../Video_item/Video_item"

const VideoList = (props) => {
  return (
    <ul>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  )
}

export default VideoList
