import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";

export const InfoTitle = ({ title, state = false, setState , componentId = 0 , handleRemoveAward}) => {
  return (
    <Box
      sx={{
        borderBottom: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Title과 Button을 양쪽으로 배치
      }}
    >
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <div>
        <Button
          sx={{
            position: "relative",
            right: 0,
            color: "white", // 텍스트 색상
            background: "black",
            "&:hover": {
              backgroundColor: "gray", // 호버 시 연한 회색 배경
            },
          }}
          variant="outlined"
          onClick={setState}
          >
          {state ? "수정" : "완료"}
        </Button>

        {/* 수상과 동아리의 경우 추가하기를 눌렀을경우 2번쨰칸부터는 제거하기버튼 생성 */}
        {componentId >= 1 ? <Button
          sx={{
            position: "relative",
            right: 0,
            left: 3,
            color: "white", // 텍스트 색상
            background: "black",
            "&:hover": {
              backgroundColor: "gray", // 호버 시 연한 회색 배경
            },
          }}
          onClick={handleRemoveAward}
          variant="outlined"
          >제거</Button> : <></>
        }
      </div>
    </Box>
  );
};
