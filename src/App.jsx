import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
// import { Toaster } from "react-hot-toast";

import Loader from "./components/Loader";
import ColorProvider from "./components/Hero/ColorProvider";
import PrivateRoute from "./components/PrivateRoute";
import SharedLayout from "./components/SharedLayout";

import Home from "./pages/Home";
import Teachers from "./pages/Teachers/Teachers";
import Favourites from "./pages/Favourites/Favourites";

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
            </Route>
          </Routes>
        </ColorProvider>
      </Suspense>
    </>
  );
}

export default App;
