import { getPage, getPageBySlug } from "@/utils/notion";
import { notFound } from "next/navigation";
import React from "react";
import NotionPage from "./_components/NotionPage";
import BlogHeader from "./_components/BlogHeader";
import { DateOptions } from "@/utils/data";

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
          <div className="gap-2 flex flex-col">
            <div className="font-poppins text-2xl">Tags</div>
            <div className="h-[2px] w-[80%] bg-gray-200"></div>
            <div className="my-3 flex gap-3 flex-wrap">
              {post.properties.Tags.multi_select.map((tag, i) => (
                <span
                  className="px-3 py-2 rounded-md border border-gray-300 font-quickLight"
                  key={i}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <NotionPage recordMap={recordMap} rootPageId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
