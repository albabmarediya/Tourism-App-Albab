import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import MyHeader from '../Components/Header';

export default class Gujarat extends React.Component{
    goToHome = () =>{
    console.log("Home function");
    this.props.navigation.navigate("Home");
  }
    render(){
      return(
        <View style={styles.container}>
          <MyHeader title="Gujarat" navigation={this.props.navigation}></MyHeader>
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
      source={require("../assets/Statue-of-Unity.jpg")}
      />
      <Text style={styles.text}>
      This was built as the private residence for Maharaja Sayajirao Gaekwad III in 1890, Laxmi Vilas Palace is  one of India's biggest architectural marvels,Built over 500 acres, this is the largest home built till date and four times the size of Buckingham Palace. The most impressive Raj-era palace in Gujarat, its elaborate interiors boast well-maintained mosaics, chandeliers and artworks, as well as a highly impressive collection of weaponry and art.
      </Text>
      
         <Image
      style={{height:240, width:280, margin: 15,}}
      source={require("../assets/Gujarat-in-Monsoon-Cover.webp")}
      />
      <Text style={styles.text}>
       The world's tallest statue is located in Gujarat, India. Standing almost 600 feet tall, the Statue of Unity depicts Indian freedom fighter and politician Sardar Vallabhbhai Patel, one of the most prominent leaders of the Indian independence movement, and the first Deputy Prime Minister of India.This colossal monument over River Narmada is a tribute to India 'from the people of Gujarat' to the leader who placed people's welfare first.
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