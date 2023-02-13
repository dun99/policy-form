import React from "react";
import "./input.css";

type InputProps = {
  name: string;
  value: string;
  label?: string;
  onChange: any;
  className?: string;
  type: string;
};

const Input: React.FC<InputProps> = function ({
  value,
  name,
  label,
  onChange,
  className,
  type,
}) {
  return (
    <div className={`input ${className}`}>
      {label && <div className="input-label">{label}</div>}
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default Input;
