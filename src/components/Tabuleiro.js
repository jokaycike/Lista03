import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Celula from './Celula';

export default function Tabuleiro(){
    return(
        <View style={styles.container}>
            <Celula valor={'--'}/>
            <Celula valor={'--'}/>
            <Celula valor={'--'}/>
            <Celula valor={'--'}/>
            <Celula valor={'--'}/>
            <Celula valor={'--'}/>
            <Celula valor={'--'}/>
            <Celula valor={'--'}/>
            <Celula valor={'--'}/>
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