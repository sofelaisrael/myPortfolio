import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
import gsap from "gsap";
import ScrollIntoView from "react-scroll-into-view";

const Navbar = ({ onScrollIntoView }) => {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    // const nav = document.querySelector('.nav')
    window.onscroll = () => {
      if (scrollY <= 50) {
        if (window.innerWidth >= 1024) {
          nav.style.top = "40px";
        } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
          nav.style.top = "90px";
        } else {
          nav.style.top = "80px";
        }
      } else {
        if (window.innerWidth >= 1024) {
          nav.style.top = "40px";
        } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
          nav.style.top = "20px";
        } else {
          nav.style.top = "10px";
        }
      }
    };
    gsap.fromTo(
      ".navbar",
      2,
      {
        top: "-100%",
        duration: 1,
        delay: 2,

        ease: "expo.out",
      },
      {
        top: "0%",
        duration: 1,

        ease: "expo.out",
      }
    );
  });
  useEffect(() => {
    setInterval(() => {
      var disp = new Date().toDateString();
      document.querySelector(".date").textContent = disp;
    }, 100);
  });
  return (
    <div className="text-white top-0 navbar h-[100px] overflow-hidden p-5 bg-transparent z-[100000]  absolute flex justify-between w-full items-center">
      <div className="nav-brand flex relative bg-transparent">
        <img src={logo} className="h-[50px]" alt="" />
      </div>
      <div className="fixed md:w-[500px] max-lg:w-[90%] transition-all duration-200 h-[50px] top-10 max-md:top-20 left-1/2 border-[#505050] border max-md:text-[12px] -translate-x-1/2 rounded-full backdrop-blur-[2px] flex justify-evenly items-center nav uppercase gap-5">
        <ScrollIntoView
          className="links z-20 text-white h-[50px] flex items-center md:hover:text-black w-[100px] justify-center"
          selector="#home"
        >
          <div className="abt">Home</div>
        </ScrollIntoView>

        <ScrollIntoView
          className="links z-20 text-white h-[50px] flex items-center md:hover:text-black w-[100px] justify-center"
          selector="#about"
        >
          <div className="abt">About</div>
        </ScrollIntoView>

        <ScrollIntoView
          className="links z-20 text-white h-[50px] flex items-center md:hover:text-black w-[100px] justify-center"
          selector="#projects"
        >
          <div className="abt">Projects</div>
        </ScrollIntoView>
        
        <ScrollIntoView
          className="links z-20 text-white h-[50px] flex items-center md:hover:text-black w-[100px] justify-center"
          selector="#contact"
        >
          <div className="abt">Contact</div>
        </ScrollIntoView>

        <div className="slider max-md:hidden bg-white z-10 w-10 border rounded-[10px] fixed pointer-events-none translate-x-[100%] -translate-y-1/2  h-[30px] top-1/2 py-5 opacity-0"></div>
      </div>

      <div className="date pt-10 max-md:p-2 p-10"></div>
    </div>
  );
};

export default Navbar;
