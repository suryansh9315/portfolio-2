import React from "react";

const Tag = ({ tag, tags, setTags }) => {

  const handleUpdate = () => {
    const updatedTags = tags.map(item => {
        return item.name === tag.name ? { name: item.name, active: !item.active } : item
    })
    setTags(updatedTags)
  }

  return (
    <div
      onClick={handleUpdate}
      className={`px-5 py-2 border font-poppins rounded-full text-sm cursor-pointer transition-all duration-300 ${
        tag.active ? "text-white border-black bg-black" : "text-gray-400 border-gray-300"
      }`}
    >
      {tag.name}
    </div>
  );
};

export default Tag;
