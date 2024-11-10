import { Box, Button, Card, TextField, Typography } from "@mui/material";
import QuillEditor from "./QuillEditor.jsx";
import { useState } from "react";
import { BaseComponent } from "../common/BaseComponent.jsx";

export const EditorPage = () => {
  const [save, setSave] = useState("");
  const [textLength, setTextLength] = useState(0);

  return (
    <BaseComponent>
      <Card
        sx={{
          borderRadius: "20px",
          border: "1px solid #e0e0e0",
          overflow: "visible",
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <div>
              <Typography
                variant="subtitle"
                gutterBottom
                sx={{ color: "gray" }}
              >
                24년 9월 12일 08시 07분 | {save}
              </Typography>
            </div>
          </Box>
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <Box>
              <Typography
                variant="subtitle"
                gutterBottom
                sx={{
                  marginRight: 2,
                  color: "gray",
                  verticalAlign: "middle",
                }}
              >
                {textLength}자/5000자(공백 포함)
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mb: 6 }}>
          <TextField
            placeholder={"제목을 입력해주세요"}
            variant="standard"
            sx={{
              width: "100%", // 너비 100%
              height: "60px", // 높이 지정
              fontSize: "18px", // 글자 크기
              "& .MuiInputBase-input": {
                padding: "10px", // 입력 필드 내부 패딩 조정
                fontSize: "18px", // 입력 글자 크기 조정
              },
            }}
          />
        </Box>

        <Box>
          <QuillEditor
            save={save}
            setSave={setSave}
            setTextLength={setTextLength}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 2,
          }}
        >
          <Button variant="contained" color="primary">
            저장
          </Button>
          <Button variant="outlined" color="secondary" sx={{ ml: 2 }}>
            취소
          </Button>
        </Box>
      </Card>
    </BaseComponent>
  );
};
