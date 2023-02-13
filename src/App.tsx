import { ChangeEvent, useState } from "react";

import PolicyForm from "./PolicyForm";
import RadioButton from "./RadioButton";
import { FEE_TYPE, FIXED_RANGES_TYPE, RANGES_TYPE } from "./constant";

import "./page.css";

function App() {
  const [type, setType] = useState<string>("");
  const [dateType, setDateType] = useState<string>(FIXED_RANGES_TYPE.BEFORE);

  const handleDisplayForm = (event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const [formValue, setFormValue] = useState<any>({
    fee: "",
    feeType: FEE_TYPE.PERCENTAGE,
    startDate: "",
    endDate: "",
  });

  const handleOnChange = (name: string, value: string) => {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (type === RANGES_TYPE.FIXED_RANGES) {
      let values;
      if (dateType === FIXED_RANGES_TYPE.BEFORE) {
        values = {
          ...formValue,
          startDate: "1/1/1970",
        };
      } else {
        values = {
          ...formValue,
          endDate: "31/12/9999",
        };
      }
      console.log("values", values);
    } else {
      console.log("form value", formValue);
    }
  };

  const handleOnChangeDateType = (value: string) => {
    setDateType(value);
  };

  return (
    <div className="policy">
      <div className="policy__title">Choose type</div>
      <div className="policy__content">
        <RadioButton
          value={RANGES_TYPE.FIXED_RANGES}
          name="radio-fixed"
          label="Select by fixed ranges"
          onChange={handleDisplayForm}
          className={
            type !== "" && type !== RANGES_TYPE.FIXED_RANGES ? "text-grey" : ""
          }
        />
        {type === RANGES_TYPE.FIXED_RANGES && (
          <PolicyForm
            type={type}
            dateType={dateType}
            formValue={formValue}
            handleOnChange={(name: string, value: string) =>
              handleOnChange(name, value)
            }
            handleOnChangeDateType={(value: any) =>
              handleOnChangeDateType(value)
            }
          />
        )}
        <RadioButton
          value={RANGES_TYPE.DATE_RANGES}
          name="radio-fixed"
          label="Select by date ranges"
          onChange={handleDisplayForm}
          className={
            type !== "" && type !== RANGES_TYPE.DATE_RANGES ? "text-grey" : ""
          }
        />
        {type === RANGES_TYPE.DATE_RANGES && (
          <PolicyForm
            type={type}
            dateType={dateType}
            formValue={formValue}
            handleOnChange={(name: string, value: string) =>
              handleOnChange(name, value)
            }
            handleOnChangeDateType={(value: any) =>
              handleOnChangeDateType(value)
            }
          />
        )}
      </div>

      <div className="policy__button">
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
