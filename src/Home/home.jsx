import React from "react";
import Footer from "../footer/footer";
import Header from "../Header/header";
import TinderCards from "../tinderCards/tinderCards";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <TinderCards />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
