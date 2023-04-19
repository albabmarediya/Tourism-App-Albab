import React from 'react';
import {View,Text,Image,TouchableOpacity, StyleSheet} from 'react-native';
import MyHeader from '../Components/Header';

export default class Rajasthan extends React.Component{
   goToHome = () =>{
    console.log("Home function");
    this.props.navigation.navigate("Home");
  }
    render(){
      return(
        <View style={styles.container}>
          <MyHeader title="Rajasthan" navigation={this.props.navigation}></MyHeader>
      <TouchableOpacity
        onPress={this.goToHome}
          >
              <Image 
              style={{ height:40, width:40, margin: 5,}}
              source={require("../assets/download.png")}
              />
              
      </TouchableOpacity>
      <Image
      style={{height:240, width:280, margin: 15,}}
      source={require("../assets/Gateway-Of-India_600-1280x720.jpg")}
      />
      <Text style={styles.text}>
     The Gateway of India was built to commemorate the arrival of George V, Emperor of India and Mary of Teck, Empress consort, in India at Apollo Bunder, Mumbai (Bombay) on 2 December 1911 prior to the Delhi Durbar of 1911; it was the first visit of a British monarch to India.
      </Text>
      
         <Image
      style={{height:240, width:280, margin: 15,}}
      source={require("../assets/Mumbai_Aug_2018_(43397784544).jpg")}
      />
      <Text style={styles.text}>
        Jamsetji Nusserwanji Tata, founder of the Tata Group, opened the Taj Mahal Palace, a hotel in Mumbai (formerly called Bombay) overlooking the Arabian Sea, on 16 December 1903. It was the first Taj property and the first Taj hotel. There are several anecdotal stories about why Tata opened the Taj hotel.
      </Text>
        </View>
      )
    }
  }

   const styles= StyleSheet.create({
      container:{
        backgroundColor:"#030e12",
        flex:1,
      },
    text:{
      color: '#52ab98',
      textAlign:'left',
    },
  })