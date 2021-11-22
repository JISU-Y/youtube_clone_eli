import React from "react"
import VideoItem from "../Video_item/Video_item"
import style from "./Video_list.module.css"

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className={style.videos}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} />
      ))}
    </ul>
  )
}

export default VideoList
