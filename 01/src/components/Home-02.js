import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  BackHandler
} from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Right,
  Body,
  Icon,
  Content,
  Card,
  CardItem,
  ListItem,
  List,
  Grid,
  Row,
  Col,
  Spinner,
  Switch
} from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import firebase from "react-native-firebase";
import MapView from "react-native-maps";
import config from "../config";
const THEME_COLOR = "#EC9B56";
export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },

      isLoading: false,
      riderState: true
    };
  }

  componentDidMount() {
    this._getLocation();
  }
  _getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(pos => {
      this.setState({
        isLoading: false,
        region: {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      });
    });
  };

  logout_function() {
    AsyncStorage.removeItem("session_login_email");
    AsyncStorage.removeItem("session_login_password");
    this.props.navigation.navigate("LoginNav");
  }

  onChangeFunction(newState) {
    this.setState(newState, () => Alert.alert("" + this.state.riderState));
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <Container
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Spinner size="large" />
        </Container>
      );
    }
    return (
      <Container>
        <Header androidStatusBarColor="#EC9B56" style={styles.bgColor_tab}>
          <Body style={{ paddingLeft: 10 }}>
            <Title>Order List</Title>
          </Body>
          <Right>
            <Switch
              onValueChange={value =>
                this.onChangeFunction({ riderState: value })
              }
              value={this.state.riderState}
              style={{ marginBottom: 8 }}
              trackColor="#A56C3C"
              thumbColor="white"
            />

            <Button onPress={() => this.logout_function()} transparent>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>

        <Container>
          <MapView
            initialRegion={this.state.region}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            showsUserLocation={true}
            showsMyLocationButton={true}
          />
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bgColor_tab: {
    backgroundColor: THEME_COLOR
  },
  fontColor_tab: {
    color: "white"
  },
  bgColor_tab_active: {
    backgroundColor: "#CF8547"
  },
  container_table: {
    flex: 1,
    backgroundColor: "#fff"
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  button: {
    marginTop: 10,
    marginLeft: "30%",
    marginRight: "30%",
    height: 30,
    backgroundColor: THEME_COLOR
  }
});
