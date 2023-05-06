import styles from "./relatedVideos.module.css";
import Video from "../Video/Video";

function RelatedVideos({ videoList = [] }) {
  return (
    <section className={styles["videos"]}>
      {videoList.map((video) => {
        const options = {
          id: video.id.videoId,
          thumbnail_url: video.snippet.thumbnails.medium.url,
          title: video.snippet.title,
          channelTitle: video.snippet.channelTitle,
          viewCount: null,
          publishedAt: video.snippet.publishedAt,
        };
        return <Video key={video.id.videoId} {...options} />;
      })}
    </section>
  );
}

export default RelatedVideos;
