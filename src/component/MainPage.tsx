import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { MainSlider } from "./MainSlider";
import styles from "../static/css/mainPage.module.css";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import CampaignIcon from "@mui/icons-material/Campaign";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export function MainPage() {
  return (
    <Grid container direction="column">
      {/* Main Content */}
      <Grid item container>
        <Grid item xs={12}>
          <div style={{ height: "40vh", background: "" }}>
            <MainSlider />
          </div>
        </Grid>

        <Grid item xs={12} className={styles.middleContainer}>
          <div className={styles.listDiv}>
            <p>
              엑스원은 <br />
              <span className={styles.spanBold}>처음</span>이신가요?
            </p>
          </div>
          <ul className={styles.listUl}>
            <li className={styles.listItem + " " + styles.listItemHover}>
              <ThumbUpOffAltIcon sx={{ marginRight: "5px" }} />
              엑스원 소개
            </li>
            <li className={styles.listItem}>
              {" "}
              <CampaignIcon sx={{ marginRight: "5px" }} />
              공지사항
            </li>
            <li className={styles.listItem}>
              <InsertCommentIcon sx={{ marginRight: "5px" }} />
              카카오톡 무료신청
            </li>
            <li className={styles.listItem}>
              <VolunteerActivismIcon sx={{ marginRight: "5px" }} />
              신규혜택
            </li>
          </ul>
        </Grid>

        <Grid item container spacing={2} sx={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "45vh", boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)" }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: "30vh", objectFit: "contain" }}
                  component="img"
                  height="140"
                  image="https://img.x1.co.kr/x1/expert_img/251/main_proimg_251.png"
                  alt="최프로"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    최프로
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    투자는 가치와 타이밍이다! 투자는 가치와 타이밍이다! 투자는 가치와 타이밍이다!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "45vh", boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)" }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: "30vh", objectFit: "contain" }}
                  component="img"
                  height="140"
                  image="https://img.x1.co.kr/x1/expert_img/1532/main_proimg_1532.png"
                  alt="김광재 대표"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    김광재 대표
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    키워드림 고객수익률 BEST전문가!!!!!!!!!!!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "45vh", boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)" }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: "30vh", objectFit: "contain" }}
                  component="img"
                  height="140"
                  image="https://img.x1.co.kr/x1/expert_img/1530/main_proimg_1530.png"
                  alt="김원중 대표"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    김원중 대표
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Korean Capitalist의 '5억' 돈나무(복주머니) 키움! Project!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
