import { Outlet, useLoaderData } from "react-router-dom";
import styles from "./app.module.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Videos from "../../components/Videos/Videos";
import { fetchDefaultData } from "../../constants/api";

const saveJson = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const loadJson = (key) => key && JSON.parse(localStorage.getItem(key));

export async function loader() {
  let videos = loadJson("youtube-videos") ?? [];
  if (videos.length > 0) return { videos };
  videos = await fetchDefaultData();
  saveJson("youtube-videos", videos);
  return { videos };
}

function App() {
  const { videos } = useLoaderData();
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Navbar />
        <Videos videoList={videos} />
        <Outlet />
      </div>
      <div className={styles.pc}>
        <p className={styles.fallback}>모바일 화면으로 보거나 화면을 줄여주세요.</p>
      </div>
    </>
  );
}

export default App;
