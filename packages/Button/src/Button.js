import React from "react";
import PropTypes from "prop-types";

const Button = (
  {
    color = 'indigo',
    variant = 'solid',
    size = 'md',
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

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  hidden: PropTypes.bool,
  role: PropTypes.string,
  onclick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  type: "button",
  hidden: false,
  role: "button"
};

export { Button };
