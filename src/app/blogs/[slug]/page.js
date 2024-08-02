import { getPage, getPageBySlug } from "@/utils/notion";
import { notFound } from "next/navigation";
import React from "react";
import NotionPage from "./_components/NotionPage";
import BlogHeader from "./_components/BlogHeader";

const Blog = async ({ params }) => {
  const slug = params.slug;
  const post = await getPageBySlug(slug);

  if (!post) notFound();

  const recordMap = await getPage(post.id);
  console.log(post.properties.Title.title[0].plain_text)

  return (
    <div className="min-h-screen w-screen max-w-[1600px] px-10 pb-20 pt-10">
      <BlogHeader
        title={post.properties.Title.title[0].plain_text}
        bannerImage={post.properties.BannerImage.url}
        bannerImageWidth={post.properties.BannerImageWidth.number}
        bannerImageHeight={post.properties.BannerImageHeight.number}
      />
      <NotionPage recordMap={recordMap} rootPageId={post.id} />
    </div>
  );
};

export default Blog;
