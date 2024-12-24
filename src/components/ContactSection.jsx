import { CgSpinner } from "react-icons/cg";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GoMail } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { HiPhone } from "react-icons/hi";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [click, setClick] = useState(true);
  const form = useRef();

  const validate = (email) => {
    const regex = /^[^@]+@[^@]+\.[^@]{2,4}$/;
    return regex.test(email);
  };
  const shoot = (e) => {
    e.preventDefault();

    try {
      emailjs
        .sendForm("service_9012igt", "template_lqpiefk", "#form", {
          publicKey: "8ipRC7AQhlFJ8sBRb",
        })
        .then(() => {
          setSent(true);
          setName("");
          setMessage("");
          setEmail("");
          setClick(true);
          setTimeout(() => {
            setSent(false);
          }, 1000);
        })
        .catch((err) => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 2000)
          setClick(true);
        });
    } catch (err) {
      return err;
    }
  };
  return (
    <section id="contact" className="contact-me overflow-hidden flex flex-col">
      <div className="heading text-[50px] max-md:text-[28px] pb-10 z-[0] bg-[#0a0a0a] px-5 md:px-10">
        <span className="md:px-2">//</span>
        Contact Me
        <span id="hash" className="text-[#ff00ff] hash relative">
          #
        </span>
      </div>

      <div className="contact relative flex max-lg:item max-lg:flex-col justify-evenly pb-10">
        <div className="touch p-10 max-md:p-5 text-[50px] max-md:text-[32px] bg-[#0a0a0a]">
          Get in Touch...&nbsp;;)
          <div className="end md:w-[500px] max-xl:w-[300px] max-lg:w-[75%] max-md:w-full max-md:text-[14px] text-[20px]">
            I'd love to hear from you, so if you have any questions, or you want
            to connect, or you have a project in mind.
            <br /> Let's make something awesome together
          </div>
        </div>
        <div className="formdiv flex justify-center max-lg:w-full">
          <form
            id="form"
            className="form overflow-hidden border-[#404040] w-[500px] top-0 rounded-xl gap-5 right-20  max-lg:mb-5 flex flex-col max-lg:w-[90%] max-md:mx-auto border py-10 backdrop-blur-md"
            ref={form}
            onSubmit={shoot}
          >
            <div className="head text-[50px] max-md:text-[30px] text-center md:pb-5 px-10 max-md:px-5">
              Shoot me
            </div>
            <div className="nameinp flex border bg-[#0a0a0aa0] h-[50px] w-[80%] max-md:w-[90%] mx-auto items-center rounded-full overflow-hidden border-[inherit]">
              <div className="icon p-5 text-[20px]">
                <AiOutlineUser />
              </div>
              <input
                name="from_name"
                id="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-full w-[80%] px-2 focus:outline-none bg-transparent autofill:bg-transparent"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="nameinp flex border bg-[#0a0a0aa0] h-[50px] w-[80%] max-md:w-[90%] mx-auto items-center rounded-full overflow-hidden border-[inherit]">
              <div className="icon p-5 text-[20px]">
                <GoMail />
              </div>
              <input
                id="email_id"
                name="email_id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-full px-2 w-[80%] focus:outline-none bg-transparent"
                type="text"
                placeholder="Your email"
              />
            </div>
            <div className="textarea w-full flex justify-center">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none w-[80%] max-md:w-[90%] rounded-lg placeholder:p-0 h-[150px]   focus:outline-none p-4 mx-auto border-[#404040] bg-transparent border"
                placeholder="Your Message....."
              ></textarea>
            </div>
            <button
              onClick={() => setClick(false)}
              type="submit"
              disabled={
                !(validate(email) && name.trim() != "" && message.trim() != "")
              }
              className={`w-[80%] max-md:w-[90%] mx-auto rounded-full h-[50px] disabled:opacity-30 bg-white text-black`}
            >
              {click ? (
                " Message"
              ) : (
                <CgSpinner className="mx-auto animate-spin" />
              )}
            </button>
            {error && <div className="err mx-auto text-red-500">Something went wrong</div>}
            {sent && (
              <div className="sent text-center flex justify-center gap-5 items-center">
                <BsCheckLg />
                Sent Successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
