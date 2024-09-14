import React, {useState, useEffect} from "react";
import {Box, Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ItemForm from "./ItemForm";

export default function ItemList() {
  const [fields, setFields] = useState([]);

  // 컴포넌트 마운트 시 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    // 로컬 스토리지에서 데이터 로드
    const savedFields = JSON.parse(localStorage.getItem("fields")) || [];
    setFields(savedFields);
  }, []);

  // 폼 데이터를 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("fields", JSON.stringify(fields));
  }, [fields]);

  // 질문 추가 핸들러
  const handleAddField = () => {
    // 새로운 폼 데이터 객체 생성
    const newField = {text: ""};
    setFields([...fields, newField]);
  };

  // 질문 삭제 핸들러
  const handleDeleteField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // 질문 수정 핸들러
  const handleEditField = (index, newText) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? {...field, text: newText} : field
    );
    setFields(updatedFields);
  };

  const navi = useNavigate();

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop    : 8,
          display      : "flex",
          flexDirection: "column",
          alignItems   : "center",
        }}
      >
        <Button
          onClick={() => navi(-1)}
          variant="contained"
          style={{marginTop: "0px", marginRight: "auto"}}
        >
          뒤로가기
        </Button>
        {fields.map((data, index) => (
          <ItemForm
            key={index}
            data={data}
            index={index}
            onEdit={(newText) => handleEditField(index, newText)}
            onDelete={() => handleDeleteField(index)}
          />
        ))}
        <Button fullWidth variant="contained" onClick={handleAddField}>
          <span style={{fontWeight: "700"}}>+</span>
        </Button>
      </Box>
    </Container>
  );
}
