import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../Recoil.jsx";

export default function Header() {
  const navi = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [, setAnchorEl] = useState(null);
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
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // 배경 그라데이션 추가
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            onClick={() => {
              isLogin ? navi("/main") : navi("/");
            }}
            style={{ cursor: "pointer", marginRight: "20px" }}
            sx={{
              color: "#ffffff",
              "&:hover": {
                color: "#ffcc00", // 호버 시 색상 변경
              },
            }}
          >
            자비스
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {isLogin && (
              <>
                {/*<Button*/}
                {/*  key="menu1"*/}
                {/*  sx={{*/}
                {/*    my: 2,*/}
                {/*    color: "white",*/}
                {/*    display: "block",*/}
                {/*    transition: "all 0.3s ease 0s",*/}
                {/*    "&:hover": {*/}
                {/*      color: "#ffcc00", // 호버 시 색상 변경*/}
                {/*      transform: "scale(1.05)", // 살짝 확대되는 애니메이션*/}
                {/*    },*/}
                {/*  }}*/}
                {/*  onClick={() => {*/}
                {/*    navi(`/menu1`);*/}
                {/*  }}*/}
                {/*>*/}
                {/*  {" "}*/}
                {/*  아카이브*/}
                {/*</Button>*/}
              </>
            )}
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
