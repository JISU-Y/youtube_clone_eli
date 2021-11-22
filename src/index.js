import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Youtube from "./service/youtube"

// youtube class를 import
// env파일에서 key 가져와서 youtube 클래스 만듦
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY)
// 여기서는 딱 한번 실행되므로 좋다.

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
)
