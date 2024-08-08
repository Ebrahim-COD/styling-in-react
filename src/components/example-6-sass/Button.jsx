// src/component/example-6-sass/Button.jsx
import './button.scss';

const Button = ({ buttonText }) => {
  return <button className="sassy-button">{buttonText}</button>; // using the class name from our Sass file
};

export default Button;