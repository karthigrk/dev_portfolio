import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import PageNotFound from "./pages/notfound";
import App from "./pages";
import Techstack from "./pages/techstack";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/techstack",
        element: <Techstack />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default routes;
