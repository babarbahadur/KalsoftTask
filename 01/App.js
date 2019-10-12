import React from "react";
import { Container, Spinner, Icon } from "native-base";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import {
  ToastAndroid,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  Alert,
  BackAndroid
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import NetInfo from "@react-native-community/netinfo";
import firebase from "react-native-firebase";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import Home from "./src/components/Home";
import Profile from "./src/components/Profile";
import History from "./src/components/History";
import OrderDetails from "./src/components/OrderDetails";
import AssignRider from "./src/components/AssignRider";

const THEME_COLOR = "#EC9B56";

class App extends React.Component {
  constructor() {
    super();
    NetInfo.fetch().then(connectionInfo => {
      if (connectionInfo.type == "none") {
        Alert.alert(
          "Network Connection Error",
          "Check your Internet Connection and try again",
          [
            {
              text: "Ok",
              onPress: () => BackAndroid.exitApp()
            }
          ],
          {
            cancelable: false
          }
        );
      }
    });
    firebase.app();
  }

  componentDidMount() {
    this.removeNotificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed(notification => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      });
    this.removeNotificationListener = firebase
      .notifications()
      .onNotification(notification => {
        // Process your notification as required
      });
    this.checkUser();
  }

  componentWillUnmount() {
    this.removeNotificationDisplayedListener();
    this.removeNotificationListener();
  }

  checkUser = () => {
    AsyncStorage.getItem("session_login_email").then(value => {
      if (value !== undefined && value !== null && value !== "") {
        this.props.navigation.navigate("HomeNav");
      } else {
        this.props.navigation.navigate("LoginNav");
      }
    });
  };

  render() {
    return (
      <View>
        <ImageBackground
          style={styles.splash_screen_bg}
          source={require("./src/images/splashScreen.jpg")}
        >
          <StatusBar backgroundColor={THEME_COLOR} />
          <Spinner
            size="large"
            style={styles.splash_screen_spinner}
            color={THEME_COLOR}
          />
        </ImageBackground>
      </View>
    );
  }
}

const Order = createStackNavigator(
  {
    Orders: Home,
    OrderDetails: OrderDetails,
    AssignRider: AssignRider
  },
  {
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" style={{ color: tintColor }} />
      )
    }
  }
);

const HomeNav = createBottomTabNavigator(
  {
    Home: Order,
    Profile: { screen: Profile },
    History: { screen: History }
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: "#CF8547",
      activeBackgroundColor: "#EC9B56",
      activeTintColor: "#FFF",
      inactiveTintColor: "#FFF",
      labelStyle: { fontWeight: "bold" }
    }
  }
);
const LoginNav = createStackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp }
  },
  {
    initialRouteName: "Login"
  }
);

const MainNav = createSwitchNavigator(
  {
    Splash: App,
    LoginNav: LoginNav,
    HomeNav: HomeNav
  },
  {
    initialRouteName: "Splash"
  }
);

const styles = StyleSheet.create({
  splash_screen_bg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  splash_screen_spinner: {
    marginTop: 250
  }
});
export default createAppContainer(MainNav);
