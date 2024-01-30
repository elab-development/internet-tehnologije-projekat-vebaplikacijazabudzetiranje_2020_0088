import React from "react";
import PropTypes from "prop-types";

const NekoPolje = (props) => {
  return <div>{props.name}</div>;
};

NekoPolje.propTypes = {
  name: PropTypes.string,
};

export default NekoPolje;
