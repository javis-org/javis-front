import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, TextField, Typography } from "@mui/material";
import { DatePickerInput } from "../common/InputComponent.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import dayjs from "dayjs";
import { InfoTitle } from "./InfoTitle.jsx";

export const AwardsInfo = () => {
  // 완료 버튼 상태 관리
  const [state, setState] = useState(true);
  const changeState = () => {
    setState(!state);
  };

  // 각 필드의 상태 변수 추가
  const [awardName, setAwardName] = useState("");
  const [awardingInstitution, setAwardingInstitution] = useState("");
  const [awardDate, setAwardDate] = useState(dayjs(null));
  const [remarks, setRemarks] = useState("");
  const [awardDetails, setAwardDetails] = useState("");

  return (
    <>
      <InfoTitle title={"수상"} state={state} setState={changeState} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={2} alignItems="center">
          {/* 수상명 */}
          <Grid item xs={12} sm={2}>
            <Typography>수상명</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="수상명"
              margin="normal"
              value={awardName}
              onChange={(e) => setAwardName(e.target.value)}
              disabled={state}
            />
          </Grid>

          <Grid item xs={12} sm={1} />

          {/* 수여 기관 */}
          <Grid item xs={12} sm={2}>
            <Typography>수여 기관</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="수여 기관"
              margin="normal"
              value={awardingInstitution}
              onChange={(e) => setAwardingInstitution(e.target.value)}
              disabled={state}
            />
          </Grid>

          {/* 수상 일자 */}
          <Grid item xs={12} sm={2}>
            <Typography>수상 일자</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <DatePickerInput
              placeholder="수상 일자"
              value={awardDate}
              onChange={setAwardDate}
              fullWidth
              disabled={state}
            />
          </Grid>

          <Grid item xs={12} sm={1} />

          {/* 비고 */}
          <Grid item xs={12} sm={2}>
            <Typography>비고</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="비고"
              margin="normal"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              disabled={state}
            />
          </Grid>

          {/* 수상 내역 */}
          <Grid item xs={12} sm={2}>
            <Typography>수상 내역</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="수상 내역"
              margin="normal"
              multiline
              rows={4}
              value={awardDetails}
              onChange={(e) => setAwardDetails(e.target.value)}
              disabled={state}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
};
