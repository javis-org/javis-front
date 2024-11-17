import { FormLabel, Grid, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { InfoTitle } from "./InfoTitle.jsx";

const CustomLabel = styled(FormLabel)`
  font-weight: 600;
`;

export const BasicInfo = () => {
  const [state, setState] = useState(true);

  // 각 필드에 대한 상태 변수 추가
  const [koreanName, setKoreanName] = useState("");
  const [englishName, setEnglishName] = useState("");
  const [chineseName, setChineseName] = useState("");

  const changeState = () => {
    setState(!state);
  };

  return (
    <>
      <InfoTitle title={"기본 정보"} state={state} setState={changeState} />
      <Grid container spacing={2} alignItems="center">
        {/* First Row: 한글 이름 */}
        <Grid item xs={12} sm={2}>
          <CustomLabel>한글이름</CustomLabel>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            margin="normal"
            value={koreanName} // 상태 변수로 관리
            onChange={(e) => setKoreanName(e.target.value)}
            disabled={state}
          />
        </Grid>
        <Grid item xs={12} sm={7}></Grid>

        {/* Second Row: 영문 이름 */}
        <Grid item xs={12} sm={2}>
          <CustomLabel>영문이름</CustomLabel>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            margin="normal"
            value={englishName} // 상태 변수로 관리
            onChange={(e) => setEnglishName(e.target.value)}
            disabled={state}
          />
        </Grid>

        <Grid item xs={12} sm={1} />

        {/* Second Row: 한문 이름 */}
        <Grid item xs={12} sm={2}>
          <CustomLabel>한문이름</CustomLabel>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            margin="normal"
            value={chineseName} // 상태 변수로 관리
            onChange={(e) => setChineseName(e.target.value)}
            disabled={state}
          />
        </Grid>
      </Grid>
    </>
  );
};
