import React from "react";
import SingleCard from "./SingleCard";
import { TbCash } from "react-icons/tb";
import { MdOutlineSell } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
const style = {
  card: "flex flex-col my-12 md:mb-24 md:mt-16 ",
  cardContainer: "flex flex-wrap md:no-wrap items-center justify-center gap-12",
  headingContainer: "flex items-center jusitfy-center flex-col my-8",
  heading:
    "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-8 text-gray-900 text-3xl md:text-5xl font-semibold ",
};
const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.headingContainer}>
        <h2 className={style.heading}>OUR SERVICES</h2>
        <p className="border-b-[6px] border-stone-400 w-[12vw] md:w-[4vw] "></p>
      </div>
      {/* adding the cards */}
      <div className={style.cardContainer}>
        <SingleCard
          heading="INVESTING"
          details="We partner with leading, like-minded global institutional investors. Our partnerships accelerate the scale and pace at which we can deploy capital across priority sectors"
          icon={<BiTrendingUp />}
        />
        <SingleCard
          heading="WHOLESALE"
          details="Investment
        
          We’ve shaped some of the world’s most memorable places. We add value through investment, development, asset management, operations and partnerships"
          icon={<MdOutlineSell />}
        />
        <SingleCard
          heading="RENTALS"
          details="We also offer rentals for our valuable clients so that they can make good money alongwith keeping their property under the hand"
          icon={<TbCash />}
        />
      </div>
    </div>
  );
};

export default Card;
