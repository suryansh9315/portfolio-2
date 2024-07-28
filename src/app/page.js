import React from "react";
import HomeProducts from "@/components/HomeProducts";
import HomeProjects from "@/components/HomeProjects";
import HomeServices from "@/components/HomeServices";
import SmoothScroll from "@/components/SmoothScroll";
import HomeHero from "@/components/HomeHero";
import HomeTeam from "@/components/HomeTeam";
import HomeFAQs from "@/components/HomeFAQs";
import HomeContact from "@/components/HomeContact";

const Home = () => {
  return (
    <>
      <SmoothScroll />
      <HomeContact />
      <HomeHero />
      <HomeProjects />
      <HomeProducts />
      <HomeServices />
      <HomeTeam />
      <HomeFAQs />
    </>
  );
};

export default Home;

// Phase 2
// TODO (Home Page)
//      - Blogs Section/Optional
//      - Reviews Section/Optional

// Phase 3
// TODO Page Transition
// TODO (Projects Page)
// TODO (Services Page)
// TODO (About Page)
// TODO (Contact Page)
// TODO (Blog Page)/Optional
// TODO (Single Project Page)/Optional
// TODO (Single Product Page)/Optional
