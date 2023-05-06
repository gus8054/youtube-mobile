import styles from "./video.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCalcTerm } from "../../hooks/useCalcTerm";
import { useCalcView } from "../../hooks/useCalcView";

function Thumbnail({ src, id }) {
  return (
    <Link to={`/videos/${id}`}>
      <img src={src} alt="Thumbnail" className={styles["thumbnail"]} />
    </Link>
  );
}

function Video({ id, thumbnail_url, title, channelTitle, viewCount, publishedAt }) {
  const term = useCalcTerm(publishedAt);
  const view = useCalcView(viewCount);
  return (
    <article className={styles["video"]}>
      <div className={styles["video__player-wrapper"]}>
        <Thumbnail src={thumbnail_url} id={id} />
      </div>
      <div className={styles["video__detail"]}>
        <div className={styles["video__logo"]}></div>
        <div className={styles["video__text-content"]}>
          <h4 className={styles["video__title"]}>{title}</h4>
          <div className={styles["video__meta"]}>{`${channelTitle} • ${view} • ${term}`}</div>
        </div>
        <div className={styles["video__more"]}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </article>
  );
}

export default Video;
