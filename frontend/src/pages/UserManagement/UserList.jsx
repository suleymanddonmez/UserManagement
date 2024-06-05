import React from "react";
import { createPortal } from "react-dom";
import Functions from "../../utils/Functions";

//material-ui
import { Box, Button, Grid, IconButton } from "@mui/material";

//components
import Table from "../../components/Table";
import Icon from "../../components/Icon";
import Card from "../../components/Card";

//react-redux
import { useDispatch } from "react-redux";
import { setOpen } from "../../store/ModalSlice";
import UserAction from "./UserAction";

const users = [
  {
    uuid: Functions.uuid.new(),
    email: "suleymandonmez1997@gmail.com",
    displayName: "Süleyman Dönmez",
    userRoles: ["Admin"],
    photo: null,
  },
  {
    uuid: Functions.uuid.new(),
    email: "user1@gmail.com",
    displayName: "User 2",
    userRoles: ["User"],
    photo: null,
  },
  {
    uuid: Functions.uuid.new(),
    email: "user2@gmail.com",
    displayName: "User 2",
    userRoles: ["User"],
    photo: null,
  },
];

function UserList() {
  const dispatch = useDispatch();
  const tableConfig = {
    tableName: "Kullanıcı Talosu",
    row: {
      displayName: {
        text: "İsim Soyisim",
        // headerProps: {
        //   sx: {
        //     color: "blue"
        //   }
        // },
        // props: {
        //   sx: {
        //     color: "red",
        //   },
        // },
      },
      email: {
        text: "E-posta",
      },
      userRoles: {
        text: "Roller",
      },
      uuid: {
        text: "UUID",
      },
    },
    rowActions: [
      {
        id: "edit",
        text: "Düzenle",
        iconName: "Edit",
        onClick: (row) => console.log(row),
      },
      {
        id: "delete",
        text: "Sil",
        iconName: "Delete",
        onClick: (row) => console.log(row),
      },
    ],
    data: users,
  };

  const showNewUserModal = () => {
    dispatch(
      setOpen({
        title: "deneme",
        context: <UserAction />,
        handleClose: () => alert("close"),
      })
    );
  };

  return (
    <Card
      icon={"Person"}
      title={"Kullanıcı Yönetimi"}
      // subTitle={"Kullanıcılar"}
      actions={
        <IconButton variant="contained" color="success" size="small" onClick={showNewUserModal}>
          <Icon iconName={"PersonAddAlt"} size="small" />
        </IconButton>
      }
      headerProps={{}}
      contentProps={{}}
      subActions={
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "right" }}>
            <Button variant="contained" startIcon={<Icon iconName={"PersonAddAlt"} />} size="small" color="success">
              Yeni Kullanıcı
            </Button>
          </Grid>
        </Grid>
      }
    >
      <Table tableConfig={tableConfig} />
    </Card>
  );
}

export default UserList;
