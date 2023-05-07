import { Container, Grid, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import PrintIcon from "@mui/icons-material/Print";
import Link from "@mui/material/Link";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        My little cute Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "light", marginTop: "2rem" }}>
      <hr />
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 4 }}>
              <img src="https://img.x1.co.kr/emoney/common/logo_emoney.png" />
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontFamily: "OTWelcomeRA" }}>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 4, fontFamily: "OTWelcomeRA" }}>
              Menu
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <a
                href="#!"
                style={{ textDecoration: "none", color: "inherit", fontFamily: "OTWelcomeRA" }}
              >
                회사소개
              </a>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <a
                href="#!"
                style={{ textDecoration: "none", color: "inherit", fontFamily: "OTWelcomeRA" }}
              >
                이용약관
              </a>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <a
                href="#!"
                style={{ textDecoration: "none", color: "inherit", fontFamily: "OTWelcomeRA" }}
              >
                개인정보처리방침
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 4, fontFamily: "OTWelcomeRA" }}>
              Contact
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, display: "flex", alignItems: "center", fontFamily: "OTWelcomeRA" }}
            >
              <HomeIcon sx={{ marginRight: "10px" }} />
              서울특별시 마포구 독막로 311, 재화스퀘어 12층 eMoney (염리동)
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, display: "flex", alignItems: "center", fontFamily: "OTWelcomeRA" }}
            >
              <CallIcon sx={{ marginRight: "10px" }} />
              대표전화 1644-6977
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, display: "flex", alignItems: "center", fontFamily: "OTWelcomeRA" }}
            >
              <PrintIcon sx={{ marginRight: "10px" }} />
              FAX 02-780-5017
            </Typography>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </footer>
  );
};
