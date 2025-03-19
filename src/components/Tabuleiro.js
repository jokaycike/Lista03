import { StyleSheet, View } from 'react-native';
import Celula from './Celula';
import React, {useState} from 'react';

export default function Tabuleiro(){
  const [tabuleiroJogo, setTabuleiroJogo] = 
  useState(Array(9).fill('--'));
  const [jogadas, setJogadas] = useState(0)

  function fazerjogada(indice){
    let tabuleiroAux = [...tabuleiroJogo]
    let numeroJogadas = jogadas
    numeroJogadas++
    if(numeroJogadas % 2 === 0){
      tabuleiroAux[indice] = 'O'
    } else {
      tabuleiroAux[indice] = 'X'
    }

    setJogadas(numeroJogadas)
    setTabuleiroJogo(tabuleiroAux)

    if (jogadas == 9){
      alert('Deu Velha!')
    } else if (verificarVitoria('X')){
      alert('Jogador X venceu!')
    } else if (verificarVitoria('O')){
      alert('Jogador O venceu!')
    }
  }

  return(
      <View style={styles.container}>
          <Celula valor={tabuleiroJogo[0]} onPress={() => fazerjogada(0)}/>
          <Celula valor={tabuleiroJogo[1]} onPress={() => fazerjogada(1)}/>
          <Celula valor={tabuleiroJogo[2]} onPress={() => fazerjogada(2)}/>
          <Celula valor={tabuleiroJogo[3]} onPress={() => fazerjogada(3)}/>
          <Celula valor={tabuleiroJogo[4]} onPress={() => fazerjogada(4)}/>
          <Celula valor={tabuleiroJogo[5]} onPress={() => fazerjogada(5)}/>
          <Celula valor={tabuleiroJogo[6]} onPress={() => fazerjogada(6)}/>
          <Celula valor={tabuleiroJogo[7]} onPress={() => fazerjogada(7)}/>
          <Celula valor={tabuleiroJogo[8]} onPress={() => fazerjogada(8)}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 300,
    flexDirection:'row',
    flexWrap:'wrap',
  }
});