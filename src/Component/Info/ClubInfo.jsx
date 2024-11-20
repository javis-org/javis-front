import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, TextField, Typography } from "@mui/material";
import { DatePickerInput } from "../common/InputComponent.jsx";
import React, { useEffect, useState } from "react";
import { InfoTitle } from "./InfoTitle.jsx";
import dayjs from "dayjs";

export const ClubInfo = ({clubsId,handleRemoveClubs,index}) => {
  //완료 버튼
  const [state, setState] = useState(true);


  const [organizationName,setOrganizationName] = useState("");
  const [startDate,setStartDate] = useState(dayjs(null));
  const [endDate,setEndDate] = useState(dayjs(null));
  const [role,setRole] = useState("");
  const [remarks,setRemarks] = useState("");

  const changeState = () => {
    setState(!state);

    //수정완료시 데이터 저장
    if(!state){
      const data={
        organizationName:organizationName,
        startDate:startDate,
        endDate:endDate,
        role:role,
        remarks:remarks
      }
      localStorage.setItem(`clubsInfo_${clubsId}`,JSON.stringify(data));
    }

  };

  useEffect(() => {
    try{
      const savedData = JSON.parse(localStorage.getItem(`clubsInfo_${clubsId}`));
      console.log(clubsId,"090");
      
      setOrganizationName(savedData.organizationName);
      setStartDate(dayjs(savedData.startDate));
      setEndDate(dayjs(savedData.endDate));
      setRole(savedData.role);
      setRemarks(savedData.remarks);

      console.log(organizationName,"889");
    }catch(e){

    }
  },[])

  //제거하기 클릭시 저장된값이 있다면 확인 받는 팝업
  const handleRemoveClick = () => {
    const savedData = localStorage.getItem(`clubsInfo_${clubsId}`);
    if (savedData) {
      const confirmed = window.confirm("저장된 데이터가 있습니다. 정말 삭제하시겠습니까?");
      if (!confirmed) return; 
    }

    localStorage.removeItem(`clubsInfo_${clubsId}`);
    handleRemoveClubs(clubsId);
  };


  return (
    <>
      <InfoTitle
        title={"동아리/대외활동"}
        state={state}
        setState={changeState}
        componentId={index}
        handleRemoveAward={() => handleRemoveClick()}
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
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              disabled={state}
            />
          </Grid>
          <Grid item xs={12} sm={1} />
          <Grid item xs={12} sm={2}>
            <Typography>활동일</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <DatePickerInput 
              label={"시작일"} 
              disabled={state} 
              value={startDate}
              onChange={setStartDate}
              />
          </Grid>

          <Grid item xs={12} sm={2}>
            <DatePickerInput 
              label={"종료일"} 
              disabled={state} 
              value={endDate}
              onChange={setEndDate}
              />
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography>역할</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="역할"
              margin="normal"
              value={role}
              onChange={(e) => setRole(e.target.value)}
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
