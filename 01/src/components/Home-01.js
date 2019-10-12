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
import config from "../config";
const THEME_COLOR = "#EC9B56";
export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      taskCreated: true
    };
  }

  logout_function() {
    AsyncStorage.removeItem("session_login_email");
    AsyncStorage.removeItem("session_login_password");
    this.props.navigation.navigate("LoginNav");
  }

  onChangeFunction(newState) {
    this.setState(newState, () => Alert.alert("" + this.state.taskCreated));
  }

  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#EC9B56" style={styles.bgColor_tab}>
          <Body style={{ paddingLeft: 10 }}>
            <Title>Order List</Title>
          </Body>
          <Right>
            <Switch
              onValueChange={value =>
                this.onChangeFunction({ taskCreated: value })
              }
              value={this.state.taskCreated}
              style={{ marginBottom: 8 }}
              trackColor="#A56C3C"
              thumbColor="white"
            />

            <Button onPress={() => this.logout_function()} transparent>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>

        <Content style={{ margin: 20 }}>
          <Text>Hello World</Text>
        </Content>
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
