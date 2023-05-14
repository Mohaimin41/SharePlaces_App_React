import React from "react";

import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "john",
      image:
        "https://vignette1.wikia.nocookie.net/rezero/images/0/02/Rem_Anime.png/revision/latest?cb=20160730213532",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
