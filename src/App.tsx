import { Box, Container } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import { MainPage } from "./component/MainPage";
import { Header } from "./component/Header";
import { UserContextProvider } from "./component/UserContextProvider";
import SignUp from "./component/SignUp";
import { Footer } from "./component/Footer";
import MyPage from "./component/MyPage";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl" sx={{ padding: "0px" }}>
        {/*  useContext 전역으로 상태를 관리 할 수 있게 된다. */}
        <UserContextProvider>
          {/* 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주기 위해 router사용 */}
          {/* BrowserRouter :HTML5를 지원하는 브라우저의 주소를 감지 한다. */}
          <BrowserRouter>
            <Header />
            <Box sx={{ minheight: "100vh", marginTop: "62px" }}>
              <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signUp" element={<SignUp />}></Route>
                <Route path="/myPage" element={<MyPage />}></Route>
              </Routes>
            </Box>
            <Footer />
          </BrowserRouter>
        </UserContextProvider>
      </Container>
    </div>
  );
}

export default App;
