import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1D1E1F" }}>
        <Toolbar>
          <Link to="/">
            <Button color="inherit">hh.ua</Button>
          </Link>
          <Link to="/">
            <Button color="inherit">Головна</Button>
          </Link>
          <Link to="/">
            <Button color="inherit">Вакансії</Button>
          </Link>
          <Link to="/auth">
            <Button color="inherit">Увійти</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
