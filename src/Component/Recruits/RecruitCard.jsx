import React, { useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const RecruitCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [status, setStatus] = useState("지원 준비");

  // Dots menu 열기 핸들러
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Dots menu 닫기 핸들러
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 삭제 메뉴 클릭 핸들러
  const handleDelete = () => {
    console.log("삭제됨");
    handleClose(); // 메뉴 닫기
  };

  // 상태 변경 핸들러
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #e0e0e0",
          borderRadius: "10px",
          padding: "8px",
          marginBottom: "16px",
          backgroundColor: "#fff",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Vertical black bar */}
          <Box
            sx={{
              backgroundColor: "black",
              width: "5px",
              height: "60px",
              borderRadius: "5px",
              marginRight: "16px",
            }}
          />
          {/* 2024 하반기 Date Text */}
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginRight: "16px" }}
          >
            2024 하반기
          </Typography>

          {/* Status Chip */}
          <Chip
            label="1차 면접 D-2"
            color="primary"
            sx={{
              backgroundColor: "#000", // Black background for the chip
              color: "#00FF7F", // Light green text color
              fontWeight: "bold",
              marginRight: "16px",
            }}
          />

          {/* 공고 제목 */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            공고 제목
          </Typography>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* 지원 상태 선택 (Select) */}
          <FormControl sx={{ marginRight: "16px", minWidth: 120 }}>
            <Select
              value={status}
              onChange={handleStatusChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                minWidth: "120px", // Select 컴포넌트의 최소 너비 설정
              }}
            >
              <MenuItem value="지원 준비">지원 준비</MenuItem>
              <MenuItem value="지원 완료">지원 완료</MenuItem>
              <MenuItem value="서류 통과">서류 통과</MenuItem>
              <MenuItem value="서류 탈락">서류 탈락</MenuItem>
              <MenuItem value="면접 통과">면접 통과</MenuItem>
              <MenuItem value="면접 탈락">면접 탈락</MenuItem>
              <MenuItem value="최종 합격">최종 합격</MenuItem>
              <MenuItem value="최종 탈락">최종 탈락</MenuItem>
            </Select>
          </FormControl>

          {/* Dots Menu */}
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleDelete}>🗑️삭제</MenuItem>{" "}
            {/* 삭제 메뉴 항목 */}
          </Menu>
        </Box>
      </Box>
    </>
  );
};
