import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Avatar,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../App";

export default function LoginPage() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navi = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 처리 로직을 여기에 추가합니다.
    console.log({ Email, password });
  };

  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const handleSignUp = () => {
    navi("/main");
    localStorage.setItem("user", Email);
    setIsLogin(true);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="Email"
            label="Email"
            name="Email"
            autoComplete="Email"
            autoFocus
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              handleSignUp();
            }}
          >
            로그인
          </Button>
          <Link
            component={RouterLink}
            to="/signUp"
            style={{ display: "flex", justifyContent: "center" }}
          >
            회원가입
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
