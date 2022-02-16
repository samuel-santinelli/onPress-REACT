import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Titulo = props => {
  console.log(props);

  const s = {
    ...styles.title,
    ...props.style,
    fontSize: props.subtitulo
      ? styles.subtitulo.fontSize
      : styles.title.fontSize,
    color: styles.title.color,
  };

  return (
    <View>
      <Text style={s}>{props.text}</Text>
    </View>
  );
};

export default Titulo;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color: 'darkblue',
    marginLeft: 5,
  },
  subtitulo: {
    fontSize: 24,
  },
});
