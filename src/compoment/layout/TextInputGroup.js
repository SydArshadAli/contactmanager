import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const TextInputGroup = ({
  label,
  name,
  placeholder,
  value,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.protoType = {
  lable: PropTypes.string.isRequired,
  name: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.isRequired,
  value: PropTypes.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
