import React, {Component} from 'react';
import {
  View,
  Platform,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  ImageBackground,
  Navigator,
  TouchableOpacity,
} from 'react-native';




const image = require('../assets/bk_img.jpg');

const Citation = () => {
  return (
    <ImageBackground source={image} style={styles.bg_image}>
      <ScrollView>
            <Text style={styles.titleText}>WAY IT WORKS</Text>

            <Text style={styles.subTitleText}>
                We are proposing a machine learning solution, 
                which will predict personality traits using video 
                processing. We are using facial features, ambiance, 
                audio and transcript to predict with higher accuracy 
                and fast results.
            </Text>
            
            <Image source={require('../assets/works.png')} style={styles.works} />

            <Text style={styles.subTitleText}>
            Fig. for visual demonstration
            </Text>
          
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titleText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
  },
  works:{
    padding:10,
    height:250,
    width:'100%'
  },
  subTitleText: {
    alignSelf: 'center',
    textAlign: 'justify',
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
    padding :17,
  },
  bg_image: {
    flex: 1,
    resizeMode: 'cover',
    //opacity: 0.8,
    
  },
  img:{
      height:200,
      width:200,
  }
});

export default Citation;
