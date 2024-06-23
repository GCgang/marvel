import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";
import NotFound from "./pages/Error/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "character/:id",
        element: <CharacterDetails />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
