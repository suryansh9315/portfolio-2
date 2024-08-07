import { getPage, getPageBySlug } from "@/utils/notion";
import { notFound } from "next/navigation";
import React from "react";
import NotionPage from "./_components/NotionPage";
import BlogHeader from "./_components/BlogHeader";
import { DateOptions } from "@/utils/data";
import BlogSide from "./_components/BlogSide";

const Blog = async ({ params }) => {
  const slug = params.slug;
  const post = await getPageBySlug(slug);

  if (!post) notFound();

  const recordMap = await getPage(post.id);

  return (
    <div className="min-h-screen w-screen max-w-[1600px] px-10 pb-20 pt-10 mx-auto">
      <BlogHeader
        title={post.properties.Title.title[0].plain_text}
        descriptionArray={post.properties.Description.rich_text}
        author={post.properties.Author.rich_text[0].plain_text}
        date={new Date(post.created_time).toLocaleDateString('en-US', DateOptions)}
        tags={post.properties.Tags.multi_select}
        bannerImage={post.properties.BannerImage.url}
        bannerImageWidth={post.properties.BannerImageWidth.number}
        bannerImageHeight={post.properties.BannerImageHeight.number}
      />
      <div className="w-full flex flex-col-reverse md:flex-row">
        <div className="w-1/4 mt-[30px]">
          <BlogSide post={post} />
        </div>
        <div className="w-full md:w-3/4">
          <NotionPage recordMap={recordMap} rootPageId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
