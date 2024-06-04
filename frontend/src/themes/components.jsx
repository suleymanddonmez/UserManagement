const components = {
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        zIndex: theme.zIndex.drawer + 1,
        ...(ownerState.open
          ? {
              marginLeft: "350px",
              width: "calc(100% - 350px)",
              transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              [theme.breakpoints.down("md")]: {
                marginLeft: "40%",
                width: "60%",
              },
              [theme.breakpoints.down("sm")]: {
                marginLeft: 0,
                width: 0,
              },
            }
          : {
              marginLeft: `calc(${theme.spacing(8)})`,
              width: `calc(100% - ${theme.spacing(8)})`,
              transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              [theme.breakpoints.down("md")]: {
                marginLeft: 0,
                width: "100%",
              },
            }),
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(ownerState.open
          ? {
              width: "350px",
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              overflowX: "hidden",
              [theme.breakpoints.down("md")]: {
                width: "40%",
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }
          : {
              width: `calc(${theme.spacing(8)} + 1px)`,
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              overflowX: "hidden",
              [theme.breakpoints.down("md")]: {
                width: 0,
              },
            }),
      }),
      paper: ({ theme, ownerState }) => ({
        ...(ownerState.open
          ? {
              width: "350px",
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              overflowX: "hidden",
              [theme.breakpoints.down("md")]: {
                width: "40%",
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }
          : {
              width: `calc(${theme.spacing(8)} + 1px)`,
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              overflowX: "hidden",
              [theme.breakpoints.down("md")]: {
                width: 0,
              },
            }),
      }),
    },
  },
  MuiBox: {
    root: ({ theme, ownerState }) => ({
      flexGrow: 1,
      p: 3,
      ...(ownerState.open && {
        display: "none",
      }),
    }),
  },
};

export default components;
