import React, { useContext } from "react";
import { SharedContext } from "@micro-react/shared-lib";

const Users = () => {
  const { name } = useContext(SharedContext);

  return (
    <>
      <h2>This is users!</h2>
      <h3>Welcome {name}</h3>
    </>
  );
};

export default Users;
