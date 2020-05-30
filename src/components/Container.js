import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../colors';

const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    // justifyContent: 'center',
  },
});

export default Container;
