import Image from "next/image";
import React from "react";

const BlogHeader = ({
  title,
  bannerImage,
  bannerImageWidth,
  bannerImageHeight,
}) => {
  return (
    <div>
      <Image
        unoptimized
        className="w-full h-[500px] object-cover"
        src={bannerImage}
        height={400}
        width={500}
      />
    </div>
  );
};

export default BlogHeader;
