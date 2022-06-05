import React from 'react';
import {StyleSheet, View} from 'react-native';
import ItemListMenu from '../ItemListMenu';

const ProfileTabSection = ({navigation}) => {
  return (
    <View style={styles.containerAccount}>
      <ItemListMenu text="Edit Profile" />
      <ItemListMenu text="Home Address" />
      <ItemListMenu text="Security" />
      <ItemListMenu text="Payments" />
      <ItemListMenu text="SignOut" />
    </View>
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  tabView: {backgroundColor: 'white'},
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {width: 'auto'},
  tabText: focused => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  containerAccount: {paddingTop: 8, paddingHorizontal: 24},
  containerFoodMarket: {paddingTop: 8, paddingHorizontal: 24},
});
