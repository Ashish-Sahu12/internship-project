import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "./component/Landingpage";
import Applayout from "./component/Applayout";
import Login from "./component/Login";
import Feature from "./component/Feature";
import Pricing from "./component/Pricing";
import Schedulcing from "./component/Schedulcing";
import StudentDashboard from "./component/StudentDashboard";
import TeacherDashboard from "./component/TeacherDashboard";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/feature",
        element: <Feature />,
      },
      {
        path: "/price",
        element: <Pricing />,
      },
      ,
      {
        path: "/TeacherDashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "/studentDashboard",
        element: <StudentDashboard />,
      },
      {
        path: "/Schedulcing",
        element: <Schedulcing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
