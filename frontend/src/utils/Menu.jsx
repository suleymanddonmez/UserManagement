import React from "react";

// metarial-icons
import HomeIcon from "@mui/icons-material/Home";
import RecentActorsIcon from '@mui/icons-material/RecentActors';

const Menu = [
  {
    id: "home",
    iconName: "Home",
    text: "Anasayfa",
    type: "link",
    link: "/",
  },
  "divider",
  {
    id: "user-management",
    iconName: "RecentActors",
    text: "Kullanıcı Yönetimi",
    type: "link",
    link: "/user-management",
  },
  "divider",
  {
    id: "login",
    iconName: "RecentActors",
    text: "Giriş Yap",
    type: "link",
    link: "/login",
  },
];

export default Menu;
