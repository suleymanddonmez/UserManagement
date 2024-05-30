import React from "react";
import Functions from "../../utils/Functions";
import Table from "../../components/Table";

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
  const tableConfig = {
    tableName: "Kullanıcı Talosu",
    row: {
      displayName: {
        text: "İsim Soyisim",
        headerProps: {
          sx: {
            color: "blue"
          }
        },
        props: {
          sx: {
            color: "red"
          }
        }
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
    data: users,
  };

  return <Table tableConfig={tableConfig} />;
}

export default UserList;
