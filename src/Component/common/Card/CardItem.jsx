import React, { useRef, useState } from "react";
import {
  Box,
  Card,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

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
    { tag: "API", type: "competency" },
    { tag: "코드 품질", type: "competency" },
    { tag: "설계", type: "competency" },
    { tag: "배포", type: "competency" },
    { tag: "생산성", type: "competency" },
    { tag: "보안", type: "competency" },
    { tag: "테스트", type: "competency" },
    { tag: "디자인시스템", type: "competency" },
    { tag: "UI/UX", type: "competency" },
    { tag: "도메인", type: "competency" },
    { tag: "이해도", type: "competency" },
    { tag: "자동화", type: "competency" },
    { tag: "기타", type: "competency" },
    { tag: "라이브러리", type: "competency" },
    { tag: "리더십", type: "personal" },
    { tag: "성장", type: "personal" },
    { tag: "일정", type: "personal" },
    { tag: "멘탈 관리", type: "personal" },
    { tag: "실패 경험", type: "personal" },
    { tag: "도전", type: "personal" },
    { tag: "갈등경험", type: "personal" },
    { tag: "문제해결", type: "personal" },
    { tag: "분석력", type: "personal" },
    { tag: "성공 경험", type: "personal" },
    { tag: "책임감", type: "personal" },
    { tag: "커리어 계획", type: "personal" },
    { tag: "창의성", type: "personal" },
    { tag: "소통", type: "personal" },
    { tag: "협업 능력", type: "personal" },
  ],
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const iconButtonRef = useRef(null); // ref 사용

  const navi = useNavigate();

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(iconButtonRef.current); // ref에서 anchorEl 설정
  };

  const handleClose = (event) => {
    event.stopPropagation(); // 메뉴 클릭 시 이벤트 전파 방지
    console.log("삭제됨");
    setAnchorEl(null); // 메뉴를 닫으면 앵커를 null로 설정
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

  return (
    <Tooltip title={<TooltipText />}>
      <CustomCard
        onClick={() => {
          handleClickCard(1);
        }}
        sx={{
          minHeight: "80px",
          padding: "20px",
          cursor: "pointer",
          borderRadius: "17px",
          position: "relative", // position을 relative로 변경
        }}
      >
        <Box sx={{ fontSize: "12px", color: "gray" }}>{date}</Box>

        {/* Dots Menu 아이콘 추가 */}
        <IconButton
          ref={iconButtonRef} // ref 설정
          onClick={handleClick}
          sx={{ position: "absolute", top: 10, right: 10 }} // IconButton을 오른쪽 위에 고정
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl} // 메뉴의 앵커를 아이콘 버튼으로 설정
          open={Boolean(anchorEl)}
          onClose={handleClose} // 메뉴 외부 클릭 시 닫히도록 설정
          anchorOrigin={{
            vertical: "bottom", // 버튼 바로 아래에 메뉴가 표시되도록 설정
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top", // 메뉴가 버튼 아래에서부터 변환되도록 설정
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>🗑️삭제</MenuItem>
        </Menu>

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
      </CustomCard>
    </Tooltip>
  );
};
