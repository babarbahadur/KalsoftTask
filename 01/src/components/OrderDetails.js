import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Spinner,
  Text,
  Left,
  Icon,
  Header,
  Body,
  Title,
  Right,
  Button,
  Content,
  H1,
  ListItem,
  Grid,
  Row,
  Col
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const THEME_COLOR = '#EC9B56';

export default class OrderDetails extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const OrderDetails = this.props.navigation.getParam('OrderDetails');
    this.setState({ OrderDetails, isLoading: false });
  }

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
    const { OrderDetails } = this.state;
    return (
      <Container>
        <Header androidStatusBarColor="#EC9B56" style={styles.bgColor_tab}>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: 'white' }} />
            </TouchableOpacity>
          </Left>
          <Body style={{ paddingLeft: 10 }}>
            <Title>Order Details</Title>
          </Body>
          <Right>
            <Button onPress={() => this.logout_function()} transparent>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>
        <Content style={{ margin: 20 }}>
          <H1>Address</H1>
          <Text>{OrderDetails.shipping.address_1}</Text>
          <Text>{OrderDetails.shipping.address_2}</Text>
          <H1>Payment</H1>
          <Text>{OrderDetails.payment_method_title}</Text>
          <H1 style={{ marginTop: 20 }}>Products</H1>
          <FlatList
            data={OrderDetails.line_items}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
              <ListItem>
                <Body>
                  <Grid>
                    <Row>
                      <Col>
                        <Text>Product Name</Text>
                        <Text>Product Price</Text>
                      </Col>
                      <Col>
                        <Text>{item.name}</Text>
                        <Text>PKR {item.price}</Text>
                      </Col>
                    </Row>
                  </Grid>
                </Body>
              </ListItem>
            )}
          />
          <Button
            iconLeft
            style={{
              alignSelf: 'center',
              backgroundColor: THEME_COLOR,
              marginTop: 20
            }}
            onPress={() =>
              this.props.navigation.navigate('AssignRider', {
                details: OrderDetails
              })
            }
          >
            <Icon name="checkmark" />
            <Text>Assign Rider Now</Text>
          </Button>
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
