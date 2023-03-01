import React, { useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import useWindowSize from "../../hooks/useWindowSize";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import Animator from "../UI/Animator";
import emailjs from "@emailjs/browser";
import Modal from "../Modal/Modal";
const style = {
  wrapper: "h-[100vh] w-[100vw] flex flex-col h-[70%]",
  heading:
    "text-4xl md:text-5xl lg:text-7xl text-white  my-2 md:my-3 w-[100%] md:w-[65%] text-center md:text-left font-semibold",
  para: "tracking-wider text-white text-lg md:text-xl my-3 md:my-8 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[65%] font1",
  btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  arrow: `text-xl`,
  btnContainer:
    "cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-white   text-gray-900 w-[80%] md:w-[40%] lg:w-[25%] px-4",
  mainContent:
    "w-[100%] md:w-[65%] h-[80%] flex flex-col items-start justify-center  mx-auto font1 my-12   md:my-24",
  input:
    "mb-3 md:mb-4 border-b-2 border-stone-500 w-[100%] ring-none outline-none",
  label: "mt-3 md:mt-4",
};

const Home = (props) => {
  const [Open, setOpen] = useState(false);
  // const [Name, setName] = useState("");
  // const [Address, setAddress] = useState("");
  // const [Phone, setPhone] = useState("");
  // const [Email, setEmail] = useState("");

  // const addressChangeHandler = (e) => {
  //   setAddress(e.target.value);
  // };
  // const nameChangeHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const emailChangeHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // const phoneChangeHandler = (e) => {
  //   setPhone(e.target.value);
  // };
  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(width < 500 && "/homebg.jpg") ||
      (width > 500 && width < 1000 && "/homebg.jpg") ||
      (width > 1000 && "/homebg.jpg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: ${width < 550 ? "150vh" : "110vh"};
    width: 100vw;
  `;
  const onScroll = (val) => {
    props.onScroll(val);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(form.current);
    emailjs
      .sendForm(
        "service_fg9bwck",
        "template_d2ambfh",
        form.current,
        "QDxMsey5tbPkQMA8M"
      )
      .then(
        (result) => {
          setOpen(true);
          // setName("");
          // setAddress("");
          // setPhone("");
          // setEmail("");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Animator className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <FeaturedBackground1 className="flex flex-col items-center">
        <Navbar onScroll={onScroll} />
        <div className="flex items-center justify-center w-[95%] md:w-[80%] flex-col md:flex-row py-24 md:py-16 lg:py-24 md:py-4">
          <div className={style.mainContent}>
            <h2 className={style.heading}>
              DKSC -Holdings, The wise Venture Capital
            </h2>
            <p className={style.para}>
              We are an investor, asset manager and builder of businesses and
              teams. We build, buy and grow defined real estate operating
              businesses with world-class management teams.
            </p>
            <div
              className={style.btnContainer}
              onClick={() => onScroll("investments")}
            >
              <button className={style.btn}>GET STARTED</button>
              <AiOutlineArrowRight className={style.arrow} />
            </div>
          </div>
          {/* adding the form */}
          <div className="w-[95%] md:w-[45%] lg:w-[35%] bg-white rounded-md px-4 md:px-8 py-12 md:py-6 lg:py-12 flex flex-col ">
            <h2 className="font1 font-semibold text-center text-2xl md:text-3xl">
              Get a fast quotation <span className="text-stone-500">today</span>{" "}
            </h2>
            <p className="text-stone-500 text-xs my-3 md:my-3 text-center">
              We are a leading global real estate investor, asset manager and
              business builder. We build, buy and grow defined real estate
              operating businesses
            </p>
            {/* adding the form content */}
            <form
              className="flex flex-col items-start"
              onSubmit={sendEmail}
              ref={form}
            >
              <label htmlFor="1" className={style.label}>
                Address
              </label>
              <input
                type="text"
                className={style.input}
                name="from_address"
                // onChange={addressChangeHandler}
                // value={Address}
              />
              <label htmlFor="2" className={style.label}>
                Name
              </label>
              <input
                type="text"
                className={style.input}
                name="from_name"
                // onChange={nameChangeHandler}
                // value={Name}
              />
              <label htmlFor="3" className={style.label}>
                Email
              </label>
              <input
                type="text"
                className={style.input}
                name="from_email"
                // onChange={emailChangeHandler}
                // value={Email}
              />
              <label htmlFor="4" className={style.label}>
                Phone
              </label>
              <input
                type="text"
                className={style.input}
                name="from_phone"
                // onChange={phoneChangeHandler}
                // value={Phone}
              />
              <p className="text-xs font1">
                I agree to be contacted on the details provided above
              </p>
              <button
                type="submit"
                className="px-4 md:px-8 py-3 md:py-4 mt-6 md:mt-8 text-white bg-stone-500 hover:bg-opacity-[0.9] transition duration-[100ms] cursor-pointer mx-auto "
              >
                Get my Quotation
              </button>
              <Modal opens={Open} />
            </form>
          </div>
        </div>
      </FeaturedBackground1>
    </Animator>
  );
};

export default Home;
// info.tda37@gmail.com
