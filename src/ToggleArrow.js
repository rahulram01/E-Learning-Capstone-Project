// ToggleArrow.js
import React from "react";
import "./ToggleArrow.css";
import ReadMoreTwoToneIcon from "@mui/icons-material/ReadMoreTwoTone";

const ToggleArrow = ({ onClick }) => {
  return (
    <div className="toggle-arrow" onClick={onClick}>
      <ReadMoreTwoToneIcon />
    </div>
  );
};

export default ToggleArrow;
