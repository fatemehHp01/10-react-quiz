import React from "react";

const Button = ({ className, children, handelCick }) => {
  return (
    <div className={className} onClick={handelCick}>
      {children}
    </div>
  );
};

export default Button;
