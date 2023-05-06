import ReactDOM from "react-dom/client";
import App, { loader as appLoader } from "./pages/App/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoPage, { loader as videoPageLoader } from "./pages/VideoPage/VideoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    children: [
      { index: true, element: <></> },
      {
        path: "videos/:videoId",
        element: <VideoPage />,
        loader: videoPageLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
