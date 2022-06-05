import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Number from '../Number';
import {Gap} from '../../atoms';

const ProductCard = ({image, name, price, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
          <Number number={price} style={styles.price} />
        </View>
      </View>
      <Gap height={16} />
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 7,
    marginRight: 8,
    marginLeft: 8,
  },
  image: {
    width: 150,
    height: 150,
    margin: 8,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  content: {padding: 12},
  text: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
  price: {fontSize: 12, fontFamily: 'Poppins-Regular', color: '#5EBA7D'},
});
