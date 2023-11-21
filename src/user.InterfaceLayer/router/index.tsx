import { Suspense, lazy } from "react";
import Loader from "../Components/general.components/Loader";
import Error from "../Components/general.components/Error";
import { Navigate } from "react-router-dom";

const AppLayout = lazy(() => import("../../App"));
const MainPage = lazy(() => import("../Pages/Main.Page/index"));

const mainRouter = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <MainPage />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <Navigate to="/" replace />
          </Suspense>
        ),
      },
    ],
  },
];

export default mainRouter;
