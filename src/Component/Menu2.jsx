import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Modal,
  CircularProgress,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";

export default function Menu2() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [source, setSource] = useState("");
  const [question, setQuestion] = useState("");
  const [Company, setCompany] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="xl" style={{ overflowY: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 5,
          marginBottom: 3,
        }}
      >
        <Box sx={{ width: "30%" }}>
          <Typography variant="subtitle1" gutterBottom>
            자소서 소스
          </Typography>
          <Textarea
            value={source}
            onChange={(e) => setSource(e.target.value)}
            minRows={5}
            maxRows={10}
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ width: "30%" }}>
          <Typography variant="subtitle1" gutterBottom>
            질문 내용
          </Typography>
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            minRows={5}
            maxRows={10}
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ width: "30%" }}>
          <Typography variant="subtitle1" gutterBottom>
            회사명
          </Typography>
          <Textarea
            value={Company}
            onChange={(e) => setCompany(e.target.value)}
            minRows={5}
            maxRows={10}
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 3,
        }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            handleOpen();
          }}
        >
          <Typography variant="h6">자소서 쓰기</Typography>
        </Button>
      </Box>
      <Textarea
        minRows={10}
        disabled={isDisabled}
        placeholder="자소서 내용이 입력됩니다...."
        sx={{
          width: "100%",
          padding: 2,
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      />
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
          <p style={{ fontWeight: "700", fontSize: "20px" }}>
            생성중입니다. 몇 분 소요될 수 있습니다.
          </p>
        </Box>
      </Modal>
    </Container>
  );
}
