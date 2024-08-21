import React from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuImg1 from "../assets/MenuImg1.png";
import MenuImg2 from "../assets/MenuImg2.png";
import MenuImg3 from "../assets/MenuImg3.png";
export default function MainPage() {
  const navi = useNavigate();
  return (
    <Grid
      container
      sx={{
        zIndex: -10,
        height: "100vh",
        backgroundColor: "#f0f0f0", // 배경을 설정하여 그라데이션이 더 잘 보이도록 함
      }}
    >
      {/* 좌측 버튼 */}
      <Grid item xs={4} sx={{ overflow: "hidden" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            zIndex: 0,
            overflow: "hidden",
            height: "100%",
            fontSize: "34px",
            backgroundImage: `url(${MenuImg1})`, // 이미지 URL을 backgroundImage로 설정
            backgroundSize: "cover", // 이미지가 버튼 크기에 맞게 조정되도록 설정
            backgroundPosition: "center", // 이미지가 중앙에 위치하도록 설정
            color: "#ffffff",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease 0s",

            "&:hover": {
              transform: "scale(1.05)", // 호버 시 살짝 확대
              boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)", // 그림자 강화
              backgroundImage: `url(${MenuImg1})`,
              filter: "brightness(0.9)", // 약간 어둡게 조정
            },
          }}
          onClick={() => {
            navi("/menu1");
          }}
        >
          아카이브
        </Button>
      </Grid>

      {/* 중간 버튼 */}
      <Grid item xs={4} sx={{ overflow: "hidden" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: "100%",
            fontSize: "34px",
            color: "#ffffff",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            backgroundImage: `url(${MenuImg2})`,
            transition: "all 0.3s ease 0s",
            "&:hover": {
              transform: "scale(1.05)", // 호버 시 살짝 확대
              boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)", // 그림자 강화
            },
          }}
          onClick={() => {
            navi("/menu2");
          }}
        >
          AI도움받기
        </Button>
      </Grid>

      {/* 우측 버튼 */}
      <Grid item xs={4} sx={{ overflow: "hidden" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: "100%",
            fontSize: "34px",
            color: "black",
            fontWeight: 700,
            transition: "all 0.3s ease 0s",
            backgroundImage: `url(${MenuImg3})`,
            "&:hover": {
              transform: "scale(1.05)", // 호버 시 살짝 확대
              boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)", // 그림자 강화
            },
          }}
          onClick={() => {
            navi("/menu3");
          }}
        >
          평가받기
        </Button>
      </Grid>
    </Grid>
  );
}
