import { createStackNavigator } from "react-navigation";
import Home from "../containers/home/home";
import Add from "../containers/add/add";

const AppNavigator = createStackNavigator({
    Home: Home,
    Add: Add,
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});

export default AppNavigator;