import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorageController } from "../commonClass/LocalStorage";

export type UserInfo = {
  idx: string;
  name: string;
  id: string;
  email: string;
  password: string;
};

const theme = createTheme();

export default function SignUp() {
  // useState는 값이 바뀌면 다시 렌더링된다.. 그래서 값이 할당이 안됐음..
  // https://velog.io/@jjunyjjuny/React-useState%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C
  // 에러 메시지를 표시하거나 체크박스의 상태를 관리하는 데 사용되는 변수들
  const [nameError, setNameError] = useState("");
  const [idError, setIdError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [pwdConfirmErr, setPwdConfirmErr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // useRef는 저장공간 또는 DOM요소에 접근하기 위해 사용되는 React Hook이다
  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const pwdConfirmRef = useRef<HTMLInputElement>(null);

  // useNavigate는 양식이 제출되거나 특정 event가 발생할 때,  url을 조작할 수 있는 interface를 제공합니다.
  const movePage = useNavigate();

  // 약관동의 체크박스
  const changeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  // 아이디 중복확인
  const isDuplicated = (id: string) => {
    let result = false;
    // 로컬에서 가져와서 아이디를 비교한다.
    const localUserInfo: UserInfo[] = LocalStorageController.getItem("userInfo");

    localUserInfo.forEach((element: UserInfo) => {
      if (element.id === id) {
        result = true;
      }
    });
    return result;
  };

  // 유효성검사
  const isValid = () => {
    const EmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const nameValue = nameRef.current?.value || "";
    const idValue = idRef.current?.value || "";
    const emailValue = emailRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";
    const pwdConfirmValue = pwdConfirmRef.current?.value || "";
    const emailIsValid = EmailRegex.test(
      emailValue !== undefined && emailValue !== null ? emailValue : ""
    );
    let isValid = true;

    // 다시 위 요소를 지울때 에러메세지 중복 방지
    setNameError("");
    setIdError("");
    setEmailError("");
    setPwdError("");
    setPwdConfirmErr("");

    if (!nameValue || nameValue === "error") {
      setNameError("error");
      setErrorMsg("이름을 입력해주세요");
      nameRef.current?.focus();
      return false;
    }

    if (!idValue || idValue === "error") {
      setIdError("error");
      setErrorMsg("ID를 입력해주세요");
      idRef.current?.focus();
      return false;
    }

    if (isDuplicated(idValue)) {
      setIdError("error");
      setErrorMsg("중복된 아이디입니다. 다른 아이디를 입력해주세요");
      idRef.current?.focus();
      return false;
    }

    if (!emailValue) {
      setEmailError("error");
      setErrorMsg("이메일을 입력해주세요");
      emailRef.current?.focus();
      return false;
    } else {
      if (!emailIsValid) {
        setEmailError("error");
        setErrorMsg("올바르지 않은 이메일 형식입니다.");
        return false;
      }
    }

    if (!passwordValue) {
      setPwdError("error");
      setErrorMsg("비밀번호를 입력해주세요");
      passwordRef.current?.focus();
      return false;
    }

    if (!pwdConfirmValue) {
      setPwdConfirmErr("error");
      setErrorMsg("비밀번호를 다시한번 입력해주세요");
      pwdConfirmRef.current?.focus();
      return false;
    }

    if (passwordValue !== pwdConfirmValue) {
      setPwdConfirmErr("error");
      setErrorMsg("비밀번호가 일치하지 않습니다.");
      pwdConfirmRef.current?.focus();
      return false;
    }

    if (!isChecked) {
      alert("약관에 동의해주세요");
      return false;
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const localUserInfo: UserInfo[] = LocalStorageController.getItem("userInfo");

    const validation = isValid();
    if (validation) {
      const user: UserInfo = {
        idx: String(localUserInfo.length + 1),
        name: nameRef.current?.value || "",
        id: idRef.current?.value || "",
        email: emailRef.current?.value || "",
        password: passwordRef.current?.value || "",
      };

      localUserInfo.push(user);
      LocalStorageController.saveItem("userInfo", localUserInfo);

      alert("회원가입이 완료되었습니다. 로그인페이지로 이동합니다.");
      movePage("/login");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ marginTop: "10%", fontFamily: "OTWelcomeRA" }}
          >
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  error={nameError === "error" ? true : false}
                  helperText={nameError === "error" ? errorMsg : ""}
                  autoComplete="your-name"
                  // sx={{ paddingBottom: "16px" }}
                  inputRef={nameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={idError === "error" ? true : false}
                  helperText={idError === "error" ? errorMsg : ""}
                  id="id"
                  label="id"
                  name="id"
                  autoComplete="id"
                  // sx={{ paddingBottom: "16px" }}
                  inputRef={idRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={emailError === "error" ? true : false}
                  helperText={emailError === "error" ? errorMsg : ""}
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={pwdError === "error" ? true : false}
                  helperText={pwdError === "error" ? errorMsg : ""}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // sx={{ paddingBottom: "16px" }}
                  inputRef={passwordRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={pwdConfirmErr === "error" ? true : false}
                  helperText={pwdConfirmErr === "error" ? errorMsg : ""}
                  name="passwordConfirm"
                  label="passwordConfirm"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="passwordConfirm"
                  // sx={{ paddingBottom: "16px" }}
                  inputRef={pwdConfirmRef}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" onChange={changeCheckbox} />
                  }
                  label={
                    <Typography variant="body1" sx={{ fontFamily: "OTWelcomeRA" }}>
                      X1서비스 약관 동의
                    </Typography>
                  }
                  sx={{ float: "left" }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#f9d142",
                color: "#292826",
                fontFamily: "OTWelcomeRA",
                "&:hover": {
                  backgroundColor: "#f9d142",
                  color: "#292826",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                  // border: "2px solid #f9d142",
                },
              }}
            >
              회원가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" sx={{ fontFamily: "OTWelcomeRA" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
