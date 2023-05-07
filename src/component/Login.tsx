import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import { AuthContext, AuthContextType } from "./UserContextProvider";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "./SignUp";
import { useRef } from "react";
import { LocalStorageController } from "../commonClass/LocalStorage";

// 로컬에 로그인 정보가 저장되어 있는지 확인
const isAuthUser = (id: string, pwd: string) => {
  let result = false;
  const localUserInfo: UserInfo[] = LocalStorageController.getItem("userInfo");

  localUserInfo.forEach((element: UserInfo) => {
    if (element.id === id && element.password === pwd) {
      result = true;
    }
  });
  return result;
};

const theme = createTheme();

export default function Login() {
  const userContext = useContext<AuthContextType>(AuthContext);
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [error, setError] = useState<String>("");
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const movePage = useNavigate();
  function gohome() {
    movePage("/");
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputId = idRef.current?.value;
    const inputPwd = passwordRef.current?.value;

    if (!inputId) {
      setId("error");
      setError("아이디를 입력해주세요");
      idRef.current?.focus();
      return;
    } else {
      setId(inputId);
      setError("");
    }

    if (!inputPwd) {
      setPwd("error");
      setError("비밀번호를 입력해주세요");
      passwordRef.current?.focus();
      return;
    } else {
      setId(inputPwd);
      setError("");
    }

    // 로컬에 로그인정보가 저장되어 있으면 로그인처리하고 메인화면으로 이동
    if (isAuthUser(inputId, inputPwd)) {
      userContext.login(inputId);
      gohome();
    } else {
      alert("아이디또는 비밀번호를 다시 확인해주세요.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ marginTop: "7%" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography
            component="h1"
            variant="h5"
            sx={{ marginTop: "15%", fontFamily: "OTWelcomeRA" }}
          >
            명품투자의 멘토 <br /> X1(엑스원)에 오신것을 환영합니다.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="id"
              name="id"
              autoComplete="id"
              autoFocus
              // onChange={(event) => setId(event.target.value)}
              error={id === "error" ? true : false}
              helperText={id === "error" ? error : ""}
              inputRef={idRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={pwd === "error" ? true : false}
              helperText={pwd === "error" ? error : ""}
              inputRef={passwordRef}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#f9d142",
                color: "#292826",
                "&:hover": {
                  backgroundColor: "#f9d142",
                  color: "#292826",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                  // border: "2px solid #f9d142",
                },
              }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2" sx={{ fontFamily: "OTWelcomeRA" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
