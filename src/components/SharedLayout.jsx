import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./Header/Header";
import Container from "./Container/Container";

const SharedLayout = () => {
  return (
    <Container>
      <Toaster />
      <Header />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
