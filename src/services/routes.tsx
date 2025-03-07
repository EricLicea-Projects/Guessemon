import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import GuessingGamePage from "@/pages/GuessingGamePage";
import About from "@/pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <GuessingGamePage /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
