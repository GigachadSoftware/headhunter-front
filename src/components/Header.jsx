import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ButtonLink from "./ButtonLink";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1D1E1F" }}>
        <Toolbar>
          <ButtonLink link="/" title="hh.ua"/>
          <ButtonLink link="/" title="Головна"/>
          <ButtonLink link="/" title="Вакансії"/>
          <ButtonLink link="/auth" title="Увійти"/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
