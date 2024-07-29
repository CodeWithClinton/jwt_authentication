import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = ({
  isAuthenticated,
  username,
  setIsAuthenticated,
  setUsername,
}) => {
  return (
    <>
      <NavBar
        setUsername={setUsername}
        isAuthenticated={isAuthenticated}
        username={username}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Outlet />
    </>
  );
};

export default MainLayout;
