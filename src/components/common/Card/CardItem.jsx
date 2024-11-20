import React, { useRef, useState } from "react";
import {
  Box,
  Card,
  Chip,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { generateSupportStatuses } from "../../../Recoil.jsx";
import { client } from "../../../api.js";
import { KoreanDateTime } from "../../util/KoreanDateTime.js";

const CustomCard = styled(Card)`
  min-height: 80px;
  padding: 20px;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    outline: 2px solid black;
  }
`;
export const CardItem = ({
  title,
  text,
  date,
  tags,
  mode,
  id,
  handleUpdate,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const iconButtonRef = useRef(null);
  const navi = useNavigate();

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(iconButtonRef.current);
  };

  const cardDelete = async (event) => {
    event.stopPropagation();
    setAnchorEl(null);
    try {
      await client.delete(`/Card/${id}`);
      handleUpdate();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleClickCard = (id) => {
    navi(`/statement/editor/${id}`);
  };

  const TooltipText = () => (
    <Box>
      <Typography variant="body2">시간: {KoreanDateTime(date)}</Typography>
      <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
        {title}
      </Typography>
      <Typography variant="body2">
        태그: {tags.map((tagObj) => tagObj.tag).join(", ")}
      </Typography>
    </Box>
  );

  const truncatedTitle =
    title.length > 20 ? title.substring(0, 20) + "..." : title;

  //태그 전부 제거하기
  const htmlString = text;
  const tempDiv = document.createElement("div"); // 임시 div 생성
  tempDiv.innerHTML = htmlString; // HTML 문자열 삽입
  const textOnly = tempDiv.textContent || tempDiv.innerText; // 태그를 제거한 텍스트만 추출

  const truncatedText =
    textOnly.length > 200 ? text.substring(0, 50) + "..." : textOnly;

  const [status, setStatus] = useState("지원 준비");

  // 상태 변경 핸들러
  const handleStatusChange = (event) => {
    event.stopPropagation(); // 이벤트 전파 중지
    setStatus(event.target.value);
  };
  const supportStatus = useRecoilValue(generateSupportStatuses);
  console.log("mode체킈:", mode);
  return (
    <>
      <CustomCard
        onClick={() => {
          handleClickCard(id);
        }}
        sx={{
          minHeight: "80px",
          padding: "20px",
          cursor: "pointer",
          borderRadius: "17px",
          position: "relative",
        }}
      >
        {/* 상단에 검정색 배경과 텍스트 배치 */}
        {mode === "search" && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "30px", // 텍스트가 잘 보이도록 높이 설정
              backgroundColor: "black",
              borderTopLeftRadius: "17px",
              borderTopRightRadius: "17px",
              display: mode ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "5px 0",
            }}
          >
            {mode === "search" ? "내 자소서 / 경험정리" : "서류마감 D-DAY"}
          </Box>
        )}

        {/* Dots Menu 아이콘 추가 */}
        <IconButton
          ref={iconButtonRef}
          onClick={handleClick}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            display: mode === "search" && "none",
          }}
        >
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
          <MenuItem onClick={cardDelete}>🗑️삭제</MenuItem>
        </Menu>

        {mode === "searchRecruit" ? (
          <Box sx={{ marginTop: "35px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* 좌측에 Chip 배치 */}
              <Chip
                label="1차 면접 D-2"
                color="primary"
                sx={{
                  backgroundColor: "#000", // Black background for the chip
                  color: "#00FF7F", // Light green text color
                  fontWeight: "bold",
                }}
              />

              {/* 우측에 Select 배치 */}
              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  variant="outlined"
                  value={status}
                  onChange={handleStatusChange}
                  onClick={(event) => event.stopPropagation()} // Select 클릭 시 전파 방지
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    minWidth: "120px", // Select 컴포넌트의 최소 너비 설정
                  }}
                >
                  {supportStatus.map((status, index) => (
                    <MenuItem value={status} key={index}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* 공고 제목을 별도의 줄로 배치 */}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              공고 제목
            </Typography>
          </Box>
        ) : (
          <Tooltip title={<TooltipText />}>
            <Box
              sx={{
                fontSize: "12px",
                color: "gray",
                marginTop: mode === "search" ? "35px" : "none",
              }}
            >
              {KoreanDateTime(date)}
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                fontWeight: "700",
                fontSize: "18px",
                flexWrap: "nowrap",
                display: "flex",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {truncatedTitle}
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                fontWeight: "400",
                fontSize: "14px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {truncatedText}
            </Box>
            {/* 태그 한 줄로 */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                overflow: "hidden",
                whiteSpace: "nowrap",
                marginTop: "10px",
              }}
            >
              {tags.map((tagObj, index) => (
                <Chip
                  key={index}
                  label={tagObj.tag}
                  sx={{
                    backgroundColor:
                      tagObj.type === "competency" ? "#e3f2ff" : "#f6e2ff",
                    color: tagObj.type === "competency" ? "#57788c" : "#b659b9",
                    marginRight: "5px",
                    marginBottom: "10px",
                  }}
                />
              ))}
            </Box>
          </Tooltip>
        )}
      </CustomCard>
    </>
  );
};
