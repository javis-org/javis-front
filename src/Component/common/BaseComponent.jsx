import { Box } from "@mui/material";
import { LeftContainer } from "../LeftContainer/LeftContainer.jsx";
import { useRecoilState } from "recoil";
import { isExpandValue } from "../../Recoil.jsx";

export const BaseComponent = ({ children }) => {
  const [isExpanded] = useRecoilState(isExpandValue); // 접힘 상태 관리

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        // padding: "10px 10px 0px 10px",
      }}
    >
      <LeftContainer isExpanded={isExpanded} />
      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          padding: " 50px 40px 10px 10px",
          paddingLeft: isExpanded ? "10px" : "50px", // 삼항 연산자 올바르게 사용
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
