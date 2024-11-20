import { Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { InfoTitle } from "./InfoTitle.jsx";
import { DatePickerInput } from "../common/InputComponent.jsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useEffect } from "react";
import dayjs from "dayjs";

export const AcademicInformation = () => {
  // 완료 버튼 상태
  const [state, setState] = useState(true);
  const changeState = () => {
    setState(!state);

    if(!state){
      const data={
        schoolName:schoolName,
        studyStartDate:studyStartDate,
        studyEndDate:studyEndDate,
        graduationStatus:graduationStatus,
        totalCredits:totalCredits,
        majorCredits:majorCredits,
        acquiredCredits:acquiredCredits,
        acquiredMajorCredits:acquiredMajorCredits,
        remarks:remarks
      }
      localStorage.setItem("academicInfo",JSON.stringify(data));
    }
  };

  // 각 필드에 대한 상태 변수 추가
  const [schoolName, setSchoolName] = useState("");
  const [studyStartDate, setStudyStartDate] = useState(dayjs(null));
  const [studyEndDate, setStudyEndDate] = useState(dayjs(null));
  const [graduationStatus, setGraduationStatus] = useState("");
  const [totalCredits, setTotalCredits] = useState("");
  const [majorCredits, setMajorCredits] = useState("");
  const [acquiredCredits, setAcquiredCredits] = useState("");
  const [acquiredMajorCredits, setAcquiredMajorCredits] = useState("");
  const [remarks, setRemarks] = useState("");


  useEffect(() => {
    try{
      const savedData = JSON.parse(localStorage.getItem(`academicInfo`));
      
      setSchoolName(savedData.schoolName);
      setStudyStartDate(dayjs(savedData.studyStartDate));
      setStudyEndDate(dayjs(savedData.studyEndDate));
      setGraduationStatus(savedData.graduationStatus);
      setTotalCredits(savedData.totalCredits);
      setMajorCredits(savedData.majorCredits);
      setAcquiredCredits(savedData.acquiredCredits);
      setAcquiredMajorCredits(savedData.acquiredMajorCredits);
      setRemarks(savedData.remarks)
    }catch(e){

    }
  },[]);

  return (
    <>
      <InfoTitle title={"학적사항"} state={state} setState={changeState} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={2} alignItems="center">
          {/* 학교 이름 */}
          <Grid item xs={12} sm={2}>
            <Typography>학교이름</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="학교 이름"
              margin="normal"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              disabled={state}
            />
          </Grid>

          <Grid item xs={12} sm={1} />

          {/* 재학 기간 */}
          <Grid item xs={12} sm={2}>
            <Typography>재학기간</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <DatePickerInput
              label={"시작일"}
              value={studyStartDate}
              onChange={setStudyStartDate}
              disabled={state}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <DatePickerInput
              label={"종료일"}
              value={studyEndDate}
              onChange={setStudyEndDate}
              disabled={state}
            />
          </Grid>

          {/* 졸업 구분 */}
          <Grid item xs={12} sm={2}>
            <Typography>졸업 구분</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="구분 (졸업, 졸예, 입학, 편입 등)"
              margin="normal"
              value={graduationStatus}
              onChange={(e) => setGraduationStatus(e.target.value)}
              disabled={state}
            />
          </Grid>

          <Grid item xs={12} sm={1} />

          {/* 전체 학점 */}
          <Grid item xs={12} sm={2}>
            <Typography>전체 학점</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="전체 학점"
              margin="normal"
              value={totalCredits}
              onChange={(e) => setTotalCredits(e.target.value)}
              disabled={state}
            />
          </Grid>

          {/* 전공 학점 */}
          <Grid item xs={12} sm={2}>
            <Typography>전공 학점</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="전공 학점"
              margin="normal"
              value={majorCredits}
              onChange={(e) => setMajorCredits(e.target.value)}
              disabled={state}
            />
          </Grid>

          <Grid item xs={12} sm={1} />

          {/* 취득 학점 */}
          <Grid item xs={12} sm={2}>
            <Typography>취득 학점</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="취득 학점"
              margin="normal"
              value={acquiredCredits}
              onChange={(e) => setAcquiredCredits(e.target.value)}
              disabled={state}
            />
          </Grid>

          {/* 취득 전공 학점 */}
          <Grid item xs={12} sm={2}>
            <Typography>취득 전공 학점</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="취득 전공 학점"
              margin="normal"
              value={acquiredMajorCredits}
              onChange={(e) => setAcquiredMajorCredits(e.target.value)}
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
        </Grid>
      </LocalizationProvider>
    </>
  );
};
