import PropTypes from "prop-types";
import "../styles/main.css";

export const FeatureCard = ({ src, altText, title, p }) => {
  return (
    <div className="feature-item">
      <img src={src} alt={altText} className="feature-icon" />
      <h3 className="subtitle-medium dark-color">{title}</h3>
      <p>{p}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string,
  title: PropTypes.string,
  p: PropTypes.string,
};
