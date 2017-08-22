import React from 'react';
import { View } from 'react-native';

const styles = {
  cardStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

const CardSection = ({ children }) => {
  const { cardStyle } = styles;
  return (
    <View style={cardStyle}>
      {children}
    </View>
  );
};

export { CardSection };
