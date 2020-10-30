import React, { useEffect } from "react";
import { Images } from "../resources/Images";
import { Banner } from "../library/components/Banner/Banner";
import { Header } from "../library/components/Header/Header";

export default () => {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Banner title="Welcome to Marvel World" bgImage={Images.homeBanner} />
    </>
  );
};
