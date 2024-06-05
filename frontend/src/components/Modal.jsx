import React from "react";

//material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";

//react-redux
import { useSelector, useDispatch } from "react-redux";
import { open, icon, title, context, size, close } from "../store/ModalSlice";
import Card from "./Card";

function Modal() {
  const dispatch = useDispatch();
  const modalOpen = useSelector(open);
  const modalIcon = useSelector(icon);
  const modalTitle = useSelector(title);
  const modalContext = useSelector(context);
  const modalSize = useSelector(size);
  return (
    <MuiModal open={modalOpen} onClose={() => dispatch(close())}>
      <Card variant="modal" icon={modalIcon} title={modalTitle} modalSize={modalSize}>
        {modalContext}
      </Card>
    </MuiModal>
  );
}

export default Modal;
