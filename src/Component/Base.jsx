import { Box, Button } from "@mui/material";
import { useState } from "react";

import { LeftContainer } from "./LeftContainer.jsx";
import { MidContainer } from "./MidContainer.jsx";

// MUI Styles using `sx` prop
const Base = () => {
  const [isLeftExpanded, setIsLeftExpanded] = useState(true); // 접힘 상태 관리

  const handleToggleMenu = () => {
    setIsLeftExpanded(!isLeftExpanded); // 접힘 상태 반전
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        padding: "10px 10px 0px 10px",
      }}
    >
      <LeftContainer
        isExpanded={isLeftExpanded}
        handleToggleMenu={handleToggleMenu}
      />
      <MidContainer />
    </Box>
  );
};

export default Base;
