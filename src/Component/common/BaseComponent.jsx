import { Box } from "@mui/material";
import { LeftContainer } from "../LeftContainer/LeftContainer.jsx";
import { useRecoilState } from "recoil";
import { isExpandValue } from "../../Recoil.jsx";

export const BaseComponent = ({ children }) => {
  const [isExpanded] = useRecoilState(isExpandValue);

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100% - 64px)", // 전체 뷰포트 높이를 기준으로 설정
        overflow: "hidden", // 불필요한 스크롤 방지
      }}
    >
      {/* Left Sidebar Container */}
      <Box
        sx={{
          width: isExpanded ? "300px" : "50px", // LeftContainer의 너비 고정
          transition: "width 0.3s ease", // 너비 변경 시 애니메이션 효과
          flexShrink: 0, // 화면이 줄어들 때 고정된 너비 유지
          height: "100%", // LeftContainer의 높이를 100%로 설정
        }}
      >
        <LeftContainer />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          ml: isExpanded ? "none" : "50px",
          padding: "50px 40px 0px 10px",
          overflowY: "auto", // 넘칠 경우에만 스크롤 표시
          height: "100%", // 전체 뷰포트 높이를 기준으로 설정
          boxSizing: "border-box", // 패딩과 함께 레이아웃이 유지되도록 설정
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
