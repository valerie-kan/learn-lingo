import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import "./App.css";

import Home from "./pages/Home";
import Loader from "./components/Loader";
import ColorProvider from "./components/Hero/ColorProvider";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ColorProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/teachers" element={<Teachers />} /> */}
          </Routes>
        </ColorProvider>
      </Suspense>
    </>
  );
}

export default App;
