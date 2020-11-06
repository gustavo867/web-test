import React, { InputHTMLAttributes } from "react";

import "./index.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  height?: number;
}

const Input: React.FC<Props> = ({ width, height, ...props }) => {
  return (
    <>
      <input
        className="input"
        style={{
          width: width ? width : 240,
          height: height ? height : 36,
          marginRight: !width ? 30 : 0,
        }}
        {...props}
      />
    </>
  );
};

export default Input;
