import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mahmoud Ammar</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I worked as a freelancer as a front-end developer and also worked as a volunteer in Amnick company in
        England as a volunteer in managing social media sites , i can work with HTML, CSS,JavaScript, Bootstrap,
        React.Js, Node.Js, , Git, and Github to deliver exceptional customer experiences. Adept at contributing to
        highly collaborative work.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+201113945587</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mahmoudammar584@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex gap-4">
      <a href="https://www.facebook.com/ma7mod25" target="_blank" rel="noreferrer">
      <span className="bannerIcon">
      <FaFacebookF />
      </span>
      </a>
        <a href="https://twitter.com/mahmoudammar584" target="_blank" rel="noreferrer">
      <span className="bannerIcon">
      <FaTwitter />
      </span>
      </a>
        <a href="https://www.linkedin.com/in/mahmoud-ammar-27b5aa247" target="_blank" rel="noreferrer">
      <span className="bannerIcon">
      <FaLinkedinIn />
      </span>
        </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft