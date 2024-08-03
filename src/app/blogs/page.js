import React from "react";
import Hero from "./_components/Hero";
import BlogList from "./_components/BlogList";
import { getPages, getTagsOptions } from "@/utils/notion";
import Tags from "./_components/Tags";

const BlogsPage = async () => {
  const pages = await getPages()
  const tags = await getTagsOptions()

  return (
    <div className="flex flex-col items-center">
      <Hero blog={pages.results[0]} />
      <Tags tags={tags} />
      <BlogList blogs={pages.results} />
    </div>
  );
};

export default BlogsPage;
