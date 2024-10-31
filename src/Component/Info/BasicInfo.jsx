import { FormLabel, Grid, styled, TextField } from "@mui/material";
import React from "react";

const CustomLabel = styled(FormLabel)`
  font-weight: 600;
`;
export const BasicInfo = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      {/* First Row: 한글 이름 */}
      <Grid item xs={12} sm={2}>
        <CustomLabel>한글이름</CustomLabel>
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12} sm={7}></Grid>

      {/* Second Row: 영문 이름 */}
      <Grid item xs={12} sm={2}>
        <CustomLabel>영문이름</CustomLabel>
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField fullWidth margin="normal" />
      </Grid>

      <Grid item xs={12} sm={1} />
      {/* Second Row: 한문 이름 */}
      <Grid item xs={12} sm={2}>
        <CustomLabel>한문이름</CustomLabel>
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField fullWidth margin="normal" />
      </Grid>
    </Grid>
  );
};
