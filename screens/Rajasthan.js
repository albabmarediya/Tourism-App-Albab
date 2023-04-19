import React from 'react';
import {View,Text, Image,TouchableOpacity,StyleSheet} from 'react-native';
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
      source={require("../assets/ranthambore-fort.jpg")}
      />
      <Text style={styles.text}>
        The oldest settlement in the area near Sawai Madhopur was around the Ranthambhore fort. The exact origin of the Ranthambore fort is still disputed but it is generally accepted that there was a settlement at the site of the Fort, as far back as the 8th century A.D. It is widely believed that the construction of the Ranthambhore Fort was started during the reign of the Chauhan Rajput King Sapaldaksha in 944 AD. Another theory stipulates that King Jayant, also a Chauhan rajput, built the Ranthambore Fort during 1110 AD. It is most likely that the construction of the fort commenced during the mid 10th Century A.D. and continued for a few centuries after that.
      </Text>
      
         <Image
      style={{height:240, width:280, margin: 15,}}
      source={require("../assets/hawa-mahal.png")}
      />
      <Text style={styles.text}>
        In 1799, the Kachhwaha Rajput ruler, Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh ordered Lal Chand Usta to construct an extension to the Royal City Palace. The Purdah system at the time was strictly followed. Rajput royal ladies should not be seen by strangers or appear in any public area. The construction of Hawa Mahal allows the royal ladies to enjoy from every day street scenes to royal processions on the street without being seen.
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