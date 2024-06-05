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
      size: "small",
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        backgroundColor: theme.palette.action.focus,
        borderWidth: "0 0 1px 0",
        borderStyle: "solid",
        borderColor: theme.palette.divider,
      }),
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        "&:hover": {
          boxShadow: `inset 0 0 20px 20px ${theme.palette.action.hover}`,
        },
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
  MuiModal: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        maxHeight: "85%",
        marginTop: "4rem"
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...(ownerState.variant === "modal" && {
          width: "60%", //default medium
          ...(ownerState.modalSize === "small" && {
            width: "40%",
          }),
          ...(ownerState.modalSize === "large" && {
            width: "90%",
          }),
          [theme.breakpoints.down("md")]: {
            width: "90%",
          },
        }),
      }),
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        padding: "8px",
      }),
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        display: "flex",
        alignItem: "center",
        backgroundColor: theme.palette.action.focus,
        borderWidth: "0 0 1px 0",
        borderStyle: "solid",
        borderColor: theme.palette.divider,
        padding: "2px 8px 2px 8px",
      }),
      content: ({ theme, ownerState }) => ({
        marginTop: "auto",
        marginBottom: "auto",
      }),
      action: ({ theme, ownerState }) => ({
        marginTop: "auto",
        marginBottom: "auto",
        display: "flex",
        alignItems: "center",
        gap: "0.2rem",
        padding: "2px",
        marginRight: "0px",
      }),
      title: ({ theme, ownerState }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "0.5rem",
        lineHeight: "normal",
        fontSize: "1rem",
        fontWeight: "bold",
      }),
      subheader: ({ theme, ownerState }) => ({
        lineHeight: "normal",
        fontSize: "0.65rem",
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...(ownerState.variant == "contained" && {
          backgroundColor: theme.palette?.[ownerState.color]?.main || theme.palette.primary.main,
          color: theme.palette?.[ownerState.color]?.contrastText || theme.palette.primary.contrastText,
          boxShadow: theme.shadows[2],
          ":hover": {
            backgroundColor: theme.palette?.[ownerState.color]?.dark || theme.palette.primary.main,
            color: theme.palette?.[ownerState.color]?.contrastText || theme.palette.primary.contrastText,
            boxShadow: theme.shadows[1], //"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
          },
        }),
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        // textTransform: "none",
        fontWeight: "bold",
        ...(ownerState.size == "small" && {
          textTransform: "none",
          fontSize: "0.65rem",
          lineHeight: "inherit",
          letterSpacing: "normal",
        }),
        ...(ownerState.size == "medium" && {
          textTransform: "none",
          fontSize: "0.85rem",
          lineHeight: "inherit",
          letterSpacing: "normal",
        }),
      }),
    },
  },
};

export default components;
