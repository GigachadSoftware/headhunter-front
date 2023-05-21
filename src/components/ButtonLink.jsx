import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ButtonLink = (props)=>{
    return(
        <Link to={props.link}>
            <Button color="inherit">{props.title}</Button>
          </Link>
    )
}

export default ButtonLink;