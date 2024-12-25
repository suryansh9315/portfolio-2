import React from "react";
import HomeProducts from "@/components/HomeProducts";
import HomeProjects from "@/components/HomeProjects";
import HomeServices from "@/components/HomeServices";
import SmoothScroll from "@/components/SmoothScroll";
import HomeHero from "@/components/HomeHero";
import HomeFAQs from "@/components/HomeFAQs";
import HomeReviews from "@/components/HomeReviews";
import HomeBlogs from "@/components/HomeBlogs";
import { getPages } from "@/utils/notion";

const Home = async () => {
  const pages = await getPages()

  return (
    <>
      <SmoothScroll />
      <HomeHero />
      <HomeProducts />
      <HomeProjects />
      <HomeServices />
      <HomeReviews />
      <HomeFAQs />
      <HomeBlogs blogs={pages.results} />
    </>
  );
};

export default Home;

// Phase 2
// Change Contact Email to deqube email
// Update Content
// Add Related Blogs Section on Single Blog Page
// Make Tags Functional
// Bug on First Load

// Phase 3
// TODO (Projects Page)
// TODO (Services Page)
// TODO (About Page)
// TODO (Contact Page)
// TODO (Single Project Page)/Optional
// TODO (Single Product Page)/Optional
