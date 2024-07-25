import React from "react";
import HomeProducts from "@/components/HomeProducts";
import HomeProjects from "@/components/HomeProjects";
import HomeServices from "@/components/HomeServices";
import SmoothScroll from "@/components/SmoothScroll";
import HomeHero from "@/components/HomeHero";
import HomeTeam from "@/components/HomeTeam";
import HomeFAQs from "@/components/HomeFAQs";

const Home = () => {
  return (
    <>
      <SmoothScroll />
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


// TODO Loading/Splash Screen 
// TODO (Home Page)
//      - Update Navbar (Add Animations)
//      - Update HomeHero (Add Animations)
//      - Update HomeFAQs (Add Animations)
//      - Contact Section
//      - Update Footer Section (Add Animations, Change UI)
//      - Blogs Section/Optional
//      - Reviews Section/Optional
//      - Make Everything Responsive


// TODO Page Transition
// TODO (Projects Page)
// TODO (Services Page)
// TODO (About Page)
// TODO (Contact Page)
// TODO (Blog Page)/Optional
// TODO (Single Project Page)/Optional
// TODO (Single Product Page)/Optional
// TODO (Add Contact Functionality)
// TODO (Update Images and Videos with real stuff)
