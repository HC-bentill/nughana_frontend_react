import React from "react";
import { imgs } from "../../assets/core/data";

function Underline({ className }) {
  return (
    <>
      <img className={className} src={imgs.underline} alt="" />
    </>
  );
}

export default Underline;
