import React, { useState } from "react";

//material-ui
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//react-redux
import { useDispatch } from "react-redux";
import { close as onCloseModal } from "../store/ModalSlice";

//components
import Icon from "./Icon";

const CardTitle = styled(({ title, subTitle, icon }) => (
  <>
    {icon && <Icon iconName={icon} color={"primary"} />}
    <Box>
      <Typography component="span" lineHeight={"inherit"} className="MuiCardHeader-title">
        {title}
      </Typography>
      <Typography component="p" lineHeight={"inherit"} className="MuiCardHeader-subheader">
        {subTitle}
      </Typography>
    </Box>
  </>
))(({ theme }) => ({
  ".MuiSvgIcon-root": {
    marginRight: "5px",
  },
}));

function Card({ children, title, subTitle, icon, actions, subActions, headerProps, contentProps, variant, ...otherProps }) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(true);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    dispatch(onCloseModal());
  };

  return (
    <MuiCard variant={variant} {...otherProps}>
      <CardHeader
        {...headerProps}
        action={
          <>
            {actions}
            {variant == "modal" ? (
              <IconButton variant="contained" onClick={handleClose} size="small" color={"error"}>
                <Icon iconName={"Close"} size="small" />
              </IconButton>
            ) : (
              <IconButton variant="contained" onClick={handleExpand} size="small">
                <Icon iconName={expanded ? "ExpandLess" : "ExpandMore"} size="small" />
              </IconButton>
            )}
          </>
        }
        title={<CardTitle title={title} subTitle={subTitle} icon={icon} />}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent {...contentProps}>{children}</CardContent>
        {subActions && <CardActions disableSpacing>{subActions}</CardActions>}
      </Collapse>
    </MuiCard>
  );
}

export default Card;
