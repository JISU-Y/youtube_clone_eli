import React, { useState, useEffect } from "react"
import styles from "./App.module.css"
import SearchHeader from "./components/Search_header/Search_header"
import VideoDetail from "./components/video_detail/Video_detail"
import VideoList from "./components/Video_list/Video_list"

// index에서 가져온 youtube class를 dependeny 받아온다.
function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  // MVC 디자인 패턴에서 (React가 가장 많이 사용되는) View를 담당하는 부분은
  // 화면에 나타나는 부분만 담당해야한다.
  // View에서 비즈니스 로직처리, 데이터 통신 등 다 하도록 만들면 안된다.
  // 따라서 이런 데이터 통신 등 비슷한 역할끼리 묵어서 class로 만들고,
  // 필요한 컴포넌트에 주입하면(dependency injection) 된다.
  // 또한 key같은 credential은 코드안에 남겨두지 말것
  const search = (query) => {
    // 받아온 youtube class에 있는 search 함수 실행함으로써 데이터 받아오게 시킴

    setSelectedVideo(null) // 검색 결과 초기화(검색해서 detail 클릭하면 grid가 안바뀌니까)
    // 스피너를 넣어도 됨
    // 혹은 데이터에 문제가 있거나 없는 경우에 error 혹은 기타 구현으로 처리해도 됨
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos)
      }) // 받아온 videos list를 Video state에 set
  }

  useEffect(() => {
    // 마운트되거나 업데이트 될 때마다 실행
    // 게다가 useEffect는 []을 두번째 인자로 갖기 때문에
    // 마운트될 때 딱 한번 실행된다.
    // 아무것도 안적으면 마운트/업데이트 될 때마다 매번
    // 안에 배열에 요소가 있으면 그 요소(state)가 변할 때마다 실행
    // 그것은 바로 video data fetch
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos))
  }, [])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}

        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? "list" : "grid"} />
        </div>
      </section>
    </div>
  )
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
