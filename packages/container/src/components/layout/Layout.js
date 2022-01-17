import React, { useContext } from "react";
import { Box, CssBaseline, styled } from "@mui/material";
import { SharedContext } from "@micro-react/shared-lib";
import SideNav, { DrawerHeader } from "../navigation/SideNav";
import TopNav from "../navigation/TopNav";

const drawerWidth = 240;

const Layout = (props) => {
  const { children } = props;
  const { open, setOpen } = useContext(SharedContext);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNav open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
      <SideNav open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export default Layout;
