import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import MyHeader from '../Components/Header';

export default class Home extends React.Component{
  goToGujarat = () =>{
    console.log("Gujarat function");
    this.props.navigation.navigate("Gujarat");
  }
  goToMaharashtra = () =>{
    console.log("Maharashtra function");
    this.props.navigation.navigate("Maharashtra");
  }
  goToRajasthan = () =>{
    console.log("Rajasthan function");
    this.props.navigation.navigate("Rajasthan");
  }
  goToWestBengal = () =>{
    console.log("WestBengal function");
    this.props.navigation.navigate("WestBengal");
  }
  goToHome = () =>{
    console.log("Home function");
    this.props.navigation.navigate("Home");
  }

    render(){
      var selectedState = this.props.selectedState;
      return(
        <View style={styles.container}
        >
            <MyHeader title="Home" navigation={this.props.navigation}></MyHeader>
          <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center',}}>Select your City</Text>
         <View>
         <TouchableOpacity
        onPress={this.goToHome}
          >
              <Image 
              style={{ height:40, width:40, margin: 5,}}
              source={require("../assets/download.png")}
              />
              
          </TouchableOpacity>
          <TouchableOpacity
        onPress={this.goToGujarat}
          >
              <Image 
              style={{ height:120, width:240, margin: 10,}}
              source={require("../assets/Gujarat.jpg")}
              />
              
          </TouchableOpacity>
             <TouchableOpacity
              onPress={this.goToMaharashtra}
              >
              <Image 
              style={{ height:120, width:240, margin: 10,}}
              source={require("../assets/Maharashtra.jpg")}
              />
          </TouchableOpacity>

           <TouchableOpacity
            onPress={this.goToRajasthan}
            >
              <Image 
              style={{ height:120, width:240, margin: 10,}}
              source={require("../assets/Rajasthan.jpg")}
              />
          </TouchableOpacity>

           <TouchableOpacity
            onPress={this.goToWestBengal}
            >
              <Image 
              style={{ height:120, width:240, margin: 10,}}
              source={require("../assets/WestBengal.jpg")}
              />
          </TouchableOpacity>

        </View>
        </View>
      )
    }
  }

  const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#2b6777',
    },
  })