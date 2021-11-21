import React from "react"
import VideoItem from "../Video_item/Video_item"
import style from "./Video_list.module.css"

const VideoList = (props) => {
  return (
    <ul className={style.videos}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  )
}

export default VideoList
