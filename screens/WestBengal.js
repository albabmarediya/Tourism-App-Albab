import React from 'react';
import {View,Text, Image,TouchableOpacity,StyleSheet} from 'react-native';
import MyHeader from '../Components/Header';

export default class WestBengal extends React.Component{
   goToHome = () =>{
    console.log("Home function");
    this.props.navigation.navigate("Home");
  }
    render(){
      return(
               <View style={styles.container}>
          <MyHeader title="WestBengal" navigation={this.props.navigation}></MyHeader>
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
      source={require("../assets/w-b-monument.jpg")}
      />
      <Text style={styles.text}>
      The Victoria Memorial is a large marble building on the Maidan in Central Kolkata, having its entrance on the Queen's Way. It was built between 1906 and 1921 by then British government. It is dedicated to the memory of Queen Victoria, Empress of India from 1876 to 1901.
      </Text>
      
         <Image
      style={{height:240, width:280, margin: 15,}}
      source={require("../assets/Howrah_Bridge.jpg")}
      />
      <Text style={styles.text}>
      The Victoria Memorial is a large marble building on the Maidan in Central Kolkata, having its entrance on the Queen's Way. It was built between 1906 and 1921 by then British government. It is dedicated to the memory of Queen Victoria, Empress of India from 1876 to 1901.
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