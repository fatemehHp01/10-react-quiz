import React from "react";

const Button = ({ className, children, onClickHandel }) => {
  return (
    <div className={className} onClick={onClickHandel}>
      {children}
    </div>
  );
};

export default Button;
