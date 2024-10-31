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
        height: "100%",
      }}
    >
      {/* Left Sidebar Container */}
      <Box
        sx={{
          width: isExpanded ? "300px" : "50px", // LeftContainer의 너비 고정
          transition: "width 0.3s ease", // 너비 변경 시 애니메이션 효과
          flexShrink: 0, // 화면이 줄어들 때 고정된 너비 유지
        }}
      >
        <LeftContainer />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          ml: isExpanded ? "none" : "50px",
          padding: "50px 40px 10px 10px",
          overflowY: "auto",
          overflow: "visible",
          mr: "10px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
