import { createStackNavigator } from "react-navigation";
import Home from "../containers/home/home";

const AppNavigator = createStackNavigator({
    Home: Home,
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