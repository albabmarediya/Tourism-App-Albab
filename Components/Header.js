import React from "react";
import { View, Text} from "react-native";
import {Header, Icon } from 'react-native-elements';

export default class MyHeader extends React.Component{
    render(){
      return(
        <Header
            leftComponent={{ color: '#fff' }}
            centerComponent={{ text: this.props.title , style: { color: '#fff' } }}
            rightComponent={{ color: '#fff' }}
            backgroundColor="#000000"
        />
      )
    }
  }