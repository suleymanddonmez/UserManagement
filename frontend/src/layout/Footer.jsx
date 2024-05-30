import React from "react";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {`Copyright © sdtech panel application ${new Date().getFullYear()}.`}
    </Typography>
  );
}

function Footer() {
  return <div>Footer</div>;
}

export default Footer;
