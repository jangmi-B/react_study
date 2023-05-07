import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { UserInfo } from "./SignUp";
import { Auth } from "./UserContextProvider";
import { LocalStorageController } from "../commonClass/LocalStorage";

const theme = createTheme();

export default function MyPage() {
  const [storeIndex, setStoreIndex] = useState(0);
  const [idx, setIdx] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const localUserInfo: UserInfo[] = LocalStorageController.getItem("userInfo");
  const authStore = localStorage.getItem("isAuthenticated");

  // useEffect : 컴포넌트가 리렌더링 될때마다 특정작업을 수행하도록 함. 빈 배열을 넣으면 처음렌더링될때 한번만 실행
  useEffect(() => {
    // 로컬 스토리지에서 사용자 정보 가져오기
    if (authStore === null) {
      window.location.replace("/login");
    }

    let curId = "";
    if (authStore !== null) {
      const loginUser: Auth = JSON.parse(authStore);
      curId = loginUser.id;
    }

    localUserInfo.forEach((element: UserInfo, index) => {
      if (element.id === curId) {
        // input값 변경을 위해 저장
        setStoreIndex(index);
        setIdx(element.idx);
        setId(element.id);
        setName(element.name);
        setEmail(element.email);
        setPassword(element.password);
      }
    });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (window.confirm("변경내용을 저장하시겠습니까?")) {
      const userInfo: UserInfo = {
        idx: idx,
        id: id,
        name: name,
        email: email,
        password: password,
      };

      localUserInfo.splice(storeIndex, 1);
      localUserInfo.push(userInfo);
      LocalStorageController.saveItem("userInfo", localUserInfo);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          //   borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4, marginTop: "7%" }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h3" variant="h5" align="center" sx={{ fontFamily: "OTWelcomeRA" }}>
            개인정보확인 및 수정
          </Typography>
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  value={id}
                  InputProps={{
                    readOnly: true,
                  }}
                  id="id"
                  name="id"
                  label="id"
                  fullWidth
                  autoComplete="id"
                  variant="standard"
                  sx={{ backgroundColor: "rgb(245, 243, 243)" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={email}
                  label="email"
                  id="email"
                  name="email"
                  fullWidth
                  autoComplete="email"
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  required
                  id="password"
                  name="password"
                  label="password"
                  type="password"
                  fullWidth
                  autoComplete="password"
                  variant="standard"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {/* 폼 제출 버튼 */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  fullWidth
                  sx={{
                    marginTop: "5%",
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
                  수정하기
                </Button>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
