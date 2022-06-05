import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import ItemListProduct from '../ItemListProduct';
import useStoreOrder from '../../../stores/useStoreOrder';

const OrderTabSection = () => {
  const navigation = useNavigation();
  const {listOrder} = useStoreOrder(state => state);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.containerInProgress}>
        {listOrder.map(order => {
          return (
            <ItemListProduct
              key={order.id}
              image={{uri: order.item.image}}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type="in-progress"
              items={order.transaction.totalItem}
              price={order.transaction.totalPrice}
              name={order.item.name}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  containerInProgress: {paddingTop: 8, paddingHorizontal: 24},
  containerPastOrders: {paddingTop: 8, paddingHorizontal: 24},
});
