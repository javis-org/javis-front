import React, { useState } from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";

export default function CompanyAddForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
          새 공고 추가
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
