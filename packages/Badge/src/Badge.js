import React from "react";

export const Badge = ({ children, className = '', props}) => (
  <div className={`flex w-fit-content z-10 text-white rounded-lg p-2 font-bold ${className}`} {...props}>
    {children}
  </div>
)
