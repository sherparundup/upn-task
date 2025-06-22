import React from "react";
import DEV from "../assets/icons/DEV.to Icon.svg";
import Dribble from "../assets/icons/Dribbble Icon.svg";
import GitHub from "../assets/icons/GitHub Icon.svg";
import Instagram from "../assets/icons/Instagram Icon.svg";
import LinkedIn from "../assets/icons/LinkedIn Icon.svg";
import Twitter from "../assets/icons/Twitter Icon.svg";

const SocialMedias = () => {
  return (
    <div className="flex gap-4">
      <img src={DEV} alt="DEV" />
      <img src={Dribble} alt="Dribble" />
      <img src={GitHub} alt="GitHub" />
      <img src={Instagram} alt="Instagram" />
      <img src={LinkedIn} alt="LinkedIn" />
      <img src={Twitter} alt="Twitter" />
    </div>
  );
};

export default SocialMedias;
