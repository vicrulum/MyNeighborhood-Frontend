import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Input} from '../components/Input'
import {Heading} from '../components/Heading'
import {FilledButton} from '../components/FilledButton'
import {TextButton} from '../components/TextButton'
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({navigation}) {
    return (
      <ScrollView style={styles.defaultBackground}>
      <View style={styles.container}>
        <Heading>Home</Heading>
        <Image style={styles.logo} source={require("../assets/pueblo.png")}></Image>

      </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:25
    },
    defaultBackground:{
      backgroundColor:"#fff",
    },
    logo:{
      width:150,
      height:150,
      marginBottom:40
    },
    text:{
      fontSize:20,
      fontWeight: "bold",
    }
  });