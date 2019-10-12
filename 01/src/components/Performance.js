import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  StatusBar,
  ImageBackground,
  Keyboard,
  Alert,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Footer,
  FooterTab,
  Content,
  Card,
  CardItem
} from "native-base";
import {
  Table,
  TableWrapper,
  Rows,
  Cols,
  Cell
} from "react-native-table-component";
import { Col, Row, Grid } from "react-native-easy-grid";
const THEME_COLOR = "#EC9B56";
export default class Performance extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="trending-up" style={{ color: tintColor }} />
    )
  };

  render() {
    const state = this.state;
    return (
      <Container>
        <Header androidStatusBarColor="#EC9B56" style={styles.bgColor_tab}>
          <Body style={{ paddingLeft: 10 }}>
            <Title>Performance</Title>
          </Body>
        </Header>

        <Content style={{ margin: 20 }}>
          <Grid style={styles.GridRow}>
            <Col>
              <Card style={styles.CardItem_01}>
                <CardItem>
                  <View style={styles.container_table}>
                    <Text style={styles.card_text_top}>0</Text>
                    <Text style={styles.card_text_bottom}>Acceptance</Text>
                  </View>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card style={styles.CardItem_02}>
                <CardItem>
                  <View style={styles.container_table}>
                    <Text style={styles.card_text_top}>0</Text>
                    <Text style={styles.card_text_bottom}>Rating</Text>
                  </View>
                </CardItem>
              </Card>
            </Col>
          </Grid>
          <Grid style={styles.GridRow}>
            <Col>
              <Card style={styles.CardItem_01}>
                <CardItem>
                  <View style={styles.container_table}>
                    <Text style={styles.card_text_top}>06 : 20</Text>
                    <Text style={styles.card_text_bottom}>Time</Text>
                  </View>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card style={styles.CardItem_02}>
                <CardItem>
                  <View style={styles.container_table}>
                    <Text style={styles.card_text_top}>0</Text>
                    <Text style={styles.card_text_bottom}>Booking</Text>
                  </View>
                </CardItem>
              </Card>
            </Col>
          </Grid>
          <Grid style={styles.GridRow}>
            <Col>
              <Card style={styles.CardItem_01}>
                <CardItem>
                  <View style={styles.container_table}>
                    <Text style={styles.card_text_top}>0</Text>
                    <Text style={styles.card_text_bottom}>Destination</Text>
                  </View>
                </CardItem>
              </Card>
            </Col>
            <Col />
          </Grid>
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
    flex: 1
  },
  card_text_top: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18
  },
  card_text_bottom: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    textAlign: "center"
  },
  CardItem_01: {
    marginRight: 10
  },
  CardItem_02: {
    marginLeft: 10
  },
  GridRow: {
    marginBottom: 10
  }
});
