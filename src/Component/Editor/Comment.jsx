import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  IconButton,
  Menu,
  MenuItem,
  styled,
  TextField,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CustomCard = styled(Card)`
  min-height: 80px;
  padding: 15px;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    outline: 2px solid black;
  }
`;

export const Comment = ({
  text = "금융결제원이 제공하는 서비스는 매우 다양하며, 저는 개인적으로 금융공동망과 인터넷지로 서비스를 이용해 본 경험이 있습니다.",
  date = "24.10.03",
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [commentText, setCommentText] = useState(text);
  const iconButtonRef = useRef(null);
  const cardRef = useRef(null);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(iconButtonRef.current);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setAnchorEl(null);
    cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleDelete = () => {
    console.log("삭제됨");
    setAnchorEl(null);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCommentText(text);
  };

  return (
    <CustomCard ref={cardRef} sx={{ position: "relative" }}>
      <IconButton
        ref={iconButtonRef}
        onClick={handleClick}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleEdit}>✏️ 수정</MenuItem>
        <MenuItem onClick={handleDelete}>🗑️ 삭제</MenuItem>
      </Menu>

      <Box sx={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
        {date}
      </Box>

      <Box
        sx={{
          marginTop: "10px",
          fontWeight: "400",
          fontSize: "14px",
        }}
      >
        {isEditing ? (
          <TextField
            fullWidth
            multiline
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            minRows={3}
            maxRows={10} // 필요한 만큼 높이 자동 조절
            sx={{
              marginBottom: 2,
            }}
            InputProps={{
              sx: {
                paddingLeft: "5px",
                paddingRight: "5px",
              },
            }}
          />
        ) : (
          commentText
        )}
      </Box>

      {isEditing && (
        <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
          <Button variant="contained" color="primary" onClick={handleSaveEdit}>
            저장
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCancelEdit}
          >
            취소
          </Button>
        </Box>
      )}
    </CustomCard>
  );
};
