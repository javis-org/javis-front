import { Box, Button } from "@mui/material";
import { useState } from "react";

import { LeftContainer } from "./LeftContainer.jsx";
import { MidContainer } from "./MidContainer.jsx";
import { useRecoilState } from "recoil";
import { isExpandValue } from "../Recoil.jsx";

// MUI Styles using `sx` prop
const Base = () => {
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
      <MidContainer />
    </Box>
  );
};

export default Base;
