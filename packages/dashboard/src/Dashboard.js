import React, { useContext, useEffect } from "react";
import { SharedContext } from "@micro-react/shared-lib";

const Dashboard = () => {
  const { name, setName } = useContext(SharedContext);

  useEffect(() => {
    setName("Juseung Park");
  });

  return (
    <>
      <h2>This is dashboard!</h2>
      <h3>Welcome {name}</h3>
    </>
  );
};

export default Dashboard;
