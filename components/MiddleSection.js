import React from "react";
import StoryCircle from "./StoryCircle";

function MiddleSection() {
  return (
    <div className="w-[30%] mx-auto h-full ">
      <div className="w-full h-40 bg-black mt-[50px] rounded-xl flex gap-10 items-center p-10 overflow-hidden">
        <StoryCircle />
        <StoryCircle />
        <StoryCircle />
        <StoryCircle />
        <StoryCircle />
        <StoryCircle />
      </div>
      <div></div>
    </div>
  );
}

export default MiddleSection;
