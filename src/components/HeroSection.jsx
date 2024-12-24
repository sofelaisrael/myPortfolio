import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "./Tooltip";
import sukuna from "../assets/sukuna.jfif";
import { ReactTyped } from "react-typed";
import SplitText from "split-type";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroSection = () => {
  // if (window.onload && window.onresize) {
  //     setInterval(() => {
  //         var dispt = new Date().toTimeString().split(":");
  //         document.querySelector(".hour").textContent = dispt[0];
  //         document.querySelector(".mins").textContent = dispt[1];
  //       }, 100);

  //       gsap.from('.tad', .01, {
  //           opacity: 0,
  //           delay: 6
  //       })

  //       gsap.fromTo(
  //         ".check",
  //         1.5,
  //         {
  //           opacity: 0,
  //           top: "100%",
  //           duration: 0.5,
  //           ease: "expo.out",
  //           delay: 6,
  //           // stagger: { amount: 0.3 }
  //         },
  //         {
  //           opacity: 1,
  //           top: "70%",
  //           duration: 0.5,
  //           ease: "expo.out",
  //           delay: 6
  //           // stagger: { amount: 0.3 }
  //         }
  //       );

  //       gsap.fromTo(
  //         ".span",
  //         .4,
  //         {
  //           opacity: 0,
  //           delay: 7,
  //         },
  //         {
  //           opacity: 1,
  //           delay: 7
  //           // stagger: { amount: 0.3 }
  //         }
  //       );

  //       const sofela = new SplitText(".sofela");
  //       const rig = new SplitText(".rig");
  //       const rig1 = new SplitText(".rig1");
  //       gsap.registerPlugin(ScrollTrigger);

  //       gsap.from(sofela.chars, {
  //         // scrollTrigger: {
  //         //     trigger: sofela.words,
  //         //     start: 'top 60%',
  //         //     end: 'bottom 15%',
  //         //     // scrub: 1,
  //         //     markers: true,
  //         //     toggleActions: 'restart reverse restart none'
  //         // },
  //         opacity: 0,
  //         yPercent: 100,
  //         duration: 0.25,
  //         ease: "expo.out",
  //         delay: 6,
  //         stagger: { amount: 0.3 },
  //       });
  //       gsap.from(rig.words, {
  //         // scrollTrigger: {
  //         //     trigger: sofela.words,
  //         //     start: 'top 60%',
  //         //     end: 'bottom 15%',
  //         //     // scrub: 1,
  //         //     markers: true,
  //         //     toggleActions: 'restart reverse restart none'
  //         // },
  //         opacity: 0,
  //         yPercent: 100,
  //         duration: 0.2,
  //         ease: "expo.out",
  //         delay: 6.5,
  //         // stagger: { amount: 0.3 }
  //       });
  //       gsap.from(rig1.words, {
  //         opacity: 0,
  //         yPercent: 100,
  //         duration: 0.2,
  //         ease: "expo.out",
  //         delay: 6,
  //         // stagger: { amount: 0.3 }
  //       });
  // }
  const navigate = useNavigate();

  useEffect(() => {
    const sofela = new SplitText(".sofela");
    const rig = new SplitText(".rig");
    const rig1 = new SplitText(".rig1");
    setInterval(() => {
      var dispt = new Date().toTimeString().split(":");
      document.querySelector(".hour").textContent = dispt[0];
      document.querySelector(".mins").textContent = dispt[1];
    }, 100);

    gsap.fromTo(
      ".check",
      1.5,
      {
        opacity: 0,
        top: "100%",
        duration: 0.5,
        ease: "expo.out",
        delay: 6,
        // stagger: { amount: 0.3 }
      },
      {
        opacity: 1,
        top: "70%",
        duration: 0.5,
        ease: "expo.out",
        delay: 6,
        // stagger: { amount: 0.3 }
      }
    );

    gsap.fromTo(
      ".span",
      0.4,
      {
        opacity: 0,
        delay: 7,
      },
      {
        opacity: 1,
        delay: 7,
        // stagger: { amount: 0.3 }
      }
    );

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(sofela.chars, {
      // scrollTrigger: {
      //     trigger: sofela.words,
      //     start: 'top 60%',
      //     end: 'bottom 15%',
      //     // scrub: 1,
      //     markers: true,
      //     toggleActions: 'restart reverse restart none'
      // },
      opacity: 0,
      yPercent: 100,
      duration: 0.25,
      ease: "expo.out",
      delay: 6,
      stagger: { amount: 0.3 },
    });
    gsap.from(rig.words, {
      // scrollTrigger: {
      //     trigger: sofela.words,
      //     start: 'top 60%',
      //     end: 'bottom 15%',
      //     // scrub: 1,
      //     markers: true,
      //     toggleActions: 'restart reverse restart none'
      // },
      opacity: 0,
      yPercent: 100,
      duration: 0.2,
      ease: "expo.out",
      delay: 6.5,
      // stagger: { amount: 0.3 }
    });
    gsap.from(rig1.words, {
      opacity: 0,
      yPercent: 100,
      duration: 0.2,
      ease: "expo.out",
      delay: 6,
      // stagger: { amount: 0.3 }
    });
  });

  return (
    <section
      id="home"
      className="hero-section top-0 md:h-[100vh] relative px-20 max-md:p-5 lg:pr-0 flex max-lg:flex-col py-40 bg-[#0a0a0a] overflow-hidden max-lg:justify-center max-md:py-40 max-lg:gap-5 max-lg:items-center z-[10000]"
    >
      {/* <div className="radgrad absolute top-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-md:w-[100vh] max-md:h-[100vh] left-0 bg-opacity-5" ></div> */}

      {/* <div className="page"> */}
      {/* <div className="absolute h-[100vh] max-md:h-[100%] w-[100vw] z-[1] bgdrop top-0"></div>

        <div className="absolute max-md:h-[100%] w-[100vw] z-[1] bgdrop2 top-0"></div> */}
      <div className="ripple ripple1"></div>
      <div className="ripple ripple2"></div>
      <div className="ripple ripple3"></div>
      {/* </div> */}

      <div className="absolute h-[100vh] max-md:h-[100%] w-[100vw] z-[1] bgdrop top-0"></div>

      <div className="absolute max-md:h-[100%] w-[100vw] z-[1] bgdrop2 top-0"></div>

      <div className="tad absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] flex flex-col justify-center gap-1 z-[100] max-lg:hidden">
        <span className="leading-[50px] text-center hour"></span>
        <span className="leading-[50px] mins text-center"></span>
      </div>

      <div className="left w-1/3 z-2 max-lg:w-full relative z-[1000] max-lg:text-center self-center">
        <div className="tell max-md:hidden hand backdrop-blur-[5px] border border-[#2d2d2d]">
          <span>This developer has no pictures</span>
        </div>

        <div className="w-36 max-md:w-28 max-md:h-28 photo h-36 z-[10000000] rounded-full my-5 max-lg:mx-auto overflow-hidden span">
          <img src={sukuna} className="h-[100%] object-cover" alt="" />
        </div>

        <div className="sofela w-[350px] relative max-lg:hidden text-[50px] font-bold max-md:text-[30px] join">
          Hello! I'm Sofela Israel
        </div>
        <div className="sofela max-lg:w-fit max-lg:block mx-auto hidden relative md:items-end gap-7 text-[50px] font-bold max-md:text-[30px] join max-md:py-2">
          Hello! I'm Sofela Israel
        </div>

        <ReactTyped
          className="span"
          strings={[
            "Web Developer",
            "Chess Enthusiast",
            "MERN Stack Developer",
            "Freelancer",
            "Otaku",
          ]}
          loop
          backSpeed={30}
          typeSpeed={50}
        />
      </div>

      <div className="check max-md:pb-10 flex gap-5 mt-3 lg:absolute top-[70%] max-lg:justify-center left-1/2 z-[1000] lg:-translate-x-1/2 max-md:pt-5">
        <div
          onClick={() =>
            window.open("https://github.com/sofelaisrael", "_blank")
          }
        >
          <Tooltip name={"Github"} bg="black" border={true}>
            <FaGithub />
          </Tooltip>
        </div>

        <div
          onClick={() => window.open("https://x.com/Sofelaa1?s=09", "_blank")}
        >
          <Tooltip name={"Twitter"} bg="[#1da1f2]" border={true}>
            <AiFillTwitterSquare />
          </Tooltip>
        </div>
        <div
          onClick={() => window.open("https://www.linkedin.com/in/sofela-israel-570851263?utm_source&utm_source=share&utm_content=profile7utm_medium=android_app", "_blank")}
        >
          <Tooltip name={"LinkedIn"} bg="[#0e76a8]" border={true}>
            <BsLinkedin />
          </Tooltip>
          </div>
      </div>

      <div className="right max-lg:hidden max-lg:w-full max-md:gap-5 w-2/3 flex flex-col items-end z-[200] relative self-center p-5">
        <div className="leading-[40px] relative rig1 text-[40px] flex gra max-md:text-[24px] max-md:leading-[20px] py-5 w-1/2 max-lg:w-[80vw] max-md:mx-auto max-lg:flex max-lg:px-20 max-md:p-0 justify-center">
          A MERN stack Web developer
        </div>
        <div className="text-[16px] max-md:text-[12px] w-1/2 max-lg:w-full max-lg:px-20 max-md:p-0 rig relative flex">
          Transforming Concepts into Seamless User Experiences, I prioritize
          client collaboration, fostering open communications
        </div>
      </div>

      <div className="right hidden text-center max-lg:w-full max-md:gap-5 w-2/3 max-lg:flex flex-col items-end z-[200] relative self-center p-5">
        <div className="leading-[40px] relative rig1 text-[40px] flex gra max-md:text-[24px] max-md:leading-[20px] py-5 w-1/2 max-lg:w-[80vw] max-md:mx-auto max-lg:flex max-lg:px-20 max-md:p-0 justify-center">
          A MERN stack developer
        </div>
        <div className="text-[16px] max-md:text-[12px] w-1/2 max-lg:w-full max-lg:px-20 max-md:p-0 rig relative">
          Transforming Concepts into Seamless User Experiences, I prioritize
          client collaboration, fostering open communications
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
