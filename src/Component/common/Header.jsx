import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../App";
const pages = ["menu1", "menu2", "menu3"];
export default function Header() {
  const navi = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(isLogin);
  const user = localStorage.getItem("user");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            onClick={() => {
              isLogin ? navi("/main") : navi("/");
            }}
            style={{ cursor: "pointer", marginRight: "20px" }}
          >
            자비스
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {isLogin &&
              pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={() => {
                    navi(`/${page}`);
                  }}
                >
                  {page}
                </Button>
              ))}
          </Box>
          {isLogin && (
            <>
              <Typography>{user}님</Typography>
              <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
