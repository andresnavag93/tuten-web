import React, { Suspense, lazy } from "react";
import { GlobalStyles } from "../resources/GlobalStyles";
import { Router } from "@reach/router";
import { Footer } from "../library/components/Footer/Footer";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Router>
        <NotFound default />
        <Home path="/" />
      </Router>
      <Footer />
    </Suspense>
  );
};
