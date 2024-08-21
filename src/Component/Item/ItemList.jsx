import React, { useState, useEffect } from "react";
import { Box, Button, Container, Divider, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

export default function ItemList() {
  const [fields, setFields] = useState([]);

  // 컴포넌트 마운트 시 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedFields = JSON.parse(localStorage.getItem("qaFields")) || [];
    setFields(storedFields);
  }, []);

  // 로컬 스토리지에 데이터 저장하는 함수
  const saveToLocalStorage = (fields) => {
    localStorage.setItem("qaFields", JSON.stringify(fields));
  };

  const handleAddField = () => {
    const newFields = [
      ...fields,
      { id: Date.now(), q: "", a: "", isEditing: true },
    ];
    setFields(newFields);
    saveToLocalStorage(newFields);
  };

  const handleInputChange = (index, type, event) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, [type]: event.target.value };
      }
      return field;
    });
    setFields(newFields);
    saveToLocalStorage(newFields);
  };

  const handleToggleEdit = (index) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, isEditing: !field.isEditing };
      }
      return field;
    });
    setFields(newFields);
    saveToLocalStorage(newFields);
  };

  const handleDeleteField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
    saveToLocalStorage(newFields);
  };
  const navi = useNavigate();
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => navi(-1)}
          variant="contained"
          style={{ marginTop: "0px", marginRight: "auto" }}
        >
          뒤로가기
        </Button>
        {fields.map((field, index) => (
          <Box key={field.id} sx={{ width: "100%", mb: 2 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ margin: "5px 0" }}>Q{index + 1}</h3>
              <Button
                variant="contained"
                size="sm"
                style={{ marginLeft: "auto", marginRight: "8px" }}
                onClick={() => handleToggleEdit(index)}
              >
                {field.isEditing ? "완료" : "수정"}
              </Button>
              <Button
                variant="contained"
                color="error"
                size="sm"
                onClick={() => handleDeleteField(index)}
              >
                삭제
              </Button>
            </div>
            <TextField
              fullWidth
              variant="outlined"
              value={field.q}
              onChange={(e) => handleInputChange(index, "q", e)}
              sx={{ mb: 1 }}
              disabled={!field.isEditing}
            />
            <StyledLabel>{`A${index + 1}`}</StyledLabel>
            <Textarea
              fullWidth
              minRows={4}
              variant="outlined"
              value={field.a}
              onChange={(e) => handleInputChange(index, "a", e)}
              disabled={!field.isEditing}
            />
            <Divider sx={{ marginTop: "20px" }} />
          </Box>
        ))}
        <Button fullWidth variant="contained" onClick={handleAddField}>
          <span style={{ fontWeight: "700" }}>+</span>
        </Button>
      </Box>
    </Container>
  );
}
