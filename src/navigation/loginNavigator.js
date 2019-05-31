import { createStackNavigator } from "react-navigation";
import Login from "../containers/login/login";

const LoginNavigator = createStackNavigator({
    Login: Login,
});

export default LoginNavigator;