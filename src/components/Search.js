import { TextField, colors } from "@mui/material";
import { Button } from "@mui/material";
import "../styles/Search.css";
import ButtonLink from "./ButtonLink";
const Search = () => {
  return (
    <div className="wrapper">
      <div className="text_info">Сайт пошуку роботи №1 в Україні</div>
      <div className="search">
        <TextField id="outlined-basic" label="Пошук" variant="outlined" />
        <TextField id="outlined-basic" label="Пошук" variant="outlined" />
        <Button id="search_btn" variant="contained">
          Search
        </Button>

        <ButtonLink link="/vacancy/1" title="FFFF"/>
      </div>
    </div>
  );
};
export default Search;
