import { Button, ButtonGroup, Tooltip } from "@mui/material";

export const BeforeLogin = () => {
  return (
    <Tooltip title="Open settings">
      <ButtonGroup>
        <Button
          size="small"
          href="/login"
          sx={{
            backgroundColor: "#f9d142",
            color: "black",
            border: "1px black",
            marginRight: "5px",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
              border: "2px solid #f9d142",
            },
          }}
        >
          로그인
        </Button>
        <Button
          size="small"
          href="/signUp"
          sx={{
            backgroundColor: "#f9d142",
            color: "black",
            border: "1px black",
            "&:hover": {
              backgroundColor: "#292826",
              color: "white",
              border: "2px solid #f9d142",
            },
          }}
        >
          회원가입
        </Button>
      </ButtonGroup>
    </Tooltip>
  );
};
