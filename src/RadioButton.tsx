import React from "react";
import "./radio.css";

type RadioButtonProps = {
  name: string;
  value: string;
  label: string;
  onChange?: any;
  className?: string;
};

const RadioButton: React.FC<RadioButtonProps> = function ({
  value,
  name,
  label,
  onChange,
  className,
}) {
  return (
    <div className={`radio-button ${className}`}>
      <label>
        <input type="radio" value={value} name={name} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
