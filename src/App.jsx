import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "./components/Loader";
import ColorProvider from "./components/Hero/ColorProvider";
import PrivateRoute from "./components/PrivateRoute";
import SharedLayout from "./components/SharedLayout";

const Home = lazy(() => import("./pages/Home"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
const Favourites = lazy(() => import("./pages/Favourites/Favourites"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ColorProvider>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route
                path="/favourites"
                element={
                  <PrivateRoute>
                    <Favourites />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </ColorProvider>
      </Suspense>
    </>
  );
}

export default App;
