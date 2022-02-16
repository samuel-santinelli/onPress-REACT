import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Botao = props => {
  const label = props.label;
  const estado = false;

  function handleTouch() {
    props.onPress(new Date(), label);
    // props.onPress(new Date(), 'a data é: ');
  }

  return (
    <TouchableOpacity onPress={handleTouch}>
      <View style={styles.container}>
        <Text style={styles.botao}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Botao;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  botao: {
    color: 'red',
    fontSize: 18,
  },
});
