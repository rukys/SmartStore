import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import useStoreUser from '../../stores/useStoreUser';

const Splash = ({navigation}) => {
  const {token} = useStoreUser(state => state);
  useEffect(() => {
    if (token) {
      navigation.replace('MainApp');
    } else {
      setTimeout(() => {
        navigation.replace('SignIn');
      }, 2000);
    }
  }, [navigation, token]);
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>SmartStore</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'},
});
