import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, TextField, Typography, IconButton, Button } from "@mui/material";
import { InfoTitle } from "./InfoTitle.jsx";
import { DatePickerInput } from "../common/InputComponent.jsx";
import { Delete, Add } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import styled from "styled-components";
import { client } from "../../api.js";
import { useAlert } from "./InfoPage";

const CustomButton = styled(Button)`
  background-color: black;
  color: white;
  margin-top: 30px;
  margin-bottom: -10px;
  &:hover {
    background: gray;
    color: black;
  }
`;

const AwardForm = ({ onDelete, isFirst, state, awardName, awardingInstitution, awardDate, remarks, awardDetails, setAwardName, setAwardingInstitution, setAwardDate, setRemarks, setAwardDetails }) => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ position: "relative", mt: isFirst ? 0 : 2 }}
    >
      {!isFirst && (
        <IconButton
          onClick={onDelete}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 1,
          }}
        >
          <Delete />
        </IconButton>
      )}

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerInput
            placeholder="수상 일자"
            value={awardDate}
            onChange={setAwardDate}
            fullWidth
            disabled={state}
          />
        </LocalizationProvider>
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
  );
};

export const AwardsInfo = () => {
  const [state, setState] = useState(true);
  const { showAlert } = useAlert();
  const [forms, setForms] = useState([{ id: 0, awardName: "", awardingInstitution: "", awardDate: dayjs(null), remarks: "", awardDetails: "" }]);

  const changeState = () => {
    if (state) {
      setState(false);
    } else {
      const awardsData = forms.map(form => ({
        awardName: form.awardName,
        awardingInstitution: form.awardingInstitution,
        awardDate: form.awardDate && form.awardDate.isValid() ? form.awardDate.toISOString() : "",
        remarks: form.remarks,
        awardDetails: form.awardDetails
      }));

      client.put("/AwardsInfo", awardsData)
        .then(() => {
          showAlert("수상 정보가 성공적으로 저장되었습니다.");
          setState(true);
        })
        .catch((error) => {
          console.error("Error saving awards info:", error);
          showAlert("수상 정보 저장에 실패했습니다.", "error");
        });
    }
  };

  const addForm = () => {
    const newId = forms.length > 0 ? Math.max(...forms.map((f) => f.id)) + 1 : 0;
    setForms([...forms, { id: newId, awardName: "", awardingInstitution: "", awardDate: dayjs(null), remarks: "", awardDetails: "" }]);
  };

  const deleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <>
      <InfoTitle title={"수상"} state={state} setState={changeState} />
      {forms.map((form, index) => (
        <AwardForm
          key={form.id}
          isFirst={index === 0}
          onDelete={() => deleteForm(form.id)}
          state={state}
          awardName={form.awardName}
          awardingInstitution={form.awardingInstitution}
          awardDate={form.awardDate}
          remarks={form.remarks}
          awardDetails={form.awardDetails}
          setAwardName={(value) => setForms(forms.map(f => f.id === form.id ? { ...f, awardName: value } : f))}
          setAwardingInstitution={(value) => setForms(forms.map(f => f.id === form.id ? { ...f, awardingInstitution: value } : f))}
          setAwardDate={(value) => setForms(forms.map(f => f.id === form.id ? { ...f, awardDate: value } : f))}
          setRemarks={(value) => setForms(forms.map(f => f.id === form.id ? { ...f, remarks: value } : f))}
          setAwardDetails={(value) => setForms(forms.map(f => f.id === form.id ? { ...f, awardDetails: value } : f))}
        />
      ))}
      {!state && (
        <CustomButton fullWidth onClick={addForm}>
          <Add sx={{ color: "green", fontWeight: "bold" }} />
          추가하기
        </CustomButton>
      )}
    </>
  );
};
