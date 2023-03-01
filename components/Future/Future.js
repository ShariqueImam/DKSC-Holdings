import React from "react";
import FutureContent from "./FutureContent";
const Future = () => {
  return (
    <div className="py-4 md:pb-12 md:pt-24  w-full sm:w-[95%] md:w-[85%] h-[80%] flex flex-col sm:m-auto font #1c1917">
      {/* add the heading */}
      <section className="m-auto h-[20%] flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl md:text-5xl text-gray-50 m-auto font-semibold my-8 font">
          INVESTMENTS
        </h2>
        <p className="border-b-[6px] border-stone-400 w-[12vw] md:w-[4vw] "></p>
      </section>
      {/* add the main content of the section */}
      <section className="flex h-[80%] w-full">
        <FutureContent />
      </section>
    </div>
  );
};

export default Future;
