import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function Celula({valor}){
    return(
        <View style={styles.container}>
            <Text>{valor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderWidth:1,
    borderRadius: 6
  }
});