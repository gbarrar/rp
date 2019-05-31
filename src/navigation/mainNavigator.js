import { createSwitchNavigator } from "react-navigation";
import AppNavigator from "./appNavigator";
import LoginNavigator from "./loginNavigator";

const MainNavigator = createSwitchNavigator({
    App: AppNavigator,
});

export default MainNavigator;