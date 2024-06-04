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
  MuiTable: {
    defaultProps: {
      stickyHeader: true,
      size: "medium",
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      }),
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...(ownerState.variant === "header" && {
          fontWeight: "bold",
        }),
      }),
    },
  },
};

export default components;
