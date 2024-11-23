import React from "react";
import Banner from "../Components/Banner/Banner";
import Header from "../Components/Header/Header";
import Review from "../Components/Reviews/Review";
import SpecialityMenu from "../Components/SpecialityMenu/SpecialityMenu";
import TopDoctor from "../Components/TopDoctor/TopDoctor";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <SpecialityMenu />
      <TopDoctor></TopDoctor>
      <Review></Review>
      <Banner></Banner>
    </div>
  );
};

export default Home;
