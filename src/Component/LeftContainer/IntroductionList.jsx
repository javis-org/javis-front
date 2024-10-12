import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { memo, useState } from "react";
import { IntroductionItem } from "./IntroductionItem.jsx";

const IntroductionList = ({ item, index }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const open = Boolean(anchorEl);
  const [isModiTitle] = useState(!!item.isModified);
  console.log(isModiTitle);
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

  const handleAccordionClick = (event) => {
    event.stopPropagation();
  };

  const handleChangeName = (event) => {
    event.stopPropagation();
  };

  const handleAddItem = () => {
    setIsAdd(true);
  };

  return (
    <>
      <Card
        sx={{
          borderRadius: "10px",
          boxShadow: "none",
          backgroundColor: "#f7f6fa",
        }}
      >
        <CardContent sx={{ padding: "0px" }}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{ flexDirection: "row-reverse" }}
              onClick={handleAccordionClick}
            >
              <Typography variant="body1" sx={{ mr: 1 }}>
                📁
              </Typography>
              <Typography variant="body1">{item.title}</Typography>
              <MoreVertIcon
                sx={{ ml: "auto" }}
                onClick={(event) => handleMoreVertClick(event, index)}
              />
              <Menu
                anchorEl={anchorEl}
                open={open && currentIndex === index}
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
            </AccordionSummary>
            <Divider />

            <IntroductionItem section={item} />

            {isAdd && (
              <Box
                sx={{
                  padding: "5px",
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextField
                  placeholder="질문을 입력하세요"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  autoFocus={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{
                          fontWeight: "bold", // 글씨를 진하게
                          color: "#000", // 검정색으로 설정 (필요에 따라 색상 조정)
                        }}
                      >
                        📜
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "40px", // 높이를 40px로 설정
                      fontSize: "14px", // 폰트 크기
                      padding: "0 10px", // 텍스트 필드 내부 패딩 조
                    },
                  }}
                />
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                mb: 2,
              }}
            >
              <Button
                variant="text"
                sx={{
                  border: "1px dashed #c0c0c0",
                  borderRadius: "8px",
                  width: "96%",
                  background: "#f6f6f9",
                  textTransform: "none",
                }}
                onClick={handleAddItem}
              >
                + 문항 추가
              </Button>
            </Box>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
};
// React.memo로 IntroductionList 컴포넌트를 최적화
export default memo(IntroductionList);
