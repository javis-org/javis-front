import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, TextField, Typography } from "@mui/material";
import { DatePickerInput } from "../common/InputComponent.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { InfoTitle } from "./InfoTitle.jsx";

export const AwardsInfo = ( {awardId, index,handleRemoveAward}) => {
  
  // 완료 버튼 상태 관리
  const [state, setState] = useState(true);
  const changeState = () => {
    setState(!state);

    //수정완료시 데이터 저장
    if(!state){
      const data={
        awardName: awardName,
        awardingInstitution: awardingInstitution,
        awardDate: awardDate,
        remarks: remarks,
        awardDetails: awardDetails
      }
      localStorage.setItem(`awardsInfo_${awardId}`,JSON.stringify(data));
    }
  };
  
  // 각 필드의 상태 변수 추가
  const [awardName, setAwardName] = useState("");
  const [awardingInstitution, setAwardingInstitution] = useState("");
  const [awardDate, setAwardDate] = useState(dayjs(null));
  const [remarks, setRemarks] = useState("");
  const [awardDetails, setAwardDetails] = useState("");

  //페이지 호출시 저장된값 불러오기
  useEffect(()=> {
    try{
      const savedData = JSON.parse(localStorage.getItem(`awardsInfo_${awardId}`));

      setAwardName(savedData.awardName);
      setAwardingInstitution(savedData.awardingInstitution);
      setAwardDate(dayjs(savedData.awardDate));
      setRemarks(savedData.remarks);
      setAwardDetails(savedData.awardDetails);
    }catch(e){

    }
  },[])

  //제거하기 클릭시 저장된값이 있다면 확인 받는 팝업
  const handleRemoveClick = () => {
    const savedData = localStorage.getItem(`awardsInfo_${awardId}`);
    if (savedData) {
      const confirmed = window.confirm("저장된 데이터가 있습니다. 정말 삭제하시겠습니까?");
      if (!confirmed) return; 
    }

    localStorage.removeItem(`awardsInfo_${awardId}`);
    handleRemoveAward(awardId);
  };

  return (
    <>
      <InfoTitle title={"수상"} state={state} setState={changeState} componentId={index} handleRemove={handleRemoveClick}/>
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
