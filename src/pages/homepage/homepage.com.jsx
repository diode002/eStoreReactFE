import React from "react";
import Directory from "../../components/directory/directory-com";
import "./homepage.scss";

import { HomePageContainer } from "./homepage.sty";

const HomaPage = pops => {
  return (
    <HomePageContainer>
      <Directory></Directory>
    </HomePageContainer>
  );
};

export default HomaPage;
