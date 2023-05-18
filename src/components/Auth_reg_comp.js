import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/Auth_reg.css";

const Auth_reg_comp = () => {
  return (
    <div className="wrapper_auth_login wrapper_auth_reg">
      <div className="row">
        <div className="text">Маєте акаунт?</div>
        <Link to="/auth">
          <Button id="btn btn_register" variant="contained">
            Увійти
          </Button>
        </Link>
      </div>
      <div className="auth_form auth_reg_form">
        <div className="left_box">
          <div className="text text_auth_login text_auth_reg">Реєстрація</div>
          <TextField id="outlined-basic" label="Пошта" variant="outlined" />
          <TextField id="outlined-basic" label="Пароль" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Повторити пароль"
            variant="outlined"
          />
        </div>
        <div className="right_box">
          <div className="text text_auth_login text_auth_reg">Місто</div>
          <TextField id="outlined-basic" label="Місто" variant="outlined" />
          <div className="text text_auth_login text_auth_reg">
            Дата народження
          </div>

          <TextField
            id="outlined-basic"
            label="Дата народження"
            variant="outlined"
          />
        </div>
        <div className="btns_auth_login btns_auth_reg">
          <Button id="btn btn_login btn_auth_reg" variant="contained">
            Створити
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Auth_reg_comp;
