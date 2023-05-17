import { TextField, Button } from "@mui/material";
import "../styles/Auth.css";
const Auth_login = () => {
  return (
    <div className="wrapper_auth_login">
      <div className="row">
        <div className="text">Ще не зареєстровані?</div>
        <Button id="btn btn_register" variant="contained">
          Зареєструватися
        </Button>
      </div>
      <div className="auth_form">
        <div className="text text_auth_login">Увійти в акаунт</div>
        <TextField id="outlined-basic" label="Логін" variant="outlined" />
        <TextField id="outlined-basic" label="Пароль" variant="outlined" />
        <div className="btns">
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