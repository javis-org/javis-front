import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isExpandValue, loginAtom } from "../../Recoil.jsx";
import Javis from "../../assets/Javis.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen.js";
import MenuIcon from "@mui/icons-material/Menu.js";

export default function Header() {
  const [isExpanded, setIsExpanded] = useRecoilState(isExpandValue);
  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const navi = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [, setAnchorEl] = useState(null);
  const pages = ["내 자소서", "내 공고"];
  const user = localStorage.getItem("user");

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLogin(false);
    handleClose();
    navi("/");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [setIsLogin]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          zIndex: 1300,
          // background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // 배경 그라데이션 추가
          background: "black",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "64px", // 기본 Toolbar 높이 설정
            height: "64px", // Toolbar의 고정된 높이
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button sx={{ marginLeft: "auto" }} onClick={handleExpandToggle}>
            {isExpanded ? <MenuOpenIcon /> : <MenuIcon />}
          </Button>
          <Box
            onClick={() => {
              isLogin ? navi("/main") : navi("/");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={Javis}
              alt="로고"
              style={{
                height: "40px", // 이미지 높이 고정
                width: "auto", // 가로 크기 비율 유지
                marginRight: "10px",
              }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {isLogin && <>{/* 메뉴 버튼 추가 가능 */}</>}
          </Box>

          {isLogin && (
            <>
              <Typography sx={{ color: "#ffffff", marginRight: "20px" }}>
                {user}님
              </Typography>
              <Button
                onClick={handleLogout}
                sx={{
                  color: "white",
                  backgroundColor: "#ff1744",
                  "&:hover": {
                    backgroundColor: "#f01440",
                    transform: "translateY(-3px)", // 호버 시 살짝 위로 올라가는 애니메이션
                  },
                }}
              >
                로그아웃
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
