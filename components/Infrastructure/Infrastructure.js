import React from "react";
import InfrastructureContent from "./InfrastructureContent";
import styled from "styled-components";
import Image from "next/image";
// skew-x-[-45deg]
const Infrastructure = () => {
  const InfrastructureBackground = styled.div`
    background: radial-gradient(#1c1917, #1c1917);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
  `;
  // border-top-right-radius: 100px;
  // border-bottom-left-radius: 100px;
  return (
    <InfrastructureBackground className="flex w-full flex-col-reverse sm:flex-row px-8 md:px-16 py-24 md:py-36">
      {/* left side of the section for image */}
      <section className="flex  w-[100%] sm:w-[50%] h-[50%] sm:h-[100%]  scale-[0.9] md:scale-[1] mx-0 md:mx-8">
        <Image src="/16.jpg" width={600} height={700} />
      </section>
      {/* right side for the content */}
      <section className="flex w-[100%] sm:w-[40%] h-[80%] sm:h-[100%]">
        <InfrastructureContent />
      </section>
    </InfrastructureBackground>
  );
};

export default Infrastructure;




