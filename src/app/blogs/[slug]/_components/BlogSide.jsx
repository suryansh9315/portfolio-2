import React from "react";

const BlogSide = ({ post }) => {
  return (
    <div className="flex flex-col gap-10">
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
      {/* <div className="gap-2 flex flex-col">
        <div className="font-poppins text-2xl">Read More</div>
        <div className="h-[2px] w-[80%] bg-gray-200"></div>
        <div>

        </div>
      </div> */}
    </div>
  );
};

export default BlogSide;
