import React from "react";

const FutureDetails = () => {
  return (
    <div className="w-[80%] flex flex-col mx-auto">
      {/* first heading of the details content */}
      <section className="flex ">
        <HeadingAndContent
          heading={"OUR PARTNERSHIPS"}
          paragraph={
            "We partner with leading, like-minded global institutional investors. Our partnerships accelerate the scale and pace at which we can deploy capital across priority sectors and geographies – creating competitive advantage and amplifying our economic and social impact."
          }
        />
      </section>
      {/* second heading and content */}
      <section className="flex">
        <HeadingAndContent
          heading={"OUR TEAM"}
          paragraph={
            "We put our capital and expertise to work, collaborating closely with our global management teams. Our creativity, scale and experience open up opportunities and create value across our network."
          }
        />
      </section>
    </div>
  );
};

const HeadingAndContent = (props) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-gray-50 text-lg sm:text-2xl md:text-4xl my-8 sm:my-8 md:my-12  font1 font-semibold">
        {props.heading}
      </h2>
      <p className="flex text-sm sm:text-md md:text-lg leading-[1.5rem] tracking-wide font1 text-gray-50">
        {props.paragraph}
      </p>
    </div>
  );
};
export default FutureDetails;
