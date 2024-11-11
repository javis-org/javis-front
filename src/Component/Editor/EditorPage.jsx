import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import QuillEditor from "./QuillEditor.jsx";
import { useState } from "react";
import { BaseComponent } from "../common/BaseComponent.jsx";
import ChatIcon from "@mui/icons-material/Chat";
import { Remove } from "@mui/icons-material";
import { CustomButton } from "../common/Button/CustomButton.jsx";
import { Comment } from "./Comment.jsx";

export const EditorPage = () => {
  const [save, setSave] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  // Drawer를 여닫는 함수
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <BaseComponent>
      <Box sx={{ display: "flex", position: "relative" }}>
        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            transition: "margin-right 0.3s",
            marginRight: isDrawerOpen ? "300px" : "0",
          }}
        >
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
                <Typography
                  variant="subtitle"
                  gutterBottom
                  sx={{ color: "gray" }}
                >
                  24년 9월 12일 08시 07분 | {save}
                </Typography>
              </Box>
              <Box sx={{ display: "inline-flex", alignItems: "center" }}>
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
            <Box sx={{ mb: 6 }}>
              <TextField
                placeholder={"제목을 입력해주세요"}
                variant="standard"
                sx={{
                  width: "100%",
                  height: "60px",
                  fontSize: "18px",
                  "& .MuiInputBase-input": {
                    padding: "10px",
                    fontSize: "18px",
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
        </Box>

        {/* 오른쪽 아래에 고정된 채팅 아이콘 버튼 */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            width: "50px",
            height: "50px",
            position: "fixed",
            right: "20px",
            bottom: "20px",
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            boxShadow: 3,
          }}
        >
          <ChatIcon />
        </IconButton>

        {/* 댓글 입력 창 - 오른쪽에 고정 */}
        {isDrawerOpen && (
          <Box
            sx={{
              width: "300px",
              position: "absolute",
              top: "-50px",
              right: "-40px",
              height: "calc(100vh - 96px)",
              backgroundColor: "white",
              borderLeft: "1px solid #e0e0e0",
              boxShadow: 3,
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" gutterBottom>
                코멘트 남기기
              </Typography>
              <Tooltip title={"닫기"}>
                <IconButton
                  sx={{ marginLeft: "auto" }}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <Remove />
                </IconButton>
              </Tooltip>
            </Box>

            {/* 댓글 리스트 영역에 스크롤 추가 */}
            <Box
              sx={{
                background: "#f8f5fa",
                flexGrow: 1,
                p: 1,
                overflowY: "auto",
                maxHeight: "calc(100vh - 300px)",

                /* 스크롤바 스타일 */
                "&::-webkit-scrollbar": {
                  width: "8px", // 스크롤바 너비
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#c0c0c0", // 스크롤바 색상
                  borderRadius: "4px", // 둥근 모서리
                  "&:hover": {
                    backgroundColor: "#a0a0a0", // 호버 시 색상
                  },
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#e0e0e0", // 스크롤바 트랙 색상
                  borderRadius: "4px",
                },
              }}
            >
              <Box sx={{ marginBottom: "10px" }}>
                <Comment />
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <Comment />
              </Box>{" "}
              <Box sx={{ marginBottom: "10px" }}>
                <Comment />
              </Box>{" "}
              <Box sx={{ marginBottom: "10px" }}>
                <Comment />
              </Box>{" "}
              <Box sx={{ marginBottom: "10px" }}>
                <Comment />
              </Box>{" "}
              <Box sx={{ marginBottom: "10px" }}>
                <Comment />
              </Box>
            </Box>

            <Box sx={{ marginTop: "10px" }}>
              <TextField
                placeholder="댓글을 입력하세요"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <CustomButton variant="contained" fullWidth>
                댓글 저장
              </CustomButton>
            </Box>
          </Box>
        )}
      </Box>
    </BaseComponent>
  );
};
