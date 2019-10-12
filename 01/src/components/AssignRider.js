import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {
  Container,
  Spinner,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Button,
  Content
} from 'native-base';
import MapView from 'react-native-maps';

const THEME_COLOR = '#EC9B56';

export default class AssignRider extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      lat: null,
      lng: null,
      latDelta: 0.015,
      lngDelta: 0.0121
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(pos => {
      this.setState({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        isLoading: false
      });
    });
  };

  render() {
    if (this.state.isLoading === true) {
      return (
        <Container
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Spinner color={THEME_COLOR} size="large" />
        </Container>
      );
    }
    return (
      <Container>
        <Header androidStatusBarColor="#EC9B56" style={styles.bgColor_tab}>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: 'white' }} />
            </TouchableOpacity>
          </Left>
          <Body style={{ paddingLeft: 10 }}>
            <Title>Assign Rider</Title>
          </Body>
          <Right>
            <Button onPress={() => this.logout_function()} transparent>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <MapView
            region={{
              latitude: this.state.lat,
              longitude: this.state.lng,
              latitudeDelta: this.state.latDelta,
              longitudeDelta: this.state.lngDelta
            }}
            style={{ flex: 1 }}
            showsMyLocationButton={true}
            showsUserLocation={true}
          />
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
    color: 'white'
  },
  bgColor_tab_active: {
    backgroundColor: '#CF8547'
  },
  container_table: {
    flex: 1,
    backgroundColor: '#fff'
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  button: {
    marginTop: 10,
    marginLeft: '30%',
    marginRight: '30%',
    height: 30,
    backgroundColor: THEME_COLOR
  }
});
