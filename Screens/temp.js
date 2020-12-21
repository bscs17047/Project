/*
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const serverUrl = "http://192.168.100.18/data"

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
    backgroundColor: '#FF6666',
    alignItems: "center" ,
    justifyContent: "center",
  },
  red: {
    color: 'red',
  },
});


class HttpExample extends Component {
   
   constructor(props) {
        super(props);
        this.state = {
            information: null,
        };
    }

    _onUploadClick(){
        
        
    }

    _sendData() {
       
        fetch("http://192.168.100.18/send", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "John Doe",
                password: "john123"
            })
        })
            .then((response) => { 
                console.log(response);
                console.log("ok"); 
            });
    }

    componentDidMount() {
        fetch(serverUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    information: data.data,
                });
                this._sendData();
            })
            .catch((error) => console.log(error))   
    }
   render() {
      return (
         <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
            <Text style={styles.bigBlue}>
               {this.state.information }
            </Text>
             <View style={styles.uploadBtn}>
            <Button
                title="Upload Video"
                color="#03a797"
                onPress={() => this._onUploadClick}
            />
            </View>
         </View>
      )
   }
}
export default HttpExample

*/