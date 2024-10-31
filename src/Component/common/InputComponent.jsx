import React from "react";
import { Autocomplete, Button, ButtonGroup, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Reusable ServiceStatusButtonGroup Component
export const ServiceStatusButtonGroup = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <ButtonGroup fullWidth color="success" size="large">
      {options.map((option) => (
        <Button
          key={option}
          onClick={() => onChange(option)}
          variant={selectedOption === option ? "contained" : "outlined"} // 각 버튼에 개별적으로 variant 적용
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};
export const AutoCompleteInput = ({ options, value, setValue }) => {
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => setValue(newValue)} // newValue로 값을 업데이트
      onBlur={(event) => setValue(event.target.value)} // 입력된 값으로 업데이트
      freeSolo={true}
      options={options}
      renderInput={(params) => (
        <TextField {...params} margin="normal" fullWidth />
      )}
    />
  );
};

export const DatePickerInput = ({ value, onChange, label }) => {
  return (
    <DatePicker
      format="YYYY/MM/DD"
      label={label}
      value={value}
      onChange={(newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} margin="normal" fullWidth />
      )}
    />
  );
};
