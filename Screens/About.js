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

const About = () => {
  return (
    <ImageBackground source={image} style={styles.bg_image}>
      <ScrollView>
            <Text style={styles.titleText}>MEET THE TEAM</Text>

            <Text style={styles.subTitleText}>
                Dr. Saman Riaz
            </Text>
            
            <Text style={styles.subText}>
              Supervisor
            </Text>
            <Text>{"\n"}</Text>
            <Text style={styles.subTitleText}>
                Ma'am Saira Qamar
            </Text>
            
            <Text style={styles.subText}>
              Co-Supervisor
            </Text>
            <Text>{"\n"}</Text>

            
          <Text style={styles.subTitleText}>
                Syed Daniyal Jamal
            </Text>
            
            <Text style={styles.subText}>
              FA17-108-B
            </Text>
            <Text>{"\n"}</Text>
            <Text style={styles.subTitleText}>
                Kashif Ahmed
            </Text>
            
            <Text style={styles.subText}>
              FA17-048-B
            </Text>
            <Text>{"\n"}</Text>

            <Text style={styles.subTitleText}>
                Yaseen Khan
            </Text>
            <Text style={styles.subText}>
              FA17-091-B
            </Text>
            <Text>{"\n"}</Text>
            <Text style={styles.subTitleText}>
                Abdul Rehman
            </Text>
            
            <Text style={styles.subText}>
              FA17-048-B
            </Text>
            <Text>{"\n"}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titleText: {
    alignSelf: 'center',
    //textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
  },
  subTitleText: {
    alignSelf: 'center',
    textAlign: 'justify',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    //padding :17,
  },
   subText: {
    alignSelf: 'center',
    textAlign: 'justify',
    color: 'white',
    fontSize: 17,
    fontWeight: 'normal',
    //padding :17,
  },
  bg_image: {
    flex: 1,
    resizeMode: 'cover',
    //justifyContent: 'center',
    //opacity: 0.8,
    
  },
  img:{
      height:200,
      width:200,
  }
});

export default About;
