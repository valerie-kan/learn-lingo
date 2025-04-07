import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Loader from "./components/Loader";
import ColorProvider from "./components/Hero/ColorProvider";
import Teachers from "./pages/Teachers/Teachers";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ColorProvider>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
          </Routes>
        </ColorProvider>
      </Suspense>
    </>
  );
}

export default App;
