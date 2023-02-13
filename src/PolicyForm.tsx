import React, { ChangeEvent } from "react";

import { DATE_OPTIONS, FEE_OPTIONS, RANGES_TYPE } from "./constant";
import SelectButton from "./SelectButton";
import Input from "./Input";

import "./policyForm.css";

type PolicyFormProps = {
  type: String;
  formValue: any;
  handleOnChange?: any;
  handleOnChangeDateType?: any;
  dateType?: any;
};

const PolicyForm: React.FC<PolicyFormProps> = function ({
  type,
  formValue,
  handleOnChange,
  handleOnChangeDateType,
  dateType,
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    handleOnChange(e.target.name, e.target.value);
  };

  const handleChangeDateType = (e: ChangeEvent<HTMLInputElement>) => {
    handleOnChangeDateType(e.target.value);
  };

  return (
    <form className="policy-form" id="policy-form">
      {type === RANGES_TYPE.FIXED_RANGES ? (
        <>
          <div className="policy-form__body">
            <div className="policy-form__body-item">
              <SelectButton
                value={dateType}
                name="dateType"
                options={DATE_OPTIONS}
                onChange={handleChangeDateType}
                label="Please choose date type"
              />
            </div>
            <div className="policy-form__body-item">
              <div className="policy-date-picker">
                <Input
                  name=""
                  value={formValue.fee}
                  onChange={handleChange}
                  type=""
                  label="Please choose date"
                />
              </div>
            </div>
            <div className="policy-form__body-item">
              <SelectButton
                value={formValue.feeType}
                name="feeType"
                options={FEE_OPTIONS}
                onChange={handleChange}
                label="Please choose fee type"
              />
            </div>
            <div className="policy-form__body-item">
              <Input
                name="fee"
                value={formValue.fee}
                label="Fee"
                onChange={handleChange}
                type="number"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="policy-form__body">
          <div className="policy-form__body-item">
            <div className="policy-date-picker">
              <Input
                name=""
                value={formValue.fee}
                onChange={handleChange}
                type=""
                label="Please choose date from"
              />
            </div>
          </div>
          <div className="policy-form__body-item">
            <div className="policy-date-picker">
              <Input
                name=""
                value={formValue.fee}
                onChange={handleChange}
                type=""
                label="Please choose date to"
              />
            </div>
          </div>
          <div className="policy-form__body-item">
            <SelectButton
              value={formValue.feeType}
              name="feeType"
              options={FEE_OPTIONS}
              onChange={handleChange}
              label="Please choose fee type"
            />
          </div>
          <div className="policy-form__body-item">
            <Input
              name="fee"
              value={formValue.fee}
              label="Fee"
              onChange={handleChange}
              type="number"
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default PolicyForm;
