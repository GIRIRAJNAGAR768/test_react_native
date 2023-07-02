/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

function App(): JSX.Element {
  const whiteBackground = {backgroundColor: '#FFFFFF'};

  return (
    <SafeAreaView style={whiteBackground}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={whiteBackground}>
        <View style={whiteBackground}>
          <Text>{'HERERERE'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
