import React, { useState, useEffect } from "react"
import "./App.css"
import VideoList from "./components/Video_list/Video_list"

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // 마운트되거나 업데이트 될 때마다 실행
    // 게다가 useEffect는 []을 두번째 인자로 갖기 때문에
    // 마운트될 때 딱 한번 실행된다.
    // 아무것도 안적으면 마운트/업데이트 될 때마다 매번
    // 안에 배열에 요소가 있으면 그 요소(state)가 변할 때마다 실행
    // 그것은 바로 video data fetch
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    }

    // fetch 요청해서 response 받으면 그걸 json형태로 변환하고
    // video state에다가 result의 items(video data들 있는 것)를 set 해준다
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDJlUNwhtfVn9v8IjAGQDsOoZRzQ5dBlFQ",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error))
  }, [])
  return <VideoList videos={videos} />
}

export default App

// 프로젝트 시작 방법

// 1. 컴포넌트 미리 정의,
// 작은 단위부터 나눠서 컴포넌트 단위로 만들어 나감
// 스토리북을 이용

// 2. 스켈레톤
// 전반적인 화면 구조를 나눔
// 페이지 단위로 커다란 골격을 나눠서 정의 및 개발
// 다양한 다수의 개발자가 협업하기 좋음

// 3. 전체적인 기능 구현 X / 작은 단위 대표 기능부터 완성
// 개인 사이드 프로젝트에 좋음
// 작은 단위로 기능 구현해서 프로젝트를 완성하고 기능들을 확장해 나감
