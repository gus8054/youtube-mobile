import styles from "./videos.module.css";
import Video from "../Video/Video";

export default function Videos({ videoList = [] }) {
  return (
    <section className={styles["videos"]}>
      {videoList.map((video) => {
        const options = {
          id: video.id,
          thumbnail_url: video.snippet.thumbnails.medium.url,
          title: video.snippet.title,
          channelTitle: video.snippet.channelTitle,
          viewCount: video.statistics.viewCount,
          publishedAt: video.snippet.publishedAt,
        };
        return <Video key={video.id} {...options} />;
      })}
    </section>
  );
}
