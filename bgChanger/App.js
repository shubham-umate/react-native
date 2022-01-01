import React, {useState} from 'react';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  //const randomColor = 'rgb(21,0,126)';
  const [randomColor, setRandomColor] = useState('rgb(32,0,126)');

  const changeBG = () => {
    //Math.floor(Math.random() * 256)

    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  const resetBG = () => {
    //Math.floor(Math.random() * 256)

    let color = '#000000';
    setRandomColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Change BG</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBG}>
          <Text style={[styles.text, {marginTop: 20}]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});
