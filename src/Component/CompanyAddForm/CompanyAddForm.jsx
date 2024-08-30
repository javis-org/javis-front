import React, { useState } from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { client } from "../../api";

export default function CompanyAddForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");
  const memberId = localStorage.getItem("memberId");
  const navi = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = { memberId, title, company, description: content };

    // 데이터를 로컬 스토리지에 저장
    const savedPosts = JSON.parse(localStorage.getItem("jobPostings")) || [];
    savedPosts.push(postData);
    localStorage.setItem("jobPostings", JSON.stringify(savedPosts));

    navi(-1);

    // 서버 통신 주석 처리

    const fetch = async () => {
      try {
        console.log(postData);
        await client.post(
          `/jobPostings?memberId=${memberId}&title=${title}&company=${company}&description=${content}`
        );
        navi(-1);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
    fetch();
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          새 자소서 추가
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField
            fullWidth
            label="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="회사명"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="세부 내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            제출
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
