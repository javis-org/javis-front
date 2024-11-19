import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, TextField, Typography } from "@mui/material";
import { DatePickerInput } from "../common/InputComponent.jsx";
import React, { useState } from "react";
import { InfoTitle } from "./InfoTitle.jsx";

export const ClubInfo = () => {
  //완료 버튼
  const [state, setState] = useState(true);
  const changeState = () => {
    setState(!state);
  };
  return (
    <>
      <InfoTitle
        title={"동아리/대외활동"}
        state={state}
        setState={changeState}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={2}>
            <Typography>기관명</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="기관명"
              margin="normal"
              disabled={state}
            />
          </Grid>
          <Grid item xs={12} sm={1} />
          <Grid item xs={12} sm={2}>
            <Typography>활동일</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <DatePickerInput label={"시작일"} disabled={state} />
          </Grid>

          <Grid item xs={12} sm={2}>
            <DatePickerInput label={"종료일"} disabled={state} />
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography>역할</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="역할"
              margin="normal"
              disabled={state}
            />
          </Grid>
          <Grid item xs={12} sm={1} />
          <Grid item xs={12} sm={2}>
            <Typography>비고</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="비고"
              margin="normal"
              disabled={state}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
};
