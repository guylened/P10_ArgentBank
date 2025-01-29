import PropTypes from "prop-types";
import "../styles/main.css";

const BUTTON_TYPES = {
  ACTION: 1,
  SUBMIT: 2,
};

export const Button = ({ type, value, className, onClick }) => {
  switch (type) {
    case BUTTON_TYPES.ACTION:
      return (
        <button type="button" className={className} onClick={onClick}>
          {value}
        </button>
      );
    case BUTTON_TYPES.SUBMIT:
      return (
        <button type="submit" className={className}>
          {value}
        </button>
      );
  }
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.number.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
};
