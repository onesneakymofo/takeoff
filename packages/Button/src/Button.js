import React from "react";

const Button = (
  {
    color,
    variant,
    size,
    disabled,
    type,
    role,
    children,
    className = null,
    onclick,
    ...rest
  }
) => {
  return (
    <button
      type={type}
      role="button"
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}
      { ...rest }
    >
      { children }
    </button>
  )
}

Button.defaultProps = {
  color: 'indigo',
  variant: 'solid',
  size: 'md',
  disabled: false,
  type: "button",
  role: "button"
};

export { Button };
