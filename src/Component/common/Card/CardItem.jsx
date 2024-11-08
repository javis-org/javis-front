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
  title = "자신의 가치관 또는 인생관에 영향을 미친 경험을 소개하고, 이를 통해 배우거나 느낀 점을 구체적으로 기술하시오.",
  text = "금융결제원이 제공하는 서비스는 매우 다양하며, 저는 개인적으로 금융공동망과 인터넷지로 서비스를 이용해 본 경험이 있습니다.",
  date = "24.10.03",
  tags = [
    { tag: "최적화", type: "competency" },
    { tag: "DB", type: "competency" },
    { tag: "웹 접근성 준수", type: "competency" },
  ],
  mode,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const iconButtonRef = useRef(null);

  const navi = useNavigate();

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(iconButtonRef.current);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    console.log("삭제됨");
    setAnchorEl(null);
  };

  const handleClickCard = (id) => {
    navi(`editor/${id}`);
  };

  const TooltipText = () => (
    <Box>
      <Typography variant="body2">시간: {date}</Typography>
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

  const truncatedText =
    text.length > 200 ? text.substring(0, 50) + "..." : text;

  const [status, setStatus] = useState("지원 준비");

  // 상태 변경 핸들러
  const handleStatusChange = (event) => {
    event.stopPropagation(); // 이벤트 전파 중지
    setStatus(event.target.value);
  };
  const supportStatus = useRecoilValue(generateSupportStatuses);
  return (
    <>
      <CustomCard
        onClick={() => {
          handleClickCard(1);
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
        {mode && (
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
            {mode === "searchState" ? "내 자소서 / 경험정리" : "서류마감 D-DAY"}
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
            display: !mode && "none",
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
          <MenuItem onClick={handleClose}>🗑️삭제</MenuItem>
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
                marginTop: mode ? "35px" : "none",
              }}
            >
              {date}
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
