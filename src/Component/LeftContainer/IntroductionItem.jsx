import { Box, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export const IntroductionItem = ({ section }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const open = Boolean(anchorEl);

  const handleMoreVertClick = (event, index) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setCurrentIndex(index);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    console.log("삭제 버튼 클릭됨");
    handleClose();
  };

  const handleChangeName = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      {section.items.map((item, itemIndex) => (
        <Box
          key={itemIndex}
          sx={{
            padding: "10px",
            borderRadius: "8px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            mt: 1,
            cursor: "pointer",
            transition: "background-color 0.3s",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#f7f6fa",
              color: "#6255f7",
            },
            "&:hover .more-vert-icon": {
              // 마우스를 올렸을 때 아이콘 표시
              visibility: "visible",
              opacity: 1,
            },
          }}
        >
          <Box sx={{ display: "inline-block", mr: "5px" }}>📜</Box>
          <Box sx={{ display: "inline-block" }}>{item.title}</Box>
          <Box
            className="more-vert-icon"
            sx={{
              ml: "auto",
              visibility: "hidden", // 기본적으로 숨김
              opacity: 0, // 기본적으로 숨김
              transition: "visibility 0s, opacity 0.3s linear", // 부드러운 전환
            }}
          >
            <MoreVertIcon
              onClick={(event) => handleMoreVertClick(event, itemIndex)}
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && currentIndex === itemIndex}
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
              <MenuItem onClick={handleChangeName}>이름 변경</MenuItem>
              <MenuItem onClick={handleDelete}>삭제</MenuItem>
            </Menu>
          </Box>
        </Box>
      ))}
    </>
  );
};
