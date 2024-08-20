import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navi = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        padding: "0 50px",
      }}
    >
      {/* 좌측 버튼 */}
      <Button
        variant="contained"
        sx={{
          fontSize: "34px",
          padding: "80px 100px",
          minWidth: "150px",
        }}
        onClick={() => {
          navi("/menu1");
        }}
      >
        메뉴1
      </Button>

      {/* 중간 버튼 */}
      <Button
        variant="contained"
        sx={{
          fontSize: "34px",
          padding: "80px 100px",

          minWidth: "150px",
        }}
        onClick={() => {
          navi("/menu2");
        }}
      >
        메뉴2
      </Button>

      {/* 우측 버튼 */}
      <Button
        variant="contained"
        sx={{
          fontSize: "34px",
          padding: "80px 100px",

          minWidth: "150px",
        }}
        onClick={() => {
          navi("/menu3");
        }}
      >
        메뉴3
      </Button>
    </Box>
  );
}
