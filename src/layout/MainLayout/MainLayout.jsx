import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import NewNab from "../../shared/Navbar/NewNab";

const MainLayout = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [users] = useUser();
  const { user, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (user && users) {
      const filteredUser = users.find((us) => us.email === user.email);
      setLoggedUser(filteredUser);
    } else {
      setLoggedUser(null);
    }
  }, [users, user]);

  let navbarComponent;
  let footerComponent;

  if (
    loggedUser &&
    (loggedUser.role === "admin" || loggedUser.role === "employee") &&
    location.pathname === "/"
  ) {
    navbarComponent = <></>;
    footerComponent = <></>;
  } else if (loggedUser && loggedUser.role === "user") {
    navbarComponent = <NewNab />;
    footerComponent = <Footer />;
  } else {
    navbarComponent = <NewNab />;
    footerComponent = <Footer />;
  }

  return (
    <div>
      {navbarComponent}
      <div className="">
        <Outlet />
      </div>
      {footerComponent}
    </div>
  );
};

export default MainLayout;
