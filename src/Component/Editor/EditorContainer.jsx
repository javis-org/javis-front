import { Box, Button, Card, Typography } from "@mui/material";
import QuillEditor from "./QuillEditor.jsx";
import { useState } from "react";
import { BaseComponent } from "../common/BaseComponent.jsx";

export const EditorContainer = () => {
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
            <Button
              variant="contained"
              sx={{ background: "purple", borderRadius: "20px" }}
            >
              임시 저장
            </Button>
          </Box>
        </Box>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "700" }}>
            학교 수업이나 대외활동 등을 통해 경험한 프로젝트
          </Typography>
        </Box>

        <Typography variant="body1" gutterBottom>
          <QuillEditor
            save={save}
            setSave={setSave}
            setTextLength={setTextLength}
          />
        </Typography>
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
