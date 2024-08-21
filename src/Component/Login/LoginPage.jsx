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
import { client } from "../../api";

export default function LoginPage() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navi = useNavigate();

  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const handleSignUp = () => {
    const loginData = { email: Email, password: password };
    const fetchLogin = async () => {
      try {
        const res = await client.post("/members/login", loginData);
        console.log(res.data);
        localStorage.setItem("memberId", res.data);
        setIsLogin(true);
        localStorage.setItem("user", Email);
        navi("/main");
      } catch (error) {
        console.log(error);
        alert("로그인에 실패하였습니다.");
      }
    };

    fetchLogin();
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
        <Box noValidate sx={{ mt: 1 }}>
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
