import { TextField, Button } from "@mui/material";
import "../styles/Auth.css";
import { Link } from "react-router-dom";
const Auth_login = () => {
  return (
    <div className="wrapper_auth_login">
      <div className="row">
        <div className="text">Ще не зареєстровані?</div>
        <Link to="/auth_reg">
          <Button id="btn btn_register" variant="contained">
            Зареєструватися
          </Button>
        </Link>
      </div>
      <div className="auth_form">
        <div className="text text_auth_login">Увійти в акаунт</div>
        <TextField id="outlined-basic" label="Логін" variant="outlined" />
        <TextField id="outlined-basic" label="Пароль" variant="outlined" />
        <div className="btns_auth_login">
          <Button id="btn btn_gauth" variant="contained">
            GAuth
          </Button>
          <Button id="btn btn_login" variant="contained">
            Увійти
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Auth_login;
