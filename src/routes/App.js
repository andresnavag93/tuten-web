import React, { Suspense, lazy, useEffect } from "react";
import { GlobalStyles } from "../resources/GlobalStyles";
import { Redirect, Router } from "@reach/router";
import { Footer } from "../library/components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";

// import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";
// import Login from "../pages/Login";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Login = lazy(() => import("../pages/Login"));

export const App = () => {
  const { token } = useSelector((state) => state.reducer);

  useEffect(() => {
    console.log("token app", token);
  }, []);

  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Router>
        <NotFound default />
        {/* <Home path="/" /> */}
        {!token ? (
          <Login path="/login" />
        ) : (
          <Redirect from="/login" to="/" replace={true} noThrow={true} />
        )}
        {token ? (
          <Home path="/" />
        ) : (
          <Redirect from="/" to="/login" replace={true} noThrow={true} />
        )}
      </Router>
      <Footer />
    </Suspense>
  );
};
