import { useLoaderData } from "react-router-dom";
import styles from "./videoPage.module.css";
import ReactPlayer from "react-player/youtube";
import { fetchVideoData } from "../../constants/api";
import { useCalcTerm } from "../../hooks/useCalcTerm";
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt, AiOutlineDownload, AiOutlineScissor, AiOutlineSave, AiOutlineEllipsis } from "react-icons/ai";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { useCalcView } from "../../hooks/useCalcView";

export async function loader({ params }) {
  const videoId = params.videoId;
  const { currentVideo, relatedVideoList } = await fetchVideoData(videoId);
  return { currentVideo, relatedVideoList };
}

function VideoPage() {
  const { currentVideo, relatedVideoList } = useLoaderData();
  const {
    id,
    snippet: { publishedAt, channelTitle, title },
    statistics: { viewCount, likeCount, commentCount },
  } = currentVideo;
  const view = useCalcView(viewCount);
  const term = useCalcTerm(publishedAt);
  return (
    <div className={styles["videoPage"]}>
      <div className={styles["video__player-wrapper"]}>
        <ReactPlayer className={styles["video__player"]} url={`https://www.youtube.com/watch?v=${id}`} playing={false} muted={false} controls={true} width="100%" height="100%" />
      </div>
      <div className={styles["video__extra-container"]}>
        <div className={styles["video__text-content"]}>
          <h1 className={styles["video__title"]}>{title}</h1>
          <p className={styles["video__view"]}>
            {`조회수 ${view} ${term}`}
            <span className={styles["video__detail"]}>더보기</span>
          </p>
          <div className={styles["video__channel"]}>
            <div className={styles["channel__logo"]}></div>
            <h3 className={styles["channel__title"]}>{channelTitle}</h3>
            <div className={styles["channel__subscription"]}>구독</div>
          </div>
          <div className={styles["video__icon-wrapper-scroll"]}>
            <div className={styles["video__icons"]}>
              <div className={styles["video__icon-wrapper"]}>
                <AiOutlineLike />
                <span>{`${likeCount} • `}</span>
                <AiOutlineDislike />
              </div>
              <div className={styles["video__icon-wrapper"]}>
                <AiOutlineShareAlt />
                <span>{`공유`}</span>
              </div>
              <div className={styles["video__icon-wrapper"]}>
                <AiOutlineDownload />
                <span>{`오프라인 저장`}</span>
              </div>
              <div className={styles["video__icon-wrapper"]}>
                <AiOutlineScissor />
                <span>{`클립`}</span>
              </div>
              <div className={styles["video__icon-wrapper"]}>
                <AiOutlineSave />
                <span>{`저장`}</span>
              </div>
              <div className={styles["video__icon-wrapper"]}>
                <AiOutlineEllipsis />
              </div>
            </div>
          </div>
          <div className={styles["video__comment-container"]}>
            <p className={styles["video__comment-header"]}>
              {`댓글`}
              <span>{commentCount}</span>
            </p>
            <div className={styles["comment-user-container"]}>
              <div className={styles["user-avatar"]}></div>
              <input className={styles["user-comment"]} placeholder="댓글 추가..."></input>
            </div>
          </div>
        </div>
        <RelatedVideos videoList={relatedVideoList} />
      </div>
    </div>
  );
}

export default VideoPage;
