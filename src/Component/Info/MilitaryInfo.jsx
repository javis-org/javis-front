import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // dayjs 어댑터 사용
import dayjs from "dayjs";
import {
  AutoCompleteInput,
  DatePickerInput,
  ServiceStatusButtonGroup,
} from "../common/InputComponent.jsx";
import { InfoTitle } from "./InfoTitle.jsx";

export const MilitaryInfo = () => {
  //완료 버튼
  const [state, setState] = useState(true);
  const changeState = () => {
    setState(!state);
  };
  // 병역 구분
  const [serviceStatus, setServiceStatus] = useState();
  const militaryStatusOptions = ["비대상", "군필", "미필", "면제", "복무중"];
  console.log(serviceStatus);

  //군별
  const [militaryType, setMilitaryType] = useState();
  const militaryBranches = ["육군", "해군", "공군", "해병대"];
  console.log(militaryType);

  //병과
  const [militaryClasses, setMilitaryClasses] = useState();
  console.log(militaryClasses);

  //계급
  const [militaryRanks, setMilitaryRanks] = useState();
  console.log(militaryRanks);
  //복무기간
  const [startDate, setStartDate] = useState(dayjs(null)); // dayjs로 상태 초기화
  const [endDate, setEndDate] = useState(dayjs(null));
  //제대 구분
  const [retireMilitary, setRetireMilitary] = useState();
  const retireList = [
    "만기 제대",
    "의병 제대",
    "특전 제대",
    "전역 취소",
    "중도 제대",
    "병역 면제",
  ];
  console.log(retireMilitary);

  return (
    <>
      <InfoTitle title="병역사항" state={state} setState={changeState} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* 병역구분 */}
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ marginTop: "5px" }}
        >
          <Grid item xs={12} sm={2}>
            <Typography>병역구분</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <ServiceStatusButtonGroup
              options={militaryStatusOptions}
              selectedOption={serviceStatus}
              onChange={setServiceStatus}
              disabled={state}
            />
          </Grid>
        </Grid>

        {/* 군별 및 병과 */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={2}>
            <Typography>군별</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <AutoCompleteInput
              options={militaryBranches}
              value={militaryType}
              setValue={setMilitaryType}
              disabled={state}
            />
          </Grid>
          <Grid item xs={12} sm={1} />
          <Grid item xs={12} sm={2}>
            <Typography>병과</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              margin="normal"
              value={militaryClasses}
              onChange={(e) => setMilitaryClasses(e.target.value)}
              disabled={state}
            />
          </Grid>
        </Grid>

        {/* 계급 및 복무기간 */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={2}>
            <Typography>계급</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              margin="normal"
              value={militaryRanks}
              onChange={(e) => setMilitaryRanks(e.target.value)}
              disabled={state}
            />
          </Grid>
          <Grid item xs={12} sm={1} />
          <Grid item xs={12} sm={2}>
            <Typography>복무기간</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <DatePickerInput
              onChange={setStartDate}
              label={"시작일"}
              value={startDate}
              disabled={state}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <DatePickerInput
              onChange={setEndDate}
              label={"종료일"}
              value={endDate}
              disabled={state}
            />
          </Grid>
        </Grid>

        {/* 제대구분 */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={2}>
            <Typography>제대구분</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <AutoCompleteInput
              options={retireList}
              value={retireMilitary}
              setValue={setRetireMilitary}
              disabled={state}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
};
