// 필요한 네트워크 처리
class Youtube {
  // api key 받아옴
  constructor(key) {
    this.key = key
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    }
  }

  // 인기 동영상 fetch
  async mostPopular() {
    // fetch 요청해서 response 받으면 그걸 json형태로 변환하고
    // video state에다가 result의 items(video data들 있는 것)를 set 해준다
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    )
    const result = await response.json()
    return result.items
  }

  // 동영상 검색 결과
  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
    const result = await response.json()
    const items = result.items.map((item) => ({ ...item, id: item.id.videoId }))
    return items
  }
}

export default Youtube
