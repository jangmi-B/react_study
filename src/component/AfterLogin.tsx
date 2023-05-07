import { Avatar, IconButton, Menu, MenuItem, SvgIcon, Tooltip, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Auth, AuthContext, AuthContextType } from "./UserContextProvider";
import { useNavigate } from "react-router-dom";

export const AfterLogIn = () => {
  const userContext = useContext<AuthContextType>(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [id, setId] = useState("");
  const [islogIn, setIslogIn] = useState(false);
  const settings = ["MyPage", "Logout"];
  const movePage = useNavigate();

  useEffect(() => {
    setIslogIn(setAuthUserId());
  }, []);

  const setAuthUserId = () => {
    let result = false;
    const authStore = localStorage.getItem("isAuthenticated");
    let authUser = {} as Auth;

    if (authStore) {
      authUser = JSON.parse(authStore) as Auth;
      setId(authUser.id);
      result = true;
    }
    return result;
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const goLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      userContext.logout();
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white" }}>
          <Typography sx={{ fontSize: "1rem", paddingRight: "10px" }}>
            {islogIn ? `${id}님 안녕하세요 :)` : ""}
          </Typography>
          <Avatar src="/static/images/avatar/2.jpg" sx={{ marginLeft: "5px" }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            // onClick={setting !== "Logout" ? handleCloseUserMenu : goLogout}
            onClick={
              setting === "Logout"
                ? goLogout
                : setting === "MyPage"
                ? () => movePage("/myPage")
                : handleCloseUserMenu
            }
            sx={{ zIndex: "9999" }}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
