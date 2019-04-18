import React from "react";
import PropTypes from "prop-types";

const CommonGroups = (label, name, placeholder, value, type, onChange) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

CommonGroups.protoType = {
  lable: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.isRequired,
  value: PropTypes.isRequired,
  onChange: PropTypes.func.isRequired
};

CommonGroups.defaultProps = {
  type: "text"
};

export default CommonGroups;
