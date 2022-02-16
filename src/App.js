import {Button, SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import Titulo from './components/Titulo';
import Botao from './components/Botao';

const App = () => {
  const [valorBotao, setValorBotao] = useState('');

  function handleBotao(data) {
    console.log('Botão clicado em -> ', data);
    setValorBotao(data);
  }

  return (
    <SafeAreaView>
      <Titulo text="Hi Bro" subtitle={true} />
      <Titulo text={'Hi Men ' + valorBotao} />
      <Titulo text="Hi family" />
      <Titulo text="Hi man" />

      <Botao label="A data é " onPress={handleBotao} />
    </SafeAreaView>
  );
};

export default App;

//  O que o Touchable Opacity passa

// function sendForConsoleTeste(x, y, z) {
//   console.log('debug', ` ${x}${y}${z}`);
// }
