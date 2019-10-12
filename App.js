import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import {
  Container,
  Content,
  Icon,
  Thumbnail
} from "native-base";
import ProfileCard from './src/components/ProfileCard'
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{height: 80, backgroundColor: '#0A3D6B', flexDirection: 'row'}}>
            <View style={{height: 80, width: '20%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
              <TouchableOpacity>
               <Icon name="md-menu" style={{fontSize: 25,height: 60, color: '#FFF', paddingTop: 15}}></Icon>
              </TouchableOpacity>
            </View>
            
            <View style={{height: 80,width: '60%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
              <Text style={{color: '#FFF', fontSize: 15, fontWeight: '600'}}>LOOKING FOR TRAVELERS</Text>
            </View>

            <View style={{height: 80, width: '20%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
              <TouchableOpacity>
               <Icon name="md-search" style={{fontSize: 25,height: 60, color: '#FFF', paddingTop: 15}}></Icon>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity>
            <View style={{height: 50, width:'100%', backgroundColor: '#F15D14', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center'}}>
              <Icon name="md-add" style={{fontSize: 25,height: 60, color: '#FFF', paddingTop: 16, paddingRight: 10}}></Icon>
              <Text style={{color: '#FFF', fontSize: 15, fontWeight: '600'}}>Got Extra Space? Carry Earn</Text>
            </View>
          </TouchableOpacity>
          
          <View>
            <ScrollView>
              <ProfileCard image={require('./src/assets/you.jpg')} name='Ryan Ellis' month='Sept' date='18' pickup="Karachi (PK)" dropoff="Lahore (PK)" weight='10 KG' rates='$5 / KG'></ProfileCard>
              <ProfileCard image={require('./src/assets/me.jpg')} name='Ahsan Rahim' month='Sept' date='17' pickup="Karachi (PK)" dropoff="Lahore (PK)" weight='10 KG' rates='$5 / KG'></ProfileCard>
              <ProfileCard image={require('./src/assets/you.jpg')} name='Khalid Aziz' month='Sept' date='16' pickup="Karachi (PK)" dropoff="Lahore (PK)" weight='10 KG' rates='$5 / KG'></ProfileCard>
              <ProfileCard image={require('./src/assets/me.jpg')} name='John Doe' month='Sept' date='15' pickup="Karachi (PK)" dropoff="Lahore (PK)" weight='10 KG' rates='$5 / KG'></ProfileCard>
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}
