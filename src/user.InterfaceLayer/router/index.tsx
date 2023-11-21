import { Suspense } from "react";
import Loader from "../Components/general.components/Loader";
import Error from "../Components/general.components/Error";
import App from "../../App";
import { Navigate } from "react-router-dom";

const mainRouter = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
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
