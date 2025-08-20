import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import Home from "./components/Home";
import Jobs from "./components/Jobs.jsx";
import Browse from "./components/Browse.jsx";
import Profile from "./components/ui/profile.jsx";
import JobDescription from "./components/JobDescription.jsx";
import Companies from "./components/admin/companies.jsx"; // ✅ Capitalized
import CompanyCreate from "./components/admin/CompanyCreate.jsx";
import CompanySetup from "./components/admin/CompanySetup.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/admin/companies",
    element: <Companies /> // ✅ Corrected usage
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />
  },
  {

  }
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
