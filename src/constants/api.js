const baseUrl = `https://www.googleapis.com/youtube/v3/`;
const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function fetchDefaultData() {
  try {
    console.log("fetch");
    const res = await fetch(`${baseUrl}videos?key=${apiKey}&part=id,snippet,contentDetails,statistics&chart=mostPopular&maxResults=10&regionCode=kr`);
    const data = await res.json();
    return [...data.items];
  } catch (e) {
    console.error("fetchDefaultData 실패", e);
    return [];
  }
}
export async function fetchVideoData(videoId) {
  try {
    console.log("fetch");
    const videoData = await (await fetch(`${baseUrl}videos?key=${apiKey}&part=id,snippet,contentDetails,statistics&id=${videoId}`)).json();
    const video = videoData.items[0];
    const relatedVideoListData = await (await fetch(`${baseUrl}search?key=${apiKey}&part=snippet&type=video&relatedToVideoId=${videoId}`)).json();
    const videoList = relatedVideoListData.items;
    return { currentVideo: video, relatedVideoList: videoList };
  } catch (e) {
    console.error("fetchVideoData 실패", e);
    return {};
  }
}
