import React from "react";
import Hero from "./_components/Hero";
import BlogList from "./_components/BlogList";

const BlogsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <BlogList />
    </div>
  );
};

export default BlogsPage;
