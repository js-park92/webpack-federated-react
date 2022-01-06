import React, { useState } from "react";
import { SharedContext } from "@micro-react/shared-lib";

const SharedContextProvider = ({ children }) => {
  const [name, setName] = useState("Name is being loaded");
  const [open, setOpen] = useState(false);

  return (
    <SharedContext.Provider
      value={{
        name,
        setName,
        open,
        setOpen,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
};

export default SharedContextProvider;
