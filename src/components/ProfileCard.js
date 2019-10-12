import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import {
    Container,
    Content,
    Icon,
    Thumbnail
  } from "native-base";

export default class Profile2 extends Component {
    render() {
        return (
            <View style={{height: 200}}>
                <ImageBackground source={require('../assets/plane.png')} style={{height: '100%', paddingTop: 10}}>
                    <View style={{flexDirection: 'row',height: 60}}>
                        <Thumbnail style={{ marginHorizontal: 7, borderWidth: 2 }} source={this.props.image} />
                        <View style={{flexDirection: 'column', justifyContent: 'center', height: 60, paddingTop: 40}}>
                            <Text style={{color: '#0A3D68', fontWeight: '600'}}>{this.props.name}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="md-star" style={styles.starStyle}></Icon>
                                <Icon name="md-star" style={styles.starStyle}></Icon>
                                <Icon name="md-star" style={styles.starStyle}></Icon>
                                <Icon name="md-star" style={styles.starStyle}></Icon>
                                <Icon name="md-star" style={styles.starStyle}></Icon>
                            </View>
                        </View>
                    </View>


                    <View style={{flexDirection: 'row', paddingBottom: 10}}>
                        <View style={{width:'20%', height: 80, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#D5D5D5', borderRadius: 5, height: 50, width: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#0A3D6B'}}>{this.props.month}</Text>
                            <Text style={{color: '#0A3D6B', fontWeight: '600'}}>{this.props.date}</Text>
                            </View>
                        </View>

                        <View style={{width: '80%', height: 80, justifyContent: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: '#f15D14', fontSize: 17, fontWeight: '800'}}>{this.props.pickup}</Text>
                                <Text style={{color: '#9D9D9D', fontSize: 17, fontWeight: '800', paddingRight: 5, paddingLeft: 5}}>to</Text>
                                <Text style={{color: '#f15D14', fontSize: 17, fontWeight: '800'}}>{this.props.dropoff}</Text>
                            </View>
                            
                            <View style={{flexDirection: 'row'}}>
                            <View style={{width: '45%',}}>
                                <View style={{flexDirection: 'row'}}>
                                <Icon name="md-basket" style={{fontSize: 18,height: 18, color: '#f15D14', paddingRight: 10}}></Icon>
                                <Text style={{color: '#0A3D6B', fontSize: 14, fontWeight: '600'}}>Weight Capacity</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                <Icon name="md-pricetag" style={{fontSize: 18,height: 18, color: '#f15D14', paddingRight: 10}}></Icon>
                                <Text style={{color: '#0A3D6B', fontSize: 14, fontWeight: '600'}}>Rates</Text>
                                </View>
                            </View>
                            <View style={{width: '55%', }}>
                                <Text style={{color: '#0A3D6B', fontSize: 14, fontWeight: '600',}}>{this.props.weight}</Text>
                                <Text style={{color: '#0A3D6B', fontSize: 14, fontWeight: '600'}}>{this.props.rates}</Text>
                            </View>
                            </View>

                        </View>
                    </View>

                    <ImageBackground source={require('../assets/footer.png')} style={{width: '100%', height: 40, flexDirection: 'row'}}>
                        <View style={{width:'83%', padding: 10, flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Icon name="md-shirt" style={styles.bottomIcons}></Icon>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Icon name="md-home" style={styles.bottomIcons}></Icon>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <Icon name="md-wine" style={styles.bottomIcons}></Icon>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <Icon name="md-headset" style={styles.bottomIcons}></Icon>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <Icon name="md-medkit" style={styles.bottomIcons}></Icon>
                            </TouchableOpacity>
                        </View>

                        <View style={{width: '20%', padding: 10, flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Icon name="md-heart" style={styles.bottomIcons}></Icon>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Icon name="md-chatbubbles" style={styles.bottomIcons}></Icon>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    starStyle: {
        fontSize: 20,height: 60, color: '#0A3D6B'
    },
    bottomIcons: {
        fontSize: 20,height: 60, color: '#D5D5D5', paddingRight: 5, paddingLeft: 5
    }
})