/* eslint-disable array-callback-return */
import React from "react";
import "./select.css";

type Option = {
  value: string;
  content: string;
};
type SelectButtonProps = {
  name: string;
  value: string;
  onChange?: any;
  options: Option[];
  label?: string;
};

const SelectButton: React.FC<SelectButtonProps> = function ({
  value,
  options,
  onChange,
  name,
  label,
}) {
  return (
    <div className="custom-select">
      <div className="custom-select__label">{label}</div>
      <select value={value} onChange={onChange} name={name}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.content}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectButton;
