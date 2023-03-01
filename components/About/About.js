import React from "react";
import Counter from "./Counter/Counter";
import { AiOutlineArrowRight } from "react-icons/ai";

const style = {
  about: "w-[95%] md:w-[80%] mx-auto flex flex-col items-center justify-center",
  side1: "w-full md:w-[45%]  mx-auto",
  headingContainer: "flex items-center jusitfy-center flex-col mt-8",
  side2:
    "w-full md:w-[40%] md:scale-[1] flex items-center justify-center mx-auto hidden md:flex",
  heading:
    "font-bold text-5xl sm:text-6xl md:text-5xl lg:text-6xl mb-8 text-stone-800",
  details: "text-primary py-3 ",
  divider: "border-b-[1px] border-gray-200 p-2",
  coutnerContainer: "",
  heading1:
    "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-8 text-gray-900 text-3xl md:text-5xl font-semibold font ",
  signature:
    "my-8 flex justify-around items-center w-[70%] md:w-[60%] mx-auto md:mx-0",
  img: "",
  name: "text-xl sm:text-xl md:text-3xl lg:text-3xl italic ",
  signatureImg: "scale-[0.7] md:scale-[0.95]",
  btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  arrow: `text-xl `,
  arrow1: `ml-3 text-xl`,
  btnContainer:
    "cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-5 flex items-center justify-between bg-white   text-gray-900 w-[80%] md:w-[50%] px-4 rounded bg-stone-800 text-white",
};
const About = (props) => {
  return (
    <div className={style.about} style={{ fontFamily: "Montserrat,serif" }}>
      <div className={style.headingContainer}>
        <h2 className={style.heading1}>ABOUT US</h2>
        <p className="border-b-[6px] border-stone-400 w-[12vw] md:w-[4vw] "></p>
      </div>
      <div className="flex my-8 md:my-24 mx-auto">
        <div className={style.side1}>
          <p
            className={style.details}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            We are a leading global real estate investor, asset manager and
            business builder. We build, buy and grow defined real estate
            operating businesses with world-class management teams.
          </p>
          <p
            className={style.details}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our purpose is to create economic and social value through real
            estate – safeguarding the future and creating a world of
            opportunities for our customers, communities, partners and people.
            <br></br>
            <p className="my-3"></p>
            We build, buy and grow defined real estate businesses, and leverage
            our global expertise, scale and network to enhance their
            performance. Operating internationally across sectors, our
            world-class management teams provide meaningful access, knowledge,
            and insight advantages to benefit our customers and partners.
          </p>

          <div className={style.divider}></div>
          {/* <div className={style.coutnerContainer}>
            <Counter />
          </div> */}
          {/* <div
            className={style.btnContainer}
            onClick={() => props.onScroll("reservation")}
          >
            <button className={style.btn}>Резервирай</button>
            <AiOutlineArrowRight className={style.arrow} />
          </div>
          <div
            className={style.btnContainer}
            onClick={() => props.onScroll("reservation")}
          >
            <button className={style.btn}>За контакти</button>
            <AiOutlineArrowRight className={style.arrow1} />
          </div> */}
          <Counter />
          {/* adding the signature */}
        </div>
        <div className={style.side2}>
          <img
            src="/about.jpg"
            alt=""
            className={style.img}
            style={{ clipPath: "polygon(0 0, 100% 10%, 100% 88%, 1% 100%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
