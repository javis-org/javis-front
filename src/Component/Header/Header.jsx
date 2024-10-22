import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isExpandValue, loginAtom } from "../../Recoil.jsx";
import Javis from "../../assets/Javis.png";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const pages = [" 내정보", "내 자소서", "내 공고"];
const url = ["info", "statement", "recruits-page"];
export default function Header() {
  const [isExpanded, setIsExpanded] = useRecoilState(isExpandValue);
  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };
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
    <Box sx={{ flexGrow: 1 }} style={{ zIndex: "100" }}>
      <AppBar
        position="static"
        sx={{
          zIndex: 1300,
          background: "black",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "64px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleExpandToggle}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={Javis}
              alt="로고"
              style={{
                height: "40px",
                width: "auto",
                marginRight: "10px",
              }}
              onClick={() => {
                isLogin ? navi("/main") : navi("/");
              }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={() => navi(`${url[index]}`)}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {isLogin && <>{/* 메뉴 버튼 추가 가능 */}</>}
          </Box>

          <Box>
            <IconButton>
              <SearchIcon sx={{ color: "white" }} />
            </IconButton>
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
                    transform: "translateY(-3px)",
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
