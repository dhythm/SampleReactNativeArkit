import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ARKitContainer from 'src/templates/ARKitContainer';

const HomePage: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.separator} />
      <ARKitContainer />
      <View style={styles.separator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 25,
    backgroundColor: 'grey',
  },
});

export default HomePage;
